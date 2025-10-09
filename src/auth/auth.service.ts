import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { addDays } from 'date-fns';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

async register(email: string, password: string, phone: string, roleId: number) {
  try {
    // Check if email already exists
    const existingUser = await this.prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new Error('Email already registered');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: {
        email,
        passwordHash: hashedPassword,
        roleId,
      },
    });

    const accessToken = this.jwtService.sign({ userId: user.id, roleId });
    const refreshToken = this.jwtService.sign(
      { userId: user.id },
      { expiresIn: '7d' },
    );

    await this.prisma.token.upsert({
      where: { userId: user.id },
      update: { accessToken, refreshToken, expiresAt: addDays(new Date(), 7) },
      create: {
        userId: user.id,
        accessToken,
        refreshToken,
        expiresAt: addDays(new Date(), 7),
      },
    });

    return { user, accessToken, refreshToken };
  } catch (error) {
    console.error('❌ Registration error:', error);
    throw new Error('Registration failed: ' + error.message);
  }
}


  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: { role: true },
    });

    if (!user) throw new UnauthorizedException('Invalid credentials');
    const valid = await bcrypt.compare(password, user.passwordHash);
    if (!valid) throw new UnauthorizedException('Invalid credentials');

    // Create access + refresh tokens
    const payload = { sub: user.id, role: user.role.name };
    const accessToken = await this.jwtService.signAsync(payload, {
      expiresIn: '15m',
    });
    const refreshToken = await this.jwtService.signAsync(payload, {
      expiresIn: '7d',
    });

    // Save refresh token in DB
    await this.prisma.token.upsert({
      where: { userId: user.id },
      update: { accessToken, refreshToken, expiresAt: addDays(new Date(), 7) },
      create: {
        userId: user.id,
        accessToken,
        refreshToken,
        expiresAt: addDays(new Date(), 7),
      },
    });

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
        role: user.role.name,
      },
    };
  }

  async refreshToken(refreshToken: string) {
    try {
      const decoded = await this.jwtService.verifyAsync(refreshToken, {
        secret: process.env.JWT_SECRET,
      });

      const existingToken = await this.prisma.token.findUnique({
        where: { refreshToken },
        include: { user: { include: { role: true } } },
      });

      if (!existingToken) throw new UnauthorizedException('Invalid token');

      const newPayload = {
        sub: existingToken.user.id,
        role: existingToken.user.role.name,
      };

      const newAccessToken = await this.jwtService.signAsync(newPayload, {
        expiresIn: '15m',
      });

      // Update token record
      await this.prisma.token.update({
        where: { id: existingToken.id },
        data: { accessToken: newAccessToken },
      });

      return { accessToken: newAccessToken };
    } catch (err) {
      throw new UnauthorizedException('Invalid or expired refresh token');
    }
  }
}
