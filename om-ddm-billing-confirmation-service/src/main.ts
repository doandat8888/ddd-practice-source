/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'billing_confirmation',
      protoPath: join(__dirname, './proto/billing_confirmation.proto'),
      url: '0.0.0.0:5001',
    },
  });
  await app.listen();
}
bootstrap();