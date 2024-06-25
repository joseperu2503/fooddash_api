import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { Address } from './entities/address.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddressTag } from 'src/address-tags/entities/address-tag.entity';
import { AddressDeliveryDetail } from 'src/address-delivery-details/entities/address-delivery-detail.entity';
import { User } from 'src/auth/entities/user.entity';

@Injectable()
export class AddressesService {
  constructor(
    @InjectRepository(Address)
    private readonly addressRepository: Repository<Address>,
    @InjectRepository(AddressTag)
    private readonly addressTagRepository: Repository<AddressTag>,
    @InjectRepository(AddressDeliveryDetail)
    private readonly addressDeliveryDetailRepository: Repository<AddressDeliveryDetail>,
  ) {}

  async create(createAddressDto: CreateAddressDto, user: User) {
    const address = this.addressRepository.create(createAddressDto);

    if (createAddressDto.addressTagId) {
      const addressTag = await this.addressTagRepository.findOne({
        where: { id: createAddressDto.addressTagId },
      });
      if (!addressTag) {
        throw new NotFoundException(
          `Address tag ${createAddressDto.addressTagId} not found`,
        );
      }

      address.addressTag = addressTag;
    }

    if (createAddressDto.addressDeliveryDetailId) {
      const AddressDeliveryDetail =
        await this.addressDeliveryDetailRepository.findOne({
          where: { id: createAddressDto.addressDeliveryDetailId },
        });
      if (!AddressDeliveryDetail) {
        throw new NotFoundException(
          `Address delivery detail ${createAddressDto.addressDeliveryDetailId} not found`,
        );
      }

      address.addressDeliveryDetail = AddressDeliveryDetail;
    }

    address.user = user;

    await this.addressRepository.save(address);
    delete address.user;
    delete address.createdAt;
    delete address.updatedAt;

    return address;
  }

  async MyAddresses(user: User) {
    const addresses = await this.addressRepository.find({
      where: { user: { id: user.id } },
      select: [
        'id',
        'city',
        'country',
        'address',
        'latitude',
        'longitude',
        'detail',
        'references',
      ],
      relations: {
        addressTag: true,
        addressDeliveryDetail: true,
      },
    });

    return addresses;
  }

  findAll() {
    return `This action returns all addresses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} address`;
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return `This action updates a #${id} address`;
  }

  remove(id: number) {
    return `This action removes a #${id} address`;
  }
}