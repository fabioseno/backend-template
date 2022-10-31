import { OrderRepository } from "@app/order/domain/repository/order.repository";
import { Order } from "@app/order/domain/entity/order";

export class MemoryOrderRepository implements OrderRepository {

    private orders: Order[] = [];

    findAll(filter: any): Promise<Order[]> {
        return Promise.resolve(this.orders.filter(order => order.id === filter.id));
    }

    create(data: Order): Promise<Order> {
        const orderData = new Order(data.date, data.items);
        this.orders.push(orderData);
        return Promise.resolve(orderData);
    }

    update(orderId: string, data: Order): Promise<Order> {
        let order = this.orders.find(order => order.id === orderId);

        if (!order) {
            throw new Error('Order not found');
        }

        order = new Order(data.date, data.items);

        return Promise.resolve(order);
    }
    remove(orderId: string): Promise<boolean> {
        const orderIndex = this.orders.findIndex(order => order.id === orderId);

        if (orderIndex < 0) {
            throw new Error('Order not found');
        }

        this.orders.splice(orderIndex, 1);

        return Promise.resolve(true);
    }

}