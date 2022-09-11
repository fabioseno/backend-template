export default class OrderItem {

    constructor(
        readonly productId: string,
        readonly quantity: string,
        readonly unitPrice: number,
        readonly totalPrice: number) { }
        
}