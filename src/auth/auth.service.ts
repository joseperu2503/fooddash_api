import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import {
  LoginUserDto,
  LoginUserFacebookDto,
  LoginUserGoogleDto,
} from './dto/login-user-dto';
import { JwtPayload } from './interfaces/jwt-payload.interfaces';
import { JwtService } from '@nestjs/jwt';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { MercadoPagoService } from 'src/mercado-pago/mercado-pago.service';
import { CustomerResponse } from 'mercadopago/dist/clients/customer/commonTypes';
import { CustomerSearchResultsPage } from 'mercadopago/dist/clients/customer/search/types';
import { OAuth2Client } from 'google-auth-library';
import * as jwt from 'jsonwebtoken';
import * as jwks from 'jwks-rsa';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
    private readonly mercadoPagoService: MercadoPagoService,
    private readonly dataSource: DataSource,
  ) {}

  private jwksClient = jwks({
    jwksUri: 'https://limited.facebook.com/.well-known/oauth/openid/jwks',
  });

  async register(registerUserDto: RegisterUserDto) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const { password, ...userData } = registerUserDto;

      const user = this.userRepository.create({
        ...userData,
        password: bcrypt.hashSync(password, 10),
      });
      await this.userRepository.save(user);

      const searchCustomer: CustomerSearchResultsPage =
        await this.mercadoPagoService.searchCustomer(user);
      if (searchCustomer.results?.length > 0) {
        user.mpCustomerId = searchCustomer.results[0].id;
      } else {
        const newCustomer: CustomerResponse =
          await this.mercadoPagoService.createCustomer(user);
        user.mpCustomerId = newCustomer.id;
      }

      await this.userRepository.save(user);
      await queryRunner.commitTransaction();
      await queryRunner.release();

      const me = this.me(user);

      return { user: me, token: this.getJwt({ id: user.id }) };
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      if (error.code === '23505') {
        throw new BadRequestException(error.detail);
      }
      throw new InternalServerErrorException(error);
    }
  }

  async login(loginUserDto: LoginUserDto) {
    const { password, email } = loginUserDto;

    const user = await this.userRepository.findOne({
      where: { email },
    });

    //si el usuario con el email no existe
    if (!user) {
      throw new UnauthorizedException(`Credentials are not valid`);
    }

    //si la contraseña es incorrecta
    if (!bcrypt.compareSync(password, user.password)) {
      throw new UnauthorizedException(`Credentials are not valid`);
    }
    const me = this.me(user);
    return { user: me, token: this.getJwt({ id: user.id }) };
  }

  async loginGoogle(loginUserDto: LoginUserGoogleDto) {
    const { idToken } = loginUserDto;

    const client = new OAuth2Client({
      clientId: process.env.GOOGLE_CLIENT_ID,
    });

    const ticket = await client.verifyIdToken({
      idToken: idToken,
    });

    const payload = ticket.getPayload();

    const email = payload.email;

    const user = await this.userRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException(`Unregistered user`);
    }

    const me = this.me(user);
    return { user: me, token: this.getJwt({ id: user.id }) };
  }

  async loginFacebook(loginUserDto: LoginUserFacebookDto) {
    const { accessToken } = loginUserDto;

    const email: string = await this.validateFbToken(accessToken);

    if (!email) {
      throw new UnauthorizedException(`Unregistered user`);
    }

    const user = await this.userRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException(`Unregistered user`);
    }

    const me = this.me(user);
    return { user: me, token: this.getJwt({ id: user.id }) };
  }

  async validateFbToken(token: string): Promise<null> {
    //** https://developers.facebook.com/docs/facebook-login/limited-login/token/?locale=es_ES#jwks */

    const appId: string = process.env.FACEBOOK_APP_ID;

    try {
      // Decodificar el encabezado para obtener el `kid`
      const decodedHeader: any = jwt.decode(token, { complete: true });
      const kid = decodedHeader.header.kid;

      // Obtener la clave pública
      const key = await this.jwksClient.getSigningKey(kid);
      const publicKey = key.getPublicKey();

      // Verificar la firma del token
      const decodedToken: jwt.JwtPayload | string = jwt.verify(
        token,
        publicKey,
        {
          algorithms: ['RS256'],
        },
      );

      if (typeof decodedToken === 'string') {
        return null;
      }

      const payload = decodedToken as jwt.JwtPayload;

      const email = payload.email;
      if (!email) {
        return null; // No se encontró el email en el token
      }

      const now = Math.floor(Date.now() / 1000);
      if (payload.exp < now) {
        //Token has expired
        return null;
      }
      if (payload.iss !== 'https://www.facebook.com') {
        //Invalid token issuer
        return null;
      }
      if (payload.aud !== appId) {
        //Invalid token audience
        return null;
      }

      // Token válido
      return email;
    } catch (error) {
      return null;
    }
  }

  me(user: User) {
    const { id, email, name, surname, phone } = user;

    return {
      id,
      email,
      name,
      surname,
      phone,
    };
  }

  async update(user: User, UpdateAuthDto: UpdateAuthDto) {
    this.userRepository.merge(user, UpdateAuthDto);

    await this.userRepository.save(user);
    return this.me(user);
  }

  private getJwt(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);
    return token;
  }

  async findOne(userId: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id: userId });
    return user;
  }
}
