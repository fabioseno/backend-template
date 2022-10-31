import { OrderRepository } from "@app/order/domain/repository/order.repository";
import { Order } from "@app/order/domain/entity/order";

export class MySQLOrderRepository implements OrderRepository {
    findAll(filter: any): Promise<Order[]> {
        throw new Error("Method not implemented.");
    }

    create(data: Order): Promise<Order> {
        throw new Error("Method not implemented.");
    }

    update(orderId: string, data: Order): Promise<Order> {
        throw new Error("Method not implemented.");
    }

    remove(orderId: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}