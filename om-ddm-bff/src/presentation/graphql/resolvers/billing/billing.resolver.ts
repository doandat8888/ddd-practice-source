/* eslint-disable prettier/prettier */
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BillingDto, CreateBillingResponse } from './billing.dto';
import { GetBillingUseCase } from 'src/application/usecase/billing/get-billing.useCase';
import { CreateBillingUseCase } from 'src/application/usecase/billing/create-billing.useCase';

@Resolver('Billing')
export class BillingResolver {
  constructor(
    private readonly getBillingUseCase: GetBillingUseCase,
    private readonly createBillingUseCase: CreateBillingUseCase,
  ) {}

  @Query(() => BillingDto)
  async getBilling(@Args('invoiceId') invoiceId: string) {
    return this.getBillingUseCase.execute(invoiceId);
  }

  @Mutation(() => CreateBillingResponse)
  async createBilling(
    @Args('invoiceId') invoiceId: string,
    @Args('amount') amount: number,
  ) {
    return this.createBillingUseCase.execute(invoiceId, amount);
  }
}