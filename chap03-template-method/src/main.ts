import { AbstractDisplay } from "./display/abstractDisplay";
import { CharDisplay } from "./display/charDisplay";
import { StringDisplay } from "./display/stringDisplay";

class Main {
  main() {
    const d1: AbstractDisplay = new CharDisplay('H');
    const d2: AbstractDisplay = new StringDisplay('Hello, world.');
    const d3: AbstractDisplay = new StringDisplay('Good evening.');
    d1.display();
    d2.display();
    d3.display();
  }
}

const m = new Main();
m.main();
