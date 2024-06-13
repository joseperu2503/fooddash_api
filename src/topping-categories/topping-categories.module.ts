import { Module } from '@nestjs/common';
import { ToppingCategoriesService } from './topping-categories.service';
import { ToppingCategoriesController } from './topping-categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToppingCategory } from './entities/topping-category.entity';

@Module({
  controllers: [ToppingCategoriesController],
  providers: [ToppingCategoriesService],
  imports: [TypeOrmModule.forFeature([ToppingCategory])],
  exports: [ToppingCategoriesService],
})
export class ToppingCategoriesModule {}
