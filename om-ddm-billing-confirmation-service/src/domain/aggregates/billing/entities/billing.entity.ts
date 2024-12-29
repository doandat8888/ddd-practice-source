/* eslint-disable prettier/prettier */
import { BillingCreatedEvent } from '../events/billing-created.event';
import { AggregateRoot } from '../../../shared/seed-work/aggregate-root.base';

export class Billing extends AggregateRoot {
  constructor(
    public readonly invoiceId: string,
    public amount: number,
    public isConfirmed: boolean,
  ) {
    super();
  }

  confirm() {
    this.isConfirmed = true;
    this.addDomainEvent(new BillingCreatedEvent(this));
  }
}