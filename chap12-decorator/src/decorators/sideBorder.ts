import { Border } from "./border";
import { Display } from "../components/display";

export class SideBorder extends Border {
  constructor(
    protected readonly display: Display,
    private readonly borderChar: string
  ) {
    super(display);
  }

  getColumns(): number {
    return 1 + this.display.getColumns() + 1;
  }

  getRows(): number {
    return this.display.getRows();
  }

  getRowText(row: number): string {
    return `${this.borderChar}${this.display.getRowText(row)}${this.borderChar}`;
  }
}
