import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/entities/user.entity';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ApiExcludeController } from '@nestjs/swagger';
import { CartsService } from '../services/carts.service';
import { CreateCartDto } from '../dto/create-cart.dto';

@Controller('cart')
@ApiExcludeController()
export class CartController {
  constructor(private readonly cartService: CartsService) {}

  @Post()
  @Auth()
  create(@Body() createCartDto: CreateCartDto, @GetUser() user: User) {
    return this.cartService.create(createCartDto, user);
  }

  @Get()
  @Auth()
  myCart(@GetUser() user: User) {
    return this.cartService.myCart(user);
  }

  @Delete()
  @Auth()
  remove(@GetUser() user: User) {
    return this.cartService.emptyCart(user);
  }
}
