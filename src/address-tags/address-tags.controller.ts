import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AddressTagsService } from './address-tags.service';
import { CreateAddressTagDto } from './dto/create-address-tag.dto';
import { UpdateAddressTagDto } from './dto/update-address-tag.dto';

@Controller('address-tags')
export class AddressTagsController {
  constructor(private readonly addressTagsService: AddressTagsService) {}

  @Post()
  create(@Body() createAddressTagDto: CreateAddressTagDto) {
    return this.addressTagsService.create(createAddressTagDto);
  }

  @Get()
  findAll() {
    return this.addressTagsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.addressTagsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAddressTagDto: UpdateAddressTagDto) {
    return this.addressTagsService.update(+id, updateAddressTagDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressTagsService.remove(+id);
  }
}
