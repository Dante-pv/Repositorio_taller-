import { NestFactory } from '@nestjs/core';
import { MicapModule } from './micap.module';
import {Transport, MicroserviceOptions} from '@nestjs/microservices';
async function bootstrap() {
  //const app = await NestFactory.create(MicappModule);
  //await app.listen(3001);
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    MicapModule,
    {
    transport: Transport.REDIS,
    options: {
      host: 'localhost',
      port: 6379,
    },
  });
    await app.listen();
  }
  bootstrap();