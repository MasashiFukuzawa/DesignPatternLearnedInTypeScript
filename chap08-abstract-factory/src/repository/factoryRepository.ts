import { Factory } from "../factory/factory";

interface Constructable<T> extends Function {
  new (...args: any[]): T;
}

export class FactoryRepository {
  static factories: Constructable<Factory>[] = [];
}
