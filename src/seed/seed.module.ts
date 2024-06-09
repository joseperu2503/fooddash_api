import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { RestaurantsModule } from 'src/restaurants/restaurants.module';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [RestaurantsModule, CategoriesModule],
})
export class SeedModule {}
