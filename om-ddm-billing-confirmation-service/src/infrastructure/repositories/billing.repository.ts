/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Billing } from "src/domain/aggregates/billing/entities/billing.entity";
import { IBillingRepository } from "src/domain/aggregates/billing/repositories/billing.repository.interface";

@Injectable()
export class BillingRepository implements IBillingRepository {
  private billings: Billing[] = [
    new Billing("invc232323", 100, false),
    new Billing("invc232324", 200, false),
    new Billing("invc232325", 300, false),
  ];
  async findById(invoiceId: string): Promise<Billing | null> {
    return this.billings.find((b) => b.invoiceId === invoiceId) || null;
  }
  async save(billing: Billing): Promise<void> {
    this.billings.push(billing);
  }
}