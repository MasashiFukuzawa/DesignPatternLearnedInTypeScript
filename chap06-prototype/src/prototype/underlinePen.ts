import { Product } from "./product";

export class UnderlinePen implements Product {
  constructor(private readonly ulchar: string) {}

  use(s: string) {
    const length = Buffer.byteLength(s) + 2;
    console.log(`"${s}"`);
    Array.from({length: length}).forEach(() => {
      process.stdout.write(`${this.ulchar}`);
    });
    console.log('');
  }

  createClone() {
    try {
      const clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
      return clone;
    } catch(e) {
      console.log(e);
    }
  }
}
