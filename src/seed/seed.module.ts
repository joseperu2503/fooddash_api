import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { RestaurantsModule } from 'src/restaurants/restaurants.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [RestaurantsModule],
})
export class SeedModule {}
