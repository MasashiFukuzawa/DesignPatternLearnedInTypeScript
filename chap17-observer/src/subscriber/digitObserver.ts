import { Observer } from "./observer";
import { NumberGenerator } from "../publisher/numberGenerator";

export class DigitObserver implements Observer {
  update(generator: NumberGenerator): void {
    // TODO: implement sleep method.
    console.log(`DigitObserver: ${generator.getNumber()}`);
  }
}
