/* eslint-disable prettier/prettier */
import { Tariff } from './entities/tariff.entity';

export class TariffAggregate {
  constructor(private readonly tariff: Tariff) {}

  updateRate(newRate: number) {
    this.tariff.updateRate(newRate);
  }
}