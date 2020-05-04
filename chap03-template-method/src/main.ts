import { CharDisplay } from "./display/charDisplay";
import { StringDisplay } from "./display/stringDisplay";

class Main {
  main(): void {
    const d1 = new CharDisplay('H');
    const d2 = new StringDisplay('Hello, world.');
    const d3 = new StringDisplay('Good evening.');
    d1.display();
    d2.display();
    d3.display();
  }
}

const m = new Main();
m.main();
