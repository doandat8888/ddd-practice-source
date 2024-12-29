/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { TariffSetupClient } from '../../../infrastructure/grpc/tariff-setup.client';
import { firstValueFrom } from 'rxjs';
import { CreateTariffResponse } from 'src/proto/tariff-setup/tariff_setup';

@Injectable()
export class CreateTariffUseCase {
  constructor(private readonly tariffClient: TariffSetupClient) {}

  async execute(tariffId: string, rate: number): Promise<CreateTariffResponse> {
    const observable = this.tariffClient.createTariff({ tariffId, rate });
    return firstValueFrom(observable);
  }
}