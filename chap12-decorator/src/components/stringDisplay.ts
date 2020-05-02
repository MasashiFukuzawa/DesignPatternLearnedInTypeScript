import { Display } from "./display";

export class StringDisplay extends Display {
  constructor(private readonly string: string) {
    super();
  }

  getColumns(): number {
    return Buffer.byteLength(this.string);
  }

  getRows(): number {
    return 1;
  }

  getRowText(row: number): string {
    return row === 0 ? this.string : '';
  }
}
