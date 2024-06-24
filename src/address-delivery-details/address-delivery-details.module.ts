import { Module } from '@nestjs/common';
import { AddressDeliveryDetailsService } from './address-delivery-details.service';
import { AddressDeliveryDetailsController } from './address-delivery-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressDeliveryDetail } from './entities/address-delivery-detail.entity';

@Module({
  controllers: [AddressDeliveryDetailsController],
  providers: [AddressDeliveryDetailsService],
  imports: [TypeOrmModule.forFeature([AddressDeliveryDetail])],
  exports: [AddressDeliveryDetailsService],
})
export class AddressDeliveryDetailsModule {}
