export abstract class AbstractDisplay {
  abstract open(): void;
  abstract print(): void;
  abstract close(): void;

  display(): void {
    this.open();
    Array.from({length: 5}).forEach(() => {
      this.print();
    });
    this.close();
  }
}
