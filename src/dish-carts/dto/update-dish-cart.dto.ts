import { PartialType } from '@nestjs/mapped-types';
import { CreateDishCartDto } from './create-dish-cart.dto';

export class UpdateDishCartDto extends PartialType(CreateDishCartDto) {}
