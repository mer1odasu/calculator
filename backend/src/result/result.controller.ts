import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ResultService } from './result.service';
import { CalculationResult } from '@prisma/client';
import { JwtAuthGuard } from 'src/guards/jwtAuth.guard';
import { writeResult } from './result.dto';

@Controller('user/:userId/result')
export class ResultController {
  constructor(private readonly resultService: ResultService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getUserCalculationResults(
    @Param('userId') userId: number,
  ): Promise<CalculationResult[]> {
    return this.resultService.getUserCalculationResults(Number(userId));
  }
  @UseGuards(JwtAuthGuard)
  @Post()
  async writeResult(
    @Param('userId') userId: number,
    @Body() resultData: writeResult,
  ): Promise<{ message }> {
    return this.resultService.writeResult(Number(userId), resultData);
  }
}
