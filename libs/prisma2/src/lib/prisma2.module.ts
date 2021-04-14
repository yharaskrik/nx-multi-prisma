import { Module } from '@nestjs/common';
import { PrismaTwoService } from './prisma2.service';

@Module({
  controllers: [],
  providers: [PrismaTwoService],
  exports: [PrismaTwoService],
})
export class Prisma2Module {}
