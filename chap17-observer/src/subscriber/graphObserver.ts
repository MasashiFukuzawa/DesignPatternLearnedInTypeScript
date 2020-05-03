import { Observer } from "./observer";
import { NumberGenerator } from "../publisher/numberGenerator";

export class GraphObserver implements Observer {
  update(generator: NumberGenerator): void {
    // TODO: implement sleep method.
    console.log('GraphObserver:');
    const count: number = generator.getNumber();
    Array.from({length: count}).forEach(() => {
      process.stdout.write('*');
    });
    console.log('');
  }
}
