import { PartialType } from '@nestjs/mapped-types';
import { CreateToppingTypeDto } from './create-topping-type.dto';

export class UpdateToppingTypeDto extends PartialType(CreateToppingTypeDto) {}
