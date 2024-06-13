import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Restaurant } from './entities/restaurant.entity';
import { RestaurantCategoriesModule } from 'src/categories/restaurant-categories.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  controllers: [RestaurantsController],
  providers: [RestaurantsService],
  imports: [
    TypeOrmModule.forFeature([Restaurant]),
    RestaurantCategoriesModule,
    AuthModule,
  ],
  exports: [RestaurantsService],
})
export class RestaurantsModule {}
