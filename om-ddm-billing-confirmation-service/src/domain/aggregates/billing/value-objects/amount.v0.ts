/* eslint-disable prettier/prettier */
export class Amount {
  constructor(public readonly value: number) {
    if (value < 0) throw new Error('Amount cannot be negative');
  }
}