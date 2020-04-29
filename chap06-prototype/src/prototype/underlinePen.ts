import { Product } from "./product";

export class UnderlinePen implements Product {
  constructor(private readonly ulchar: string) {}

  use(s: string) {
    const length = Buffer.byteLength(s);
    console.log(`"${s}"`);
    for (let i = 0; i < length; i++) {
      process.stdout.write(`${this.ulchar}`);
    }
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
