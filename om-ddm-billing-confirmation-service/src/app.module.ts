/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { BillingEventHandler } from './application/domain-event-handlers/billing-event.handler';
import { BillingService } from './application/use-cases/billing.service';
import { BillingKafkaProducer } from './infrastructure/kafka/billing.kafka.producer';
import { BillingRepository } from './infrastructure/repositories/billing.repository';
import { BillingGrpcController } from './presentation/grpc/billing.grpc.controller';

@Module({
  imports: [],
  controllers: [BillingGrpcController],
  providers: [
    BillingService,
    {
      provide: 'IBillingRepository',
      useClass: BillingRepository, 
    },
    BillingKafkaProducer,
    BillingEventHandler,
  ],
})
export class AppModule {}