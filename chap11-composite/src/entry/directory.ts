import { Entry } from "./entry";

export class Directory extends Entry {
  private directory: Entry[] = [];
  constructor(private readonly name: string) {
    super();
  }

  getName(): string {
    return this.name;
  }

  getSize(): number {
    let size = 0;
    this.directory.forEach((e) => size += e.getSize());
    return size;
  }

  add(entry: Entry): Entry {
    this.directory.push(entry);
    return this;
  }

  printList(prefix: string): void {
    console.log(`${prefix}/${this}`);
    this.directory.forEach((e) => e.printList(`${prefix}/${this.name}`));
  }
}
