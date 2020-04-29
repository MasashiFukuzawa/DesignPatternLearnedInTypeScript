import { Product } from "./product";

export class MessageBox implements Product {
  constructor(private readonly decochar: string) {}

  use(s: string) {
    const length = Buffer.byteLength(s);
    for (let i = 0; i < length + 4; i++) {
      process.stdout.write(`${this.decochar}`);
    }
    console.log('');
    console.log(`${this.decochar} ${s} ${this.decochar}`);
    for (let j = 0; j < length + 4; j++) {
      process.stdout.write(`${this.decochar}`);
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
