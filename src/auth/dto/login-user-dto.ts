import { IsEmail, IsIn, IsString } from 'class-validator';

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

  @IsString()
  @IsIn(['android', 'ios'])
  platform: 'android' | 'ios';
}
