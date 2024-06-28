import { Body, Controller, Get, Post } from '@nestjs/common';
import { CardsService } from './cards.service';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { User } from 'src/auth/entities/user.entity';
import { CreateCardDto } from './dto/create-card.dto';

@Controller('cards')
export class CardsController {
  constructor(private readonly cardsService: CardsService) {}

  @Get('my-cards')
  @Auth()
  myCards(@GetUser() user: User) {
    return this.cardsService.myCards(user);
  }

  @Post()
  @Auth()
  create(@Body() createCartDto: CreateCardDto, @GetUser() user: User) {
    return this.cardsService.createCard(createCartDto, user);
  }
}
