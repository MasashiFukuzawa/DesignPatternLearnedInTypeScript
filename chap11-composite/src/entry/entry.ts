export abstract class Entry {
  abstract getName(): string;
  abstract getSize(): number;

  add(entry: Entry): Entry {
    throw new Error('Abstract class is called.');
  }

  abstract printList(prefix: string): void;

  toString(): string {
    return `${this.getName()} (${this.getSize()})`;
  }
}
