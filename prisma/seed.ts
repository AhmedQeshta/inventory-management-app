import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const demoUserId = '0b274ad7-0478-4f44-b0b5-62716e2d91ea';

  await prisma.product.createMany({
    data: Array.from({ length: 25 }, (_, index) => ({
      userId: demoUserId,
      name: `Product ${index + 1}`,
      price: (Math.random() * 90 + 10).toFixed(2),
      quantity: Math.floor(Math.random() * 20),
      lowStockAt: Math.floor(Math.random() * 10),
      sku: `SKU-${index + 1}`,
      createdAt: new Date(Date.now() - index * 1000 * 60 * 60 * 24 * (index * 5)),
    })),
  });

  console.log('Products seeded successfully');
  console.log(`products seeded 25 records`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
