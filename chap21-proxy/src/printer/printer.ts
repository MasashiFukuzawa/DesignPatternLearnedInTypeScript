import { Printable } from "./printable";

export class Printer implements Printable {
  constructor(private name: string) {
    this.heavyJob('Create a Printer instance...');
  }

  setPrinterName(name: string): void {
    this.name = name;
  }

  getPrinterName(): string {
    return this.name;
  }

  print(string: string): void {
    console.log(`=== ${this.name} ===`);
    console.log(string);
  }

  private heavyJob(msg: string) {
    console.log(msg);
    Array.from({length: 5}).forEach(() => {
      process.stdout.write('.');
    });
    console.log('Completed.');
  }
}
