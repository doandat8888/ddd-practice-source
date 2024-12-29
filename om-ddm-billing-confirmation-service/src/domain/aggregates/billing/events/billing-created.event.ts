/* eslint-disable prettier/prettier */
import { Billing } from "src/domain/aggregates/billing/entities/billing.entity";
import { DomainEvent } from "src/domain/shared/seed-work/domain-event.base";

export class BillingCreatedEvent extends DomainEvent {
  constructor(public readonly billing: Billing) {
    super();
  }
}