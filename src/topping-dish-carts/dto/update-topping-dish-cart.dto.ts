import { PartialType } from '@nestjs/mapped-types';
import { CreateToppingDishCartDto } from './create-topping-dish-cart.dto';

export class UpdateToppingDishCartDto extends PartialType(CreateToppingDishCartDto) {}
