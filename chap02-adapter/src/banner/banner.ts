export class Banner {
  constructor(private readonly string: string) {}

  showWithParen() {
    console.log(`(${this.string})`);
  }

  showWithAster() {
    console.log(`*${this.string}*`);
  }
}
