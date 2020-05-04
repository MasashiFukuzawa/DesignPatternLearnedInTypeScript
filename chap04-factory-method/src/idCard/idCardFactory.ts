import { Factory } from "../framework/factory";
import { IDCard } from "./idCard";

export class IDCardFactory extends Factory {
  private owners: string[] = new Array();

  protected createProduct(owner: string): IDCard {
    return new IDCard(owner);
  }

  protected registerProduct(product: IDCard): void {
    this.owners.push(product.getOwner());
  }

  getOwners(): string[] {
    return this.owners;
  }
}
