import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getCount = async () => {
  const data = await prisma.count.findUnique({
    where: { count_id: 1 },
  });
  return data!; // eslint-disable-line @typescript-eslint/no-non-null-assertion
};

export const plus = async () => {
  const data = await prisma.count.update({
    where: { count_id: 1 },
    data: {
      count: {
        increment: 1,
      },
    },
  });
  return data;
};

export const minus = async () => {
  const data = await prisma.count.update({
    where: { count_id: 1 },
    data: {
      count: {
        decrement: 1,
      },
    },
  });
  return data;
};
