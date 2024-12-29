/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";
import { BillingConfirmationClient } from "src/infrastructure/grpc/billing-confirmation.client";
import { CreateBillingResponse } from "src/proto/billing-confirmation/billing_confirmation";

@Injectable()
export class CreateBillingUseCase {
  constructor(private billingClient: BillingConfirmationClient) {}
  async execute(invoiceId: string, amount: number): Promise<CreateBillingResponse> {
    const observable = this.billingClient.createBilling({ invoiceId, amount });
    return firstValueFrom(observable);
  }
}