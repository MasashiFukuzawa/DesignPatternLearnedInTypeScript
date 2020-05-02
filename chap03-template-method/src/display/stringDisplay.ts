import { AbstractDisplay } from "./abstractDisplay";

export class StringDisplay extends AbstractDisplay {
  private readonly width: number;
  constructor(private readonly string: string) {
    super();
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
    Array.from({length: this.width}).forEach(() => {
      process.stdout.write('-');
    });
    console.log('+');
  }
}
