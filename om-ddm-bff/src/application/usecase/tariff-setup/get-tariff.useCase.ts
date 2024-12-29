/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { TariffSetupClient } from '../../../infrastructure/grpc/tariff-setup.client';
import { firstValueFrom } from 'rxjs';
import { GetTariffResponse } from 'src/proto/tariff-setup/tariff_setup';

@Injectable()
export class GetTariffUseCase {
  constructor(private readonly tariffClient: TariffSetupClient) {}

  async execute(tariffId: string): Promise<GetTariffResponse> {
    const observable = this.tariffClient.getTariff({ tariffId });
    return firstValueFrom(observable);
  }
}