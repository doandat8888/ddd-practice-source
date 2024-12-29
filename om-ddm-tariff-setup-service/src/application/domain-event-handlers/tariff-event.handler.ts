/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { TariffCreatedEvent } from "src/domain/aggregates/tariff/events/tariff-created.event";

@Injectable()
@EventsHandler(TariffCreatedEvent)
export class TariffEventHandler implements IEventHandler<TariffCreatedEvent> {
  handle(event: TariffCreatedEvent) {
    console.log('Tariff created: ', event);
  }
}