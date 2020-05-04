export class Memento {
  private fruits: string[] = [];
  constructor(private readonly money: number) {}

  getMoney(): number {
    return this.money;
  }


  addFruits(fruit: string): void {
    this.fruits.push(fruit);
  }

  clone(): string[] {
    return this.fruits.concat();
  }
}
