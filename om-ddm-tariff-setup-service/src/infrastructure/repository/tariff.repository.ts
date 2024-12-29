/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Tariff } from "src/domain/aggregates/tariff/entities/tariff.entity";
import { ITariffRepository } from "src/domain/aggregates/tariff/repository/tariff.repository.interface";

@Injectable()
export class TariffRepository implements ITariffRepository {
  private tariffs: Tariff[] = [
    new Tariff("tarf0232323", 2.5),
    new Tariff("tarf0232324", 3),
    new Tariff("tarf0232325", 5.5),
  ];
  async findById(tariffId: string): Promise<Tariff | null> {
    return this.tariffs.find((b) => b.tariffId === tariffId) || null;
  }
  async save(tariff: Tariff): Promise<void> {
    this.tariffs.push(tariff);
  }
}