/* eslint-disable prettier/prettier */
import { Inject, Injectable } from "@nestjs/common";
import { BillingAggregate } from "src/domain/aggregates/billing/billing.aggregate";
import { Billing } from "src/domain/aggregates/billing/entities/billing.entity";
import { IBillingRepository } from "src/domain/aggregates/billing/repositories/billing.repository.interface";

@Injectable()
export class BillingService {
  constructor(
    @Inject('IBillingRepository')
    private readonly billingRepository: IBillingRepository
  ) {}  
  async getBilling(invoiceId: string): Promise<Billing> {
    return this.billingRepository.findById(invoiceId);
  }

  async createBilling(invoiceId: string, amount: number): Promise<void> {
    const billing = new Billing(invoiceId, amount, false);
    const billingAggregate = new BillingAggregate(billing);
    billingAggregate.confirm();
    await this.billingRepository.save(billing);
  }
}