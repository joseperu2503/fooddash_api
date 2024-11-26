import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { AddressesService } from './services/addresses.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/entities/user.entity';
import { GoogleMapsService } from './services/google-maps.service';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@Controller('addresses')
@ApiTags('Addresses')
export class AddressesController {
  constructor(
    private readonly addressesService: AddressesService,
    private readonly googleMapsService: GoogleMapsService,
  ) {}

  @Get()
  @Auth()
  @ApiOperation({
    summary: "Retrieve the authenticated user's addresses",
  })
  @ApiResponse({
    status: 200,
    description:
      'Successfully retrieved the list of addresses for the authenticated user.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized.',
  })
  @ApiBearerAuth()
  async addresses(@GetUser() user: User) {
    return this.addressesService.addresses(user);
  }

  @Post()
  @Auth()
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Add a new address for the authenticated user.',
  })
  @ApiResponse({
    status: 201,
    description:
      "Successful operation. The new address has been added to the user's list.",
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized.',
  })
  @ApiBody({
    type: CreateAddressDto,
  })
  async create(
    @Body() createAddressDto: CreateAddressDto,
    @GetUser() user: User,
  ) {
    return this.addressesService.create(createAddressDto, user);
  }

  @ApiBearerAuth()
  @Get('autocomplete')
  @Auth()
  @ApiOperation({
    summary:
      'Retrieve address suggestions based on input using Google Maps Autocomplete.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Successfully retrieved address suggestions based on the input.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized.',
  })
  async autocomplete(@Query('input') input: string) {
    return this.googleMapsService.autocomplete(input);
  }

  @ApiBearerAuth()
  @Get('place-details')
  @Auth()
  @ApiOperation({
    summary:
      'Retrieve detailed information about a place using its placeId from Google Maps.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Successfully retrieved place details using the provided placeId.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized.',
  })
  async placeDetails(@Query('placeId') placeId: string) {
    return this.googleMapsService.placeDetails(placeId);
  }

  @ApiBearerAuth()
  @Get('geocode')
  @Auth()
  @ApiOperation({
    summary:
      'Retrieve address information based on geographic coordinates (latitude and longitude) from Google Maps.',
  })
  @ApiResponse({
    status: 200,
    description:
      'Successfully retrieved the address for the provided geographic coordinates.',
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized.',
  })
  async geocode(@Query('lat') lat: string, @Query('lng') lng: string) {
    return this.googleMapsService.geocode(lat, lng);
  }
}
