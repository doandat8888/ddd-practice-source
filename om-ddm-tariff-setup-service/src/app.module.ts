/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TariffGrpcController } from './presentation/grpc/tariff.grpc.controller';
import { TariffService } from './application/use-cases/tariff-setup.service';
import { TariffRepository } from './infrastructure/repository/tariff.repository';
import { TariffEventHandler } from './application/domain-event-handlers/tariff-event.handler';

@Module({
  imports: [],
  controllers: [TariffGrpcController],
  providers: [
    TariffService,
    {
      provide: 'ITariffRepository',
      useClass: TariffRepository, 
    },
    TariffEventHandler,
  ],
})
export class AppModule {}