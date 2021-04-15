import { Injectable } from '@nestjs/common';
import { PrismaOneService } from '@prisma-test/prisma1';
import { PrismaTwoService } from '@prisma-test/prisma2';

@Injectable()
export class AppService {
  constructor(
    private prismaOneService: PrismaOneService,
    private prismaTwoService: PrismaTwoService
  ) {
    this.prismaOneService.prismaOneProduct;
    // This one type checks to having the same table as PrismaOneService even though it should have Cateogry
    this.prismaTwoService.category;
  }

  getData(): { message: string } {
    return { message: 'Welcome to api!' };
  }
}
