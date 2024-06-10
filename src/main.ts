import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GuitarSeed } from './seeds/guitars.seed';
import * as cors from 'cors';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cors({
    origin: 'http://localhost:8081', 
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'], 
    credentials: true, 
  }));

  const guitarSeed = app.get(GuitarSeed);
  await guitarSeed.run();

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();





