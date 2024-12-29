/* eslint-disable prettier/prettier */
import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const billingConfirmationGrpcConfig: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'billing_confirmation',
    protoPath: join(__dirname, '../../../../proto/billing-confirmation/billing_confirmation.proto'),
    url: '0.0.0.0:5001'
  },
};