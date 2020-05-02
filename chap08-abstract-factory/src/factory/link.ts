import { Item } from "./item";

export abstract class Link extends Item {
  constructor(caption: string, protected url: string) {
    super(caption);
  }
}
