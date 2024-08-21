import { IsEmail, IsString } from 'class-validator';

export class LoginUserDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

export class LoginUserGoogleDto {
  @IsString()
  idToken: string;
}

export class LoginUserFacebookDto {
  @IsString()
  accessToken: string;
}
