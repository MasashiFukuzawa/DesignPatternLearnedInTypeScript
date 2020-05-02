export class Trouble {
  constructor(readonly number: number) {}

  toString(): string {
    return `Trouble [${this.number}]`;
  }
}
