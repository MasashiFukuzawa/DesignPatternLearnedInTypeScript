import { StringDisplay } from "./components/stringDisplay"
import { SideBorder } from "./decorators/sideBorder"
import { FullBorder } from "./decorators/fullBorder"
import { Display } from "./components/display";

class Main {
  main(): void {
    const b1 = new StringDisplay("Hello, world.");
    const b2 = new SideBorder(b1, "#");
    const b3 = new FullBorder(b2);
    b1.show();
    b2.show();
    b3.show();

    const d4 =
      new SideBorder(
        new FullBorder(
          new FullBorder(
            new SideBorder(
              new FullBorder(
                new StringDisplay('Have a good day!')
              ),
              '*'
            )
          )
        ),
        '/'
      );
    d4.show();
  }
}

const m = new Main();
m.main();
