/* eslint-disable prettier/prettier */
import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { CreateBillingRequest, CreateBillingResponse, GetBillingRequest, GetBillingResponse } from "src/proto/billing_confirmation";
import { BillingService } from "src/application/use-cases/billing.service";

@Controller()
export class BillingGrpcController {
  constructor(private readonly billingService: BillingService) {}

  @GrpcMethod('BillingConfirmationService', 'CreateBilling')
  async createBilling(data: CreateBillingRequest): Promise<CreateBillingResponse> {
    await this.billingService.createBilling(data.invoiceId, data.amount);
    return { success: true, message: 'Billing created successfully' };
  }

  @GrpcMethod('BillingConfirmationService', 'GetBilling')
  async getBilling(data: GetBillingRequest): Promise<GetBillingResponse> {
    console.log('AAAA');
    const billing = await this.billingService.getBilling(data.invoiceId);
    return { invoiceId: billing.invoiceId, amount: billing.amount, isConfirmed: billing.isConfirmed };
  }
}