/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { billingConfirmationGrpcConfig } from './config/grpc/billing-confirmation/billing-confirmation.grpc.config';
import { BillingConfirmationClient } from './grpc/billing-confirmation.client';
import { tariffSetupGrpcConfig } from './config/grpc/tariff-setup/tariff-setup.grpc.config';
import { TariffSetupClient } from './grpc/tariff-setup.client';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'BILLING_CONFIRMATION_PACKAGE',
        ...billingConfirmationGrpcConfig,
      },
      {
        name: 'TARIFF_SETUP_PACKAGE',
        ...tariffSetupGrpcConfig,
      },
    ]),
  ],
  providers: [BillingConfirmationClient, TariffSetupClient],
  exports: [BillingConfirmationClient, TariffSetupClient],
})
export class InfrastructureModule {}