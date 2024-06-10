import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
} from 'class-validator';

export class CreateDishDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsUrl()
  readonly image: string;

  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @IsNumber()
  @IsPositive()
  price: number;

  @IsInt()
  @IsPositive()
  stock: number;

  @IsInt()
  @IsPositive()
  readonly dishCategoryId: number;
}
