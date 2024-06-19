import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/entities/user.entity';
import { Auth } from 'src/auth/decorators/auth.decorator';

@Controller('carts')
export class CartController {
  constructor(private readonly cartService: CartsService) {}

  @Post()
  @Auth()
  create(@Body() createCartDto: CreateCartDto, @GetUser() user: User) {
    return this.cartService.create(createCartDto, user);
  }

  @Get('my-cart')
  @Auth()
  myCart(@GetUser() user: User) {
    return this.cartService.myCart(user);
  }

  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(+id, updateCartDto);
  }

  @Delete('/my-cart')
  @Auth()
  remove(@GetUser() user: User) {
    return this.cartService.remove(user);
  }
}
