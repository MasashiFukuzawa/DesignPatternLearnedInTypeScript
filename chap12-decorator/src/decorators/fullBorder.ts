import { Border } from "./border";
import { Display } from "../components/display";

export class FullBorder extends Border {
  constructor(protected readonly display: Display) {
    super(display);
  }

  getColumns(): number {
    return 1 + this.display.getColumns() + 1;
  }

  getRows(): number {
    return 1 + this.display.getRows() + 1;
  }

  getRowText(row: number): string {
    if (row === 0 || row === this.display.getRows() + 1) {
      return `+${this.makeLine('-', this.display.getColumns())}+`;
    } else {
      return `|${this.display.getRowText(row - 1)}|`;
    }
  }

  private makeLine(ch: string, count: number): string {
    let buf = '';
    Array.from({length: count}).forEach(() => {
      buf = buf.concat('', ch);
    });
    return buf;
  }
}
