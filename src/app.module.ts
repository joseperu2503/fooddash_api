import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { SeedModule } from './seed/seed.module';
import { RestaurantCategoriesModule } from './categories/restaurant-categories.module';
import { DishCategoriesModule } from './dish-categories/dish-categories.module';
import { DishesModule } from './dishes/dishes.module';
import { AuthModule } from './auth/auth.module';
import { ToppingsModule } from './toppings/toppings.module';
import { ToppingTypesModule } from './topping-types/topping-types.module';
import { ToppingCategoriesModule } from './topping-categories/topping-categories.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERMAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    RestaurantsModule,
    SeedModule,
    RestaurantCategoriesModule,
    DishCategoriesModule,
    DishesModule,
    AuthModule,
    ToppingsModule,
    ToppingTypesModule,
    ToppingCategoriesModule,
  ],
})
export class AppModule {}
