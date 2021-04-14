import { Module } from '@nestjs/common';
import { PrismaOneService } from './prisma1.service';

@Module({
  controllers: [],
  providers: [PrismaOneService],
  exports: [PrismaOneService],
})
export class Prisma1Module {}
