import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { CartsService } from './carts.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/entities/user.entity';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ApiExcludeController } from '@nestjs/swagger';

@Controller('carts')
@ApiExcludeController()
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

  @Delete('/my-cart')
  @Auth()
  remove(@GetUser() user: User) {
    return this.cartService.remove(user);
  }
}
