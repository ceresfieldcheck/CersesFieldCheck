import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';

  app.enableCors({
    origin: [frontendUrl, 'https://your-vercel-app-url.vercel.app'], // Replace with your actual Vercel URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  await app.listen(3001);
  console.log(`✅ Backend running on: ${await app.getUrl()}`);
}
bootstrap();
