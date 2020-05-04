import { Observer } from "./observer";
import { NumberGenerator } from "../publisher/numberGenerator";

export class DigitObserver implements Observer {
  update(generator: NumberGenerator): void {
    console.log(`DigitObserver: ${generator.getNumber()}`);
  }
}
