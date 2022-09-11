import OrderItem from "./order-item";

export class Order {

    constructor(
        readonly id: string,
        readonly date: Date,
        readonly items: OrderItem[] = []) { }
        
}