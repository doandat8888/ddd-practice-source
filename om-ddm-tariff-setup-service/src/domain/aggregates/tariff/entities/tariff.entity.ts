/* eslint-disable prettier/prettier */

import { AggregateRoot } from 'src/domain/shared/seed-work/aggregate-root.base';
import { TariffCreatedEvent } from '../events/tariff-created.event';

export class Tariff extends AggregateRoot {
  constructor(
    public readonly tariffId: string,
    public rate: number,
  ) {
    super();
  }

  updateRate(newRate: number) {
    this.rate = newRate;
    this.addDomainEvent(new TariffCreatedEvent(this));
  }
}