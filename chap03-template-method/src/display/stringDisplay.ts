import { AbstractDisplay } from "./abstractDisplay";

export class StringDisplay extends AbstractDisplay {
  private readonly width: number;
  constructor(private readonly string: string) {
    super();
    this.width = Buffer.byteLength(string);
  }

  open(): void {
    this.printLine();
  }

  print(): void {
    console.log(`|${this.string}|`);
  }

  close(): void {
    this.printLine();
  }

  private printLine(): void {
    process.stdout.write('+');
    Array.from({length: this.width}).forEach(() => {
      process.stdout.write('-');
    });
    console.log('+');
  }
}
