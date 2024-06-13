import { Module } from '@nestjs/common';
import { ToppingTypesService } from './topping-types.service';
import { ToppingTypesController } from './topping-types.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToppingType } from './entities/topping-type.entity';

@Module({
  controllers: [ToppingTypesController],
  providers: [ToppingTypesService],
  imports: [TypeOrmModule.forFeature([ToppingType])],
  exports: [ToppingTypesService],
})
export class ToppingTypesModule {}
