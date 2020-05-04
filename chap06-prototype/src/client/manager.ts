import { Product } from "../prototype/product";

export class Manager {
  private showcase: { [key: string]: Product; } = {};

  register(name: string, proto: Product): void {
    this.showcase[name] = proto;
  }

  create(protoname: string): Product {
    const p = this.showcase[protoname];
    return p.createClone();
  }
}
