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
    this.directory.forEach(entry => {
      size += entry.getSize();
    });
    return size;
  }

  add(entry: Entry): Entry {
    this.directory.push(entry);
    return this;
  }

  printList(prefix: string): void {
    console.log(`${prefix}/${this}`);
    this.directory.forEach(entry => {
      entry.printList(`${prefix}/${this.name}`);
    });
  }
}
