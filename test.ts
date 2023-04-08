import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
  const aho = await prisma.count.update({
    where: { count_id: 1 },
    data: {
      count: {
        decrement: 1,
      },
    },
  });
  console.log(aho);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async () => {
    await prisma.$disconnect();
  });
