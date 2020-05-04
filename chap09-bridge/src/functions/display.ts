import { DisplayImpl } from "../implements/displayImpl";

export class Display {
  constructor(private readonly impl: DisplayImpl) {}

  open(): void {
    this.impl.rawOpen();
  }

  print(): void {
    this.impl.rawPrint();
  }

  close(): void {
  this.impl.rawClose();
  }

  display(): void {
    this.open();
    this.print();
    this.close();
  }
}
