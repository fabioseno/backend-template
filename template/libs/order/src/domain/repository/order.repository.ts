import { Order } from "../entity/order";

export abstract class OrderRepository {

    abstract findAll(filter): Promise<Order[]>;

    abstract create(data: Order): Promise<Order>;

    abstract update(orderId: string, data: Order): Promise<Order>;

    abstract remove(orderId: string): Promise<boolean>;

}