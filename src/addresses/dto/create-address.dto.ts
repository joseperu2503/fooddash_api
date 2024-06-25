import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  detail: string;

  @IsString()
  references: string;

  @IsNumber()
  latitude: number;

  @IsNumber()
  longitude: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  readonly addressTagId: number;

  @IsInt()
  @IsPositive()
  @IsOptional()
  readonly addressDeliveryDetailId: number;
}
