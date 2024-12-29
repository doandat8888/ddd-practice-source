/* eslint-disable prettier/prettier */
import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const tariffSetupGrpcConfig: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'tariff_setup',
    protoPath: join(__dirname, '../../../../proto/tariff-setup/tariff_setup.proto'),
    url: '0.0.0.0:5000'
  },
};