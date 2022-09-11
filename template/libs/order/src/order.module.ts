import { Module } from '@nestjs/common';
import { OrderService } from './domain/service/order.service';
import { OrderRepository } from './domain/repository/order.repository';
import MySQLOrderRepository from './infra/repository/mysql-order.repository';

@Module({
  providers: [OrderService,
    {
      provide: OrderRepository,
      useClass: MySQLOrderRepository,
    }
  ],
  exports: [OrderService],
})
export class OrderModule { }
