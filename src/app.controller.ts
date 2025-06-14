import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('ngrok')
  getNgrok(@Body() payload: any) {
    console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');
    console.log(payload);
    console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$');

    return { status: '200' };
  }
}
