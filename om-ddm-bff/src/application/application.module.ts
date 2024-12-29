/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { InfrastructureModule } from '../infrastructure/infrastructure.module';
import { GetBillingUseCase } from './usecase/billing/get-billing.usecase';
import { CreateBillingUseCase } from './usecase/billing/create-billing.usecase';
import { GetTariffUseCase } from './usecase/tariff-setup/get-tariff.useCase';
import { CreateTariffUseCase } from './usecase/tariff-setup/create-tariff.useCase';

@Module({
  imports: [InfrastructureModule],
  providers: [GetBillingUseCase, CreateBillingUseCase, GetTariffUseCase, CreateTariffUseCase],
  exports: [GetBillingUseCase, CreateBillingUseCase, GetTariffUseCase, CreateTariffUseCase],
})
export class ApplicationModule {}