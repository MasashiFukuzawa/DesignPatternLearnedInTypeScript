import { Display } from "./functions/display";
import { StringDisplayImpl } from "./implements/stringDisplayImpl";
import { CountDisplay } from "./functions/countDisplay";

class Main {
  main(): void {
    const d1 = new Display(new StringDisplayImpl('Hello, Japan.'));
    const d2 = new CountDisplay(new StringDisplayImpl('Hello, world.'));
    const d3 = new CountDisplay(new StringDisplayImpl('Hello, universe.'));
    d1.display();
    d2.display();
    d3.display();
    d3.multiDisplay(5);
  }
}

const m = new Main();
m.main();
