/* eslint-disable prettier/prettier */
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { TariffSetupServiceClient, GetTariffRequest, GetTariffResponse, CreateTariffRequest, CreateTariffResponse } from 'src/proto/tariff-setup/tariff_setup';

@Injectable()
export class TariffSetupClient implements OnModuleInit {
  private tariffService: TariffSetupServiceClient;

  constructor(@Inject('TARIFF_SETUP_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.tariffService = this.client.getService<TariffSetupServiceClient>('TariffSetupService');
  }

  getTariff(request: GetTariffRequest): Observable<GetTariffResponse> {
    return this.tariffService.getTariff(request);
  }

  createTariff(request: CreateTariffRequest): Observable<CreateTariffResponse> {
    return this.tariffService.createTariff(request);
  }
}