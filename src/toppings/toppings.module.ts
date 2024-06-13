import { Module } from '@nestjs/common';
import { ToppingsService } from './toppings.service';
import { ToppingsController } from './toppings.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Topping } from './entities/topping.entity';

@Module({
  controllers: [ToppingsController],
  providers: [ToppingsService],
  imports: [TypeOrmModule.forFeature([Topping])],
  exports: [ToppingsService],
})
export class ToppingsModule {}
