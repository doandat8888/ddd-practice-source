/* eslint-disable prettier/prettier */
import { Billing } from "src/domain/aggregates/billing/entities/billing.entity";

export interface IBillingRepository {
  findById(invoiceId: string): Promise<Billing | null>;
  save(billing: Billing): Promise<void>;
}