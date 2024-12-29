/* eslint-disable prettier/prettier */
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class BillingDto {
  @Field()
  invoiceId: string;

  @Field()
  amount: number;

  @Field()
  isConfirmed: boolean;
}

@ObjectType()
export class CreateBillingResponse {
  @Field()
  success: boolean;

  @Field()
  message: string;
}