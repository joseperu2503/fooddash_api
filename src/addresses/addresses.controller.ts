import { Controller, Get, Post, Body } from '@nestjs/common';
import { AddressesService } from './addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/entities/user.entity';

@Controller('addresses')
export class AddressesController {
  constructor(private readonly addressesService: AddressesService) {}

  @Post()
  @Auth()
  create(@Body() createAddressDto: CreateAddressDto, @GetUser() user: User) {
    return this.addressesService.create(createAddressDto, user);
  }

  @Get('my-addresses')
  @Auth()
  myAddresses(@GetUser() user: User) {
    return this.addressesService.MyAddresses(user);
  }
}
