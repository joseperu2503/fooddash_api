import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { SeedModule } from './seed/seed.module';
import { RestaurantCategoriesModule } from './restaurant-categories/restaurant-categories.module';
import { DishCategoriesModule } from './dish-categories/dish-categories.module';
import { DishesModule } from './dishes/dishes.module';
import { AuthModule } from './auth/auth.module';
import { ToppingsModule } from './toppings/toppings.module';
import { ToppingCategoriesModule } from './topping-categories/topping-categories.module';
import { DishCartsModule } from './dish-carts/dish-carts.module';
import { ToppingDishCartsModule } from './topping-dish-carts/topping-dish-carts.module';
import { CartsModule } from './carts/carts.module';
import { AppController } from './app.controller';

@Module({
  controllers: [AppController],
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
    ToppingCategoriesModule,
    DishCartsModule,
    ToppingDishCartsModule,
    CartsModule,
  ],
})
export class AppModule {}
