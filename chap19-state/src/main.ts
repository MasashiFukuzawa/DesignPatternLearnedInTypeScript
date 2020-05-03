import './extensions/math.extensions'
import { SafeFrame } from "./context/safeFrame";

class Main {
  main() {
    const safe = new SafeFrame();
    Array.from({length: 24}).forEach((_, hour) => {
      safe.setClock(hour);
      if ((Math.getRandomInt(3) + 1) % 3 === 0) {
        safe.actionPerformed();
      }
      console.log('');
    });
  }
}

const m = new Main();
m.main();
