import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddressDeliveryDetailsService } from './address-delivery-details.service';
import { CreateAddressDeliveryDetailDto } from './dto/create-address-delivery-detail.dto';
import { UpdateAddressDeliveryDetailDto } from './dto/update-address-delivery-detail.dto';

@Controller('address-delivery-details')
export class AddressDeliveryDetailsController {
  constructor(private readonly addressDeliveryDetailsService: AddressDeliveryDetailsService) {}

  @Post()
  create(@Body() createAddressDeliveryDetailDto: CreateAddressDeliveryDetailDto) {
    return this.addressDeliveryDetailsService.create(createAddressDeliveryDetailDto);
  }

  @Get()
  findAll() {
    return this.addressDeliveryDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressDeliveryDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddressDeliveryDetailDto: UpdateAddressDeliveryDetailDto) {
    return this.addressDeliveryDetailsService.update(+id, updateAddressDeliveryDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressDeliveryDetailsService.remove(+id);
  }
}
