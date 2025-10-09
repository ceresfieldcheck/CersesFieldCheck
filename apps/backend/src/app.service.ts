// src/app.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async getUsers() {
    return this.prisma.user.findMany({
      select: { id: true, email: true, role: { select: { name: true } } },
    });
  }

  getHello(): string {
    return 'Hello World!';
  }
}
