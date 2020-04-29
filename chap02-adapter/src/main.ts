import { PrintBanner } from './print/printBanner'

class Main {
  main() {
    const p = new PrintBanner('Hello');
    p.printWeak();
    p.printStrong();
  }
}

const m = new Main();
m.main();
