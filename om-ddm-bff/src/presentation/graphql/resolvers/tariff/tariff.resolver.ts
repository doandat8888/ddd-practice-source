/* eslint-disable prettier/prettier */
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateTariffResponse, TariffDto } from './tariff.dto';
import { GetTariffUseCase } from 'src/application/usecase/tariff-setup/get-tariff.useCase';
import { CreateTariffUseCase } from 'src/application/usecase/tariff-setup/create-tariff.useCase';

@Resolver('Tariff')
export class TariffResolver {
  constructor(
    private readonly getTariffUseCase: GetTariffUseCase,
    private readonly createTariffUseCase: CreateTariffUseCase,
  ) {}

  @Query(() => TariffDto)
  async getTariff(@Args('tariffId') tariffId: string) {
    return this.getTariffUseCase.execute(tariffId);
  }

  @Mutation(() => CreateTariffResponse)
  async createTariff(
    @Args('tariffId') tariffId: string,
    @Args('rate') rate: number,
  ) {
    return this.createTariffUseCase.execute(tariffId, rate);
  }
}