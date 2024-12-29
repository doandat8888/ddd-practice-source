/* eslint-disable prettier/prettier */
import { DomainEvent } from 'src/domain/shared/seed-work/domain-event.base';
import { Tariff } from '../entities/tariff.entity';

export class TariffCreatedEvent extends DomainEvent {
  constructor(public readonly tariff: Tariff) {
    super();
  }
}