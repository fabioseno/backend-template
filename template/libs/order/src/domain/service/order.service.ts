import { Injectable } from "@nestjs/common";
import { OrderRepository } from "../repository/order.repository";
import { Order } from "../entity/Order";

@Injectable()
export class OrderService {

    constructor(private orderRepository: OrderRepository) { }

    find(filter): Promise<Order[]> {
        return this.orderRepository.find(filter);
    }

    create(order): Promise<Order> {
        return this.orderRepository.create(order);
    }

    update(orderId, order): Promise<Order> {
        return this.orderRepository.update(orderId, order);
    }

    remove(orderId): Promise<boolean> {
        return this.orderRepository.remove(orderId);
    }

}