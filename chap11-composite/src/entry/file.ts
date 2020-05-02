import { Entry } from "./entry";

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

  printList(prefix: string): void {
    console.log(`${prefix}/${this}`);
  }
}
