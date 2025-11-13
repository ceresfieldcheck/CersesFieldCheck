import { PrismaClient } from '@prisma/client';
import type { PrismaClient as PrismaClientType } from '@prisma/client';

export const prisma: PrismaClientType = new PrismaClient();
export * from '@prisma/client';
