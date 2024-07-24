import { Module } from '@nestjs/common';
import { ToppingCategoriesService } from './topping-categories.service';
import { ToppingCategoriesController } from './topping-categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToppingCategory } from './entities/topping-category.entity';
import { Restaurant } from 'src/restaurants/entities/restaurant.entity';

@Module({
  controllers: [ToppingCategoriesController],
  providers: [ToppingCategoriesService],
  imports: [TypeOrmModule.forFeature([ToppingCategory, Restaurant])],
  exports: [ToppingCategoriesService],
})
export class ToppingCategoriesModule {}
