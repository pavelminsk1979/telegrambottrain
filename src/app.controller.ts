import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import axios from 'axios';

type Message = {
  message: {
    from: {
      id: string;
    };
    text: string;
  };
};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('ngrok')
  async getNgrok(@Body() payload: Message) {
    let newText: string;

    if (payload.message.text === 'привет') {
      newText = 'сам привет, гы-гы-гы, шутка емае, не понимаешь чтоль';
    } else {
      newText = 'a здароваться не учили?';
    }

    const token = '7629205094:AAEaOXVHit2Oq3yzJh3J_rDZa-Q-VQI_fBg';

    await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
      chat_id: payload.message.from.id,
      text: newText,
    });

    return { status: '200' };
  }
}
