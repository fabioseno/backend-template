import OrderItem from "./OrderItem";

export class Order {

    constructor(
        readonly id: string,
        readonly date: Date,
        readonly items: OrderItem[] = []) { }
        
}