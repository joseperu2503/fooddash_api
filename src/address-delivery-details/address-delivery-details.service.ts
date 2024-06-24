import { Injectable } from '@nestjs/common';
import { CreateAddressDeliveryDetailDto } from './dto/create-address-delivery-detail.dto';
import { UpdateAddressDeliveryDetailDto } from './dto/update-address-delivery-detail.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressDeliveryDetail } from './entities/address-delivery-detail.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AddressDeliveryDetailsService {
  constructor(
    @InjectRepository(AddressDeliveryDetail)
    private readonly addressDeliverDetailRepository: Repository<AddressDeliveryDetail>,
  ) {}

  async create(createAddressDeliveryDetailDto: CreateAddressDeliveryDetailDto) {
    const addressDeliveryDetail = this.addressDeliverDetailRepository.create(
      createAddressDeliveryDetailDto,
    );
    await this.addressDeliverDetailRepository.save(addressDeliveryDetail);
  }

  findAll() {
    return `This action returns all addressDeliveryDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} addressDeliveryDetail`;
  }

  update(
    id: number,
    updateAddressDeliveryDetailDto: UpdateAddressDeliveryDetailDto,
  ) {
    return `This action updates a #${id} addressDeliveryDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} addressDeliveryDetail`;
  }
}
