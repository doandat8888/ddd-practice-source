/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import { BillingCreatedEvent } from "src/domain/aggregates/billing/events/billing-created.event";

@Injectable()
@EventsHandler(BillingCreatedEvent)
export class BillingEventHandler implements IEventHandler<BillingCreatedEvent> {
  handle(event: BillingCreatedEvent) {
    console.log('Billing created: ', event);
  }
}