import { Printable } from "./printable";
import { Printer } from "./printer";

export class PrinterProxy implements Printable {
  private real: Printer | null = null;
  constructor(private name: string) {
    this.name = name;
  }

  setPrinterName(name: string): void {
    if (this.real) {
      this.real.setPrinterName(name);
    }
    this.name = name;
  }

  getPrinterName(): string {
    return this.name;
  }

  print(string: string): void {
    this.realize();
    this.real?.print(string);
  }

  private realize(): void {
    if (!this.real) {
      this.real = new Printer(this.name);
    }
  }
}
