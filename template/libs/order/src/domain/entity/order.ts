import { OrderItem } from "./order-item";

export class Order {

    readonly id: string;

    constructor(
        readonly date: Date,
        readonly items: OrderItem[] = [],
    ) {
        this.id = new Date().getTime().toString();
    }

}