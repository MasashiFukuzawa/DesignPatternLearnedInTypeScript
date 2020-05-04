import { PageMaker } from "./facade/pageMaker";

class Main {
  main(): void {
    if (process.argv.length !== 3) {
      throw new Error('Augment number is wrong.');
    }

    const mailAddr = process.argv[2];
    PageMaker.makeWelcomePage(mailAddr, 'welcome.html');
  }
}

const m = new Main();
m.main();
