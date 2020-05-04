import { LimitSupport } from "./supportHandler/limitSupport";
import { SpecialSupport } from "./supportHandler/specialSupport";
import { NoSupport } from "./supportHandler/noSupport";
import { OddSupport } from "./supportHandler/oddSupport";
import { Trouble } from "./trouble/trouble";

class Main {
  main(): void {
    const alice = new NoSupport('Alice');
    const bob = new LimitSupport('Bob', 100);
    const charlie = new SpecialSupport('Charlie', 429);
    const diana = new LimitSupport('Diana', 200);
    const elmo = new OddSupport('Elmo');
    const fred = new LimitSupport('Fred', 300);

    alice.setNext(bob).
          setNext(charlie).
          setNext(diana).
          setNext(elmo).
          setNext(fred);

    Array.from({length: 300}).forEach((_, i) => alice.support(new Trouble(i)));
  }
}

const m = new Main();
m.main();
