import '../extensions/math.extensions'
import { NumberGenerator } from "./numberGenerator";

export class RandomNumberGenerator extends NumberGenerator {
  private number: number = 0;

  getNumber(): number {
    return this.number;
  };

  execute(): void {
    Array.from({length: 20}).forEach(() => {
      this.number = Math.getRandomInt(50);
      this.notifyObservers();
    });
  };
}
