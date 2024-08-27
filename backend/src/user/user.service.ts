import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { User } from '@prisma/client';
import { SignUpDto } from './dto/signUp.dto';
import { AuthService } from 'src/auth/auth.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly authService: AuthService,
  ) {}
  async signUp(dto: SignUpDto): Promise<{ user: User; token: string }> {
    const existingUser = await this.prisma.user.findUnique({
      where: {
        login: dto.login,
      },
    });
    if (existingUser) {
      throw new HttpException('login has be taken', HttpStatus.BAD_REQUEST);
    }
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user = await this.prisma.user.create({
      data: { ...dto, password: hashedPassword },
    });
    const token = await this.authService.generateToken(user);
    return { user: user, ...token };
  }
}
