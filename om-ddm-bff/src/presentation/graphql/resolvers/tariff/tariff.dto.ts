/* eslint-disable prettier/prettier */
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TariffDto {
  @Field()
  tariffId: string;

  @Field()
  rate: number;
}

@ObjectType()
export class CreateTariffResponse {
  @Field()
  success: boolean;

  @Field()
  message: string;
}