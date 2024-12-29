/* eslint-disable prettier/prettier */
import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { BillingConfirmationServiceClient, CreateBillingRequest, CreateBillingResponse, GetBillingRequest, GetBillingResponse } from "../../proto/billing-confirmation/billing_confirmation";
import { Observable } from "rxjs";

@Injectable()
export class BillingConfirmationClient implements OnModuleInit {
  private billingService: BillingConfirmationServiceClient;
  constructor(@Inject('BILLING_CONFIRMATION_PACKAGE') private client: ClientGrpc) {}
  onModuleInit() {
    this.billingService = this.client.getService<BillingConfirmationServiceClient>('BillingConfirmationService');
  } 

  getBilling(request: GetBillingRequest): Observable<GetBillingResponse> {
    return this.billingService.getBilling(request);
  }

  createBilling(request: CreateBillingRequest): Observable<CreateBillingResponse> {
    return this.billingService.createBilling(request);
  }
}