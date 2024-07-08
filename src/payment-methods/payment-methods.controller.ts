import { Controller, Get } from '@nestjs/common';
import { PaymentMethodsService } from './payment-methods.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { User } from 'src/auth/entities/user.entity';

@Controller('payment-methods')
export class PaymentMethodsController {
  constructor(private readonly paymentMethodsService: PaymentMethodsService) {}

  @Get('my-payment-methods')
  @Auth()
  myCards(@GetUser() user: User) {
    return this.paymentMethodsService.myPaymentMethods(user);
  }
}
