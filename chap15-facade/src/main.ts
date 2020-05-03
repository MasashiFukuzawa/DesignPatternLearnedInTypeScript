import { PageMaker } from "./facade/pageMaker";

class Main {
  main() {
    PageMaker.makeWelcomePage('hyuki@hyuki.com', 'welcome.html');
  }
}

const m = new Main();
m.main();
