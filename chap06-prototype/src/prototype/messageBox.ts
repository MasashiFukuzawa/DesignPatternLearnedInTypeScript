import { Product } from "./product";

export class MessageBox implements Product {
  constructor(private readonly decochar: string) {}

  use(s: string) {
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

  createClone() {
    try {
      const clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
      return clone;
    } catch(e) {
      console.log(e);
    }
  }
}
