import { PrismaClient } from '../node_modules/.prisma/client';
import { BaseContext } from '@apollo/server';

export interface Context extends BaseContext {
  prisma: PrismaClient;
}

const prisma = new PrismaClient();

export const context: Context = {
  prisma: prisma,
};
