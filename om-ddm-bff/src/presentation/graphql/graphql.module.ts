/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { GraphQLModule as NestGraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BillingResolver } from './resolvers/billing/billing.resolver';
import { GetBillingUseCase } from 'src/application/usecase/billing/get-billing.useCase';
import { CreateBillingUseCase } from 'src/application/usecase/billing/create-billing.useCase';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';
import { TariffResolver } from './resolvers/tariff/tariff.resolver';
import { CreateTariffUseCase } from 'src/application/usecase/tariff-setup/create-tariff.useCase';
import { GetTariffUseCase } from 'src/application/usecase/tariff-setup/get-tariff.useCase';

@Module({
  imports: [
    NestGraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/presentation/graphql/generated/schema.gql',
      playground: true,
      introspection: true,
    }),
    InfrastructureModule
  ],
  providers: [
    BillingResolver, 
    GetBillingUseCase, 
    CreateBillingUseCase, 
    TariffResolver,
    CreateTariffUseCase,
    GetTariffUseCase
  ],
})
export class GraphQLModule {}