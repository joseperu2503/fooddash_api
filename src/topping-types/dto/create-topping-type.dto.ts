import { IsString, MinLength } from 'class-validator';

export class CreateToppingTypeDto {
  @IsString()
  @MinLength(1)
  readonly description: string;
}
