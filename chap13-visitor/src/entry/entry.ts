import { Visitor } from "../visitor/visitor";
import { Element } from "./element";

export abstract class Entry implements Element {
  abstract getName(): string;
  abstract getSize(): number;
  abstract accept(v: Visitor): void;

  add(entry: Entry): Entry {
    throw new Error('Abstract method is called.');
  }

  toString(): string {
    return `${this.getName()} (${this.getSize()})`;
  }
}
