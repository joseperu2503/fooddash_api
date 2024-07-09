import { IsNotEmpty, IsString } from 'class-validator';

export class CreateOrderStatusTypeDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
}
