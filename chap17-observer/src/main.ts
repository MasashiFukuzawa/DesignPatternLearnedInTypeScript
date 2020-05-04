import { NumberGenerator } from "./publisher/numberGenerator";
import { RandomNumberGenerator } from "./publisher/randomNumberGenerator";
import { DigitObserver } from "./subscriber/digitObserver";
import { GraphObserver } from "./subscriber/graphObserver";

class Main {
  main(): void {
    const generator = new RandomNumberGenerator();
    const observer1 = new DigitObserver();
    const observer2 = new GraphObserver();
    generator.addObserver(observer1);
    generator.addObserver(observer2);
    generator.execute();
  }
}

const m = new Main();
m.main();
