import { Item } from "./item";

export abstract class Tray extends Item {
  protected tray: Item[] = [];
  constructor(caption: string) {
    super(caption);
  }

  add(item: Item): void {
    this.tray.push(item);
  }
}
