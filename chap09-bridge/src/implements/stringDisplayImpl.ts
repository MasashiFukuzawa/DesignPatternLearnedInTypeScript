import { DisplayImpl } from "./displayImpl";

export class StringDisplayImpl extends DisplayImpl {
  private readonly width: number;
  constructor(private readonly string: string) {
    super();
    this.width = Buffer.byteLength(string);
  }

  rawOpen(): void {
    this.printLine();
  };

  rawPrint(): void {
    console.log(`|${this.string}|`);
  };

  rawClose(): void {
    this.printLine();
  };

  printLine(): void {
    process.stdout.write('+')
    Array.from({length: this.width}).forEach(() => {
      process.stdout.write('-')
    });
    console.log('+');
  }
}
