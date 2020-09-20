import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SetValueDto } from './types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  get(): unknown {
    return this.appService.get();
  }

  @Post()
  set(@Body() body: SetValueDto): void {
    return this.appService.set(body);
  }

  @Post('reset')
  reset(@Body() body?: SetValueDto): void {
    return this.appService.reset(body);
  }
}
