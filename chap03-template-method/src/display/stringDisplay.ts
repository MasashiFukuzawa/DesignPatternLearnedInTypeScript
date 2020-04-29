import { AbstractDisplay } from "./abstractDisplay";

export class StringDisplay extends AbstractDisplay {
  private readonly width: number;
  constructor(private readonly string: string) {
    super();
    this.string = string;
    this.width = Buffer.byteLength(string);
  }

  open() {
    this.printLine();
  }

  print() {
    console.log(`|${this.string}|`);
  }

  close() {
    this.printLine();
  }

  private printLine() {
    process.stdout.write('+');
    for (let i = 0; i < this.width; i++) {
      process.stdout.write('-');
    }
    console.log('+');
  }
}
