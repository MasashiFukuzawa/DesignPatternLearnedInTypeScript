import { Product } from "../framework/product";

export class IDCard extends Product {
  constructor(private readonly owner: string) {
    super();
    console.log(`Create ${this.owner}'s card.`);
  }

  use(): void {
    console.log(`Use ${this.owner}'s card.`);
  }

  getOwner(): string {
    return this.owner;
  }
}
