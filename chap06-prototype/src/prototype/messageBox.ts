import { Product } from "./product";

export class MessageBox implements Product {
  constructor(private readonly decochar: string) {}

  use(s: string): void {
    const length = Buffer.byteLength(s) + 4;
    Array.from({length: length}).forEach(() => {
      process.stdout.write(`${this.decochar}`);
    });
    console.log('');
    console.log(`${this.decochar} ${s} ${this.decochar}`);
    Array.from({length: length}).forEach(() => {
      process.stdout.write(`${this.decochar}`);
    });
    console.log('');
  }

  createClone(): Product {
    let clone: Product;
    try {
      clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    } catch(e) {
      console.log(e);
      throw new Error('Failed to clone.');
    }
    return clone;
  }
}
