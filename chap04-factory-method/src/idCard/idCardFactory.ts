import { Factory } from "../framework/factory";
import { IDCard } from "./idCard";

export class IDCardFactory extends Factory {
  private owners: string[] = new Array();

  protected createProduct(owner: string) {
    return new IDCard(owner);
  }

  protected registerProduct(product: IDCard) {
    this.owners.push(product.getOwner());
  }

  getOwners() {
    return this.owners;
  }
}
