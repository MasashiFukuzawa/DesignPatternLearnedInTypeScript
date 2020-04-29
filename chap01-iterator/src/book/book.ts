export class Book {
  constructor(private readonly name: string) {}

  getName(): string {
    return this.name;
  }
}
