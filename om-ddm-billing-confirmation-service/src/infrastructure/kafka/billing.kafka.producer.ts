/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { Kafka, Producer, ProducerRecord } from "kafkajs";

@Injectable()
export class BillingKafkaProducer {
  private producer: Producer;
  constructor() {
    const kafka = new Kafka({
      clientId: 'billing-service',
      brokers: ['localhost:9092'],
    });
    this.producer = kafka.producer();
  }

  async send(record: ProducerRecord) {
    await this.producer.connect();
    await this.producer.send(record);
    await this.producer.disconnect();
  }
}