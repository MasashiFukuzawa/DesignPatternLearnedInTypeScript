import { Product } from "./product";

export class UnderlinePen implements Product {
  constructor(private readonly ulchar: string) {}

  use(s: string): void {
    const length = Buffer.byteLength(s) + 2;
    console.log(`"${s}"`);
    Array.from({length: length}).forEach(() => {
      process.stdout.write(`${this.ulchar}`);
    });
    console.log('');
  }

  createClone(): Product {
    let clone: Product;
    try {
      clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    } catch(e) {
      console.log(e);
      throw new Error('Failed to clone.')
    }
    return clone;
  }
}
