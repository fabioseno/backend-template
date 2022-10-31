import { MemoryOrderRepository } from '@app/order/infra/repository/memory-order.repository';
import { Test, TestingModule } from '@nestjs/testing';
import { Order } from '../entity/order';
import { OrderItem } from '../entity/order-item';
import { OrderRepository } from '../repository/order.repository';
import { OrderService } from './order.service';

describe('OrderService', () => {
    let service: OrderService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [OrderService, { provide: OrderRepository, useClass: MemoryOrderRepository }]
        }).compile();

        service = module.get<OrderService>(OrderService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });

    describe('find', () => {
        it('should find by id', async () => {
            const order = await service.create(new Order(new Date(), []));
            const orders = await service.findAll({ id: order.id });

            expect(orders.length).toBe(1);
        });

        it('should not find by id', async () => {
            await service.create(new Order(new Date(), []));
            const orders = await service.findAll({ id: '222' });

            expect(orders.length).toBe(0);
        });
    });

    describe('create', () => {
        it('should have an id', async () => {
            const orderItem = new OrderItem('111', 1, 10);
            const order = await service.create(new Order(new Date(), [orderItem]));

            expect(order.id).toBeDefined();
            expect(order.items.length).toBe(1);
        });

        it('should create an empty items array', async () => {
            const order = await service.create(new Order(new Date()));

            expect(order.id).toBeDefined();
            expect(order.items.length).toBeDefined();
        });
    });

    describe('update', () => {
        it('should update an order', async () => {
            const orderItem = new OrderItem('P12345', 1, 10);
            let order = await service.create(new Order(new Date(), [orderItem]));

            order = await service.update(order.id, new Order(new Date('2022-10-10'), [orderItem]));

            expect(order.date).toStrictEqual(new Date('2022-10-10'));
        });

        it('should throw an error if not found', async () => {
            const orderItem = new OrderItem('P12345', 1, 10);
            await service.create(new Order(new Date(), [orderItem]));

            expect(() => {
                service.update('222', new Order(new Date(), [orderItem]));
            }).toThrow('Order not found');
        });
    });


    describe('delete', () => {
        it('should delete an order', async () => {
            const orderItem = new OrderItem('P12345', 1, 10);
            let order = await service.create(new Order(new Date(), [orderItem]));

            const result = await service.remove(order.id);

            expect(result).toBe(true);
        });

        it('should throw an error if not found', async () => {
            const orderItem = new OrderItem('P12345', 1, 10);
            await service.create(new Order(new Date(), [orderItem]));

            expect(() => {
                service.remove('222');
            }).toThrow('Order not found');
        });
    });
});
