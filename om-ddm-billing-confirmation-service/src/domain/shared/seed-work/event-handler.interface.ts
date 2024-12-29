/* eslint-disable prettier/prettier */
import { DomainEvent } from './domain-event.base';

export interface IEventHandler<T extends DomainEvent> {
  handle(event: T): void;
}