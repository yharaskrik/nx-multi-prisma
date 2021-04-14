import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Prisma1Module } from '@prisma-test/prisma1';
import { Prisma2Module } from '@prisma-test/prisma2';

@Module({
  imports: [Prisma1Module, Prisma2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
