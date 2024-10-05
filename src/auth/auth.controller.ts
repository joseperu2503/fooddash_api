import { Controller, Post, Body, Get, Put } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/register-user.dto';
import {
  LoginUserDto,
  LoginUserFacebookDto,
  LoginUserGoogleDto,
} from './dto/login-user-dto';
import { Auth } from './decorators/auth.decorator';
import { GetUser } from './decorators/get-user.decorator';
import { User } from './entities/user.entity';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { ApiExcludeController } from '@nestjs/swagger';

@Controller('auth')
@ApiExcludeController()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }

  @Post('login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Post('login-google')
  loginGoogle(@Body() loginUserDto: LoginUserGoogleDto) {
    return this.authService.loginGoogle(loginUserDto);
  }

  @Post('login-facebook')
  loginFacebook(@Body() loginUserDto: LoginUserFacebookDto) {
    return this.authService.loginFacebook(loginUserDto);
  }

  @Put('update')
  @Auth()
  update(@GetUser() user: User, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(user, updateAuthDto);
  }

  @Get('me')
  @Auth()
  me(@GetUser() user: User) {
    return this.authService.me(user);
  }
}
