import * as fs from 'fs';
import { Item } from "./item";

export abstract class Page {
  protected content: Item[] = [];
  constructor(protected title: string, protected author: string) {}

  add(item: Item): void {
    this.content.push(item);
  }

  output(): void {
    try {
      const filename = `${this.title}.html`;
      const writer = (data: string) => fs.appendFileSync(filename, data);
      writer(this.makeHTML());
      console.log(`Created ${filename}.`);
    } catch (e) {
      console.log(e);
    }
  }

  abstract makeHTML(): string;
}
