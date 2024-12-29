/* eslint-disable prettier/prettier */
import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { TariffService } from "src/application/use-cases/tariff-setup.service";
import { CreateTariffRequest, CreateTariffResponse, GetTariffRequest, GetTariffResponse } from "src/proto/tariff_setup";

@Controller()
export class TariffGrpcController {
  constructor(private readonly tariffService: TariffService) {}

  @GrpcMethod('TariffSetupService', 'CreateTariff')
  async createTariff(data: CreateTariffRequest): Promise<CreateTariffResponse> {
    await this.tariffService.createTariff(data.tariffId, data.rate);
    return { success: true, message: 'Tariff created successfully' };
  }

  @GrpcMethod('TariffSetupService', 'GetTariff')
  async getTariff(data: GetTariffRequest): Promise<GetTariffResponse> {
    const tariff = await this.tariffService.getTariff(data.tariffId);
    return { tariffId: tariff.tariffId, rate: tariff.rate };
  }
}