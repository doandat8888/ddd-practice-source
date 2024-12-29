/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { firstValueFrom } from "rxjs";
import { BillingConfirmationClient } from "src/infrastructure/grpc/billing-confirmation.client";
import { GetBillingResponse } from "src/proto/billing-confirmation/billing_confirmation";

@Injectable()
export class GetBillingUseCase {
  constructor(private billingClient: BillingConfirmationClient) {}
  async execute(invoiceId: string): Promise<GetBillingResponse> {
    const observable = this.billingClient.getBilling({ invoiceId });
    return firstValueFrom(observable);
  }
}