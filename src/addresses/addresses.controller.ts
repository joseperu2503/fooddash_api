import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { AddressesService } from './services/addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/entities/user.entity';
import { GoogleMapsService } from './services/google-maps.service';
import { ApiExcludeController } from '@nestjs/swagger';

@Controller('addresses')
@ApiExcludeController()
export class AddressesController {
  constructor(
    private readonly addressesService: AddressesService,
    private readonly googleMapsService: GoogleMapsService,
  ) {}

  @Post()
  @Auth()
  async create(
    @Body() createAddressDto: CreateAddressDto,
    @GetUser() user: User,
  ) {
    return this.addressesService.create(createAddressDto, user);
  }

  @Get('my-addresses')
  @Auth()
  async myAddresses(@GetUser() user: User) {
    return this.addressesService.MyAddresses(user);
  }

  @Get('autocomplete')
  @Auth()
  async autocomplete(@Query('input') input: string) {
    return this.googleMapsService.autocomplete(input);
  }

  @Get('place-details')
  @Auth()
  async placeDetails(@Query('placeId') placeId: string) {
    return this.googleMapsService.placeDetails(placeId);
  }

  @Get('geocode')
  @Auth()
  async geocode(@Query('lat') lat: string, @Query('lng') lng: string) {
    return this.googleMapsService.geocode(lat, lng);
  }
}
