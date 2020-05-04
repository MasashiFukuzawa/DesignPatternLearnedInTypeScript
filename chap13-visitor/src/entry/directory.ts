import { Entry } from "./entry";
import { Visitor } from "../visitor/visitor";

export class Directory extends Entry {
  private dir: Entry[];
  constructor(private readonly name: string) {
    super();
    this.dir = [];
  }

  getName(): string {
    return this.name;
  }

  getSize(): number {
    let size = 0;
    this.dir.forEach((e) => size += e.getSize());
    return size;
  }

  add(entry: Entry): Entry {
    this.dir.push(entry);
    return this;
  }

  accept(v: Visitor): void {
    v.visitDirectory(this);
  }

  getDir(): Entry[] {
    return this.dir;
  }
}
