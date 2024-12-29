/* eslint-disable prettier/prettier */
import { Billing } from "./entities/billing.entity";

export class BillingAggregate {
  constructor(private readonly billing: Billing) {}
  confirm(): void {
    if (!this.billing.isConfirmed) {
      this.billing.confirm();
    }
  }
}