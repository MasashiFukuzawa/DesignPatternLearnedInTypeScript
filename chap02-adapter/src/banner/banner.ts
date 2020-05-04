export class Banner {
  constructor(private readonly string: string) {}

  showWithParen(): void {
    console.log(`(${this.string})`);
  }

  showWithAster(): void {
    console.log(`*${this.string}*`);
  }
}
