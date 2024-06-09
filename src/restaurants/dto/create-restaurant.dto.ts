import {
  IsDate,
  IsDateString,
  IsNumber,
  IsString,
  IsTimeZone,
  IsUrl,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateRestaurantDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsString()
  @MinLength(1)
  address: string;

  @IsString()
  @IsUrl()
  logo: string;

  @IsString()
  @IsUrl()
  backdrop: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @Matches(/^([01]\d|2[0-3]):?([0-5]\d)$/, {
    message: (validationArguments) =>
      `${validationArguments.property} must be a valid time in HH:mm format`,
  })
  openTime: string;

  @Matches(/^([01]\d|2[0-3]):?([0-5]\d)$/, {
    message: (validationArguments) =>
      `${validationArguments.property} must be a valid time in HH:mm format`,
  })
  closeTime: string;
}
