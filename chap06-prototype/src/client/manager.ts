import { Product } from "../prototype/product";

export class Manager {
  private showcase: { [key: string]: Product; } = {};

  register(name: string, proto: Product) {
    this.showcase[name] = proto;
  }

  create(protoname: string) {
    const p = this.showcase[protoname];
    return p.createClone();
  }
}
