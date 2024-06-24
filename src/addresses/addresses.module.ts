import { Module } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { AddressesController } from './addresses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities/address.entity';
import { AuthModule } from 'src/auth/auth.module';
import { AddressTag } from 'src/address-tags/entities/address-tag.entity';
import { AddressDeliveryDetail } from 'src/address-delivery-details/entities/address-delivery-detail.entity';

@Module({
  controllers: [AddressesController],
  providers: [AddressesService],
  imports: [
    TypeOrmModule.forFeature([Address, AddressTag, AddressDeliveryDetail]),
    AuthModule,
  ],
  exports: [AddressesService],
})
export class AddressesModule {}
