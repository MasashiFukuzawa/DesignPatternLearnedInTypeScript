import { Product } from "./product";

export abstract class Factory {
  protected abstract createProduct(owner: string): Product;
  protected abstract registerProduct(product: Product): void;

  create(owner: string): Product {
    const p = this.createProduct(owner);
    this.registerProduct(p);
    return p;
  }
}
