import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import axios from 'axios';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3311);
  const token = '7629205094:AAEaOXVHit2Oq3yzJh3J_rDZa-Q-VQI_fBg';
  const urlNgrok = 'https://0eea-89-187-171-229.ngrok-free.app/ngrok';
  await axios.post(`https://api.telegram.org/bot${token}/setWebhook`, {
    url: urlNgrok,
  });
  console.log('ok');
}

bootstrap();
