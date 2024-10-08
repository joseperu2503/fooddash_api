import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderStatusDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
