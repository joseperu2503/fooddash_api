import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CustomerCardResponse } from 'mercadopago/dist/clients/customerCard/commonTypes';
import { User } from 'src/auth/entities/user.entity';
import { MercadoPagoService } from 'src/mercado-pago/mercado-pago.service';
import { CreateCardDto } from './dto/create-card.dto';

@Injectable()
export class CardsService {
  constructor(private readonly mercadoPagoService: MercadoPagoService) {}

  async myCards(user: User) {
    try {
      const cards = await this.mercadoPagoService.getCards(user.mpCustomerId);
      return cards.map((card) => ({
        id: card.id,
        expirationMonth: card.expiration_month,
        expirationYear: card.expiration_year,
        firstSixDigits: card.first_six_digits,
        lastFourDigits: card.last_four_digits,
        issuer: card.issuer.name,
        cardHolder: {
          name: card.cardholder.name,
          identification: {
            number: card.cardholder.identification.number,
            type: card.cardholder.identification.type,
          },
        },
        securityCode: {
          length: card.security_code.length,
          cardLocation: card.security_code.card_location,
        },
        paymentMethod: {
          id: card.payment_method.id,
          name: card.payment_method.name,
          paymentTypeId: card.payment_method.payment_type_id,
          thumbnail: card.payment_method.thumbnail,
          secureThumbnail: card.payment_method.secure_thumbnail,
        },
      }));
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async createCard(createCartDto: CreateCardDto, user: User) {
    try {
      const card: CustomerCardResponse =
        await this.mercadoPagoService.createCard(
          createCartDto.token,
          user.mpCustomerId,
        );
      return card;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}