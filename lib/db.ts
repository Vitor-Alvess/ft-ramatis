import { Client, PrismaClient, SaleItem } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import 'dotenv/config';
import { ItemWithPattern, SaleStatusEnum } from './types';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query'] : [],
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export async function findAllItems() {
  return prisma.item.findMany()
}

export async function findItemById(id: bigint) {
  const item = await prisma.item.findUnique({
    where: {id}
  })
  if (!item) throw new Error(`Item with id ${id} not found`);
  return item;
}

export async function createSale(itemsWithPatterns: ItemWithPattern[], client: Client) {
  let totalAmount: number = 0;

  for (const {item, quantity} of itemsWithPatterns) {
    totalAmount += Number(item.value) * quantity;
  }

  return prisma.sale.create({
    data: {
      saleItems: {
        create: itemsWithPatterns.map(({item, pattern, quantity}) => ({
          item: { connect: {id: item.id} }, 
          pattern: {connect: {id: pattern.id} }, 
          quantity: quantity}))
      },
      client: {
        connect: { id: client.id }
      },
      totalAmount: new Decimal(totalAmount)
    }
  });
}

export async function updateSaleStatus(
  id: bigint,
  newStatus: SaleStatusEnum
) {
  return prisma.sale.update({
    where: { id },
    data: {
      status: newStatus
    },
  });
}

export { prisma };
