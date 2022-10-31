import { Injectable } from "@nestjs/common";
import { OrderRepository } from "../repository/order.repository";
import { Order } from "../entity/order";

@Injectable()
export class OrderService {

    constructor(private orderRepository: OrderRepository) { }

    findAll(filter): Promise<Order[]> {
        return this.orderRepository.findAll(filter);
    }

    create(order: Order): Promise<Order> {
        return this.orderRepository.create(order);
    }

    update(orderId: string, order: Order): Promise<Order> {
        return this.orderRepository.update(orderId, order);
    }

    remove(orderId: string): Promise<boolean> {
        return this.orderRepository.remove(orderId);
    }

}