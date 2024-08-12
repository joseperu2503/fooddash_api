import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import { JoinOrderDto } from './dto/join-order.dto';
import { Order } from './entities/order.entity';
import { OrdersService } from './orders.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/auth/entities/user.entity';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/auth/interfaces/jwt-payload.interfaces';

@WebSocketGateway({ cors: true, namespace: '/orders' })
export class OrdersGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(
    private readonly ordersService: OrdersService,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    private eventEmitter: EventEmitter2,

    private readonly jwtService: JwtService,
  ) {
    this.eventEmitter.on('order.orderUpdated', (order: Order) =>
      this.emitOrderUpdate(order),
    );
  }

  handleConnection(client: Socket) {
    // console.log('Client connected:', client.id);
    const token = client.handshake.headers.authorization as string;

    try {
      this.jwtService.verify(token);
    } catch (error) {
      client.disconnect();
      return;
    }
  }

  handleDisconnect(client: Socket) {
    // console.log('Client disconnected:', client.id);
  }

  //** Método para emitir el estado de la orden a todos los clientes en el canal */
  emitOrderUpdate(order: Order) {
    // console.log(`emit orden ${order.id} actualizada ${order.orderStatus.name}`);

    const room = `order_${order.id}`;
    this.server.to(room).emit('orderUpdate', order);
  }

  //** Suscribirse a un canal específico */
  @SubscribeMessage('joinOrderChannel')
  async handleJoinOrderChannel(client: Socket, data: JoinOrderDto) {
    const token = client.handshake.headers.authorization as string;
    let payload: JwtPayload;
    try {
      payload = this.jwtService.verify(token);
      const user = await this.userRepository.findOneBy({ id: payload.id });
      const orderResponse = await this.ordersService.findOne(
        user,
        data.orderId,
      );

      if (orderResponse) {
        client.join(`order_${data.orderId}`);
        console.log(`Client ${client.id} joined order-${data.orderId} channel`);

        this.emitOrderUpdate(orderResponse);
      }
    } catch (error) {
      return;
    }
  }
}
