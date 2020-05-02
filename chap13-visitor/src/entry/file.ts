import { Entry } from "./entry";
import { Visitor } from "../visitor/visitor";

export class File extends Entry {
  constructor(
    private readonly name: string,
    private size: number
  ) {
    super();
  }

  getName(): string {
    return this.name;
  }

  getSize(): number {
    return this.size;
  }

  accept(v: Visitor): void {
    v.visitFile(this);
  }
}
