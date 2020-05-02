import { Display } from "./display";
import { DisplayImpl } from "../implements/displayImpl";

export class CountDisplay extends Display {
  constructor(impl: DisplayImpl) {
    super(impl);
  }

  multiDisplay(times: number): void {
    this.open();
    Array.from({length: times}).forEach(() => {
      this.print();
    });
    this.close();
  }
}
