import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma.service';
import { AuthService } from 'src/auth/auth.service';

@Module({
  imports: [AuthService],
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}
