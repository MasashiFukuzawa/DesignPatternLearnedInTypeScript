export abstract class Display {
  abstract getColumns(): number;
  abstract getRows(): number;
  abstract getRowText(row: number): string;

  show(): void {
    Array.from({length: this.getRows()}).forEach((_, i) => {
      console.log(this.getRowText(i));
    });
  }
}
