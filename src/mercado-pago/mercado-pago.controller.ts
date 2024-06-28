import { Controller, Get } from '@nestjs/common';
import { MercadoPagoService } from './mercado-pago.service';

@Controller('mercado-pago')
export class MercadoPagoController {
  constructor(private readonly mercadoPagoService: MercadoPagoService) {}

  @Get('get-cards')
  getCards() {
    return this.mercadoPagoService.getCards('1876638572-38GA6BOwtEVPZU');
  }
}
