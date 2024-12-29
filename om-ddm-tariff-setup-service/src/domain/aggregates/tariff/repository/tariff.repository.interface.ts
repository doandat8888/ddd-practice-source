/* eslint-disable prettier/prettier */
import { Tariff } from "../entities/tariff.entity";

export interface ITariffRepository {
  findById(tariffId: string): Promise<Tariff | null>;
  save(tariff: Tariff): Promise<void>;
}