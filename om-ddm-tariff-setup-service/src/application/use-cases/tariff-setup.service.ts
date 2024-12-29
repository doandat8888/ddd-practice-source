/* eslint-disable prettier/prettier */
import { Inject, Injectable } from "@nestjs/common";
import { Tariff } from "src/domain/aggregates/Tariff/entities/Tariff.entity";
import { ITariffRepository } from "src/domain/aggregates/tariff/repository/tariff.repository.interface";
import { TariffAggregate } from "src/domain/aggregates/tariff/tariff.aggregate";

@Injectable()
export class TariffService {
  constructor(
    @Inject('ITariffRepository')
    private readonly tariffRepository: ITariffRepository
  ) {}  
  async getTariff(tariffId: string): Promise<Tariff> {
    return this.tariffRepository.findById(tariffId);
  }

  async createTariff(tariffId: string, rate: number): Promise<void> {
    const tariff = new Tariff(tariffId, rate);
    const tariffAggregate = new TariffAggregate(tariff);
    tariffAggregate.updateRate(rate);
    await this.tariffRepository.save(tariff);
  }
}