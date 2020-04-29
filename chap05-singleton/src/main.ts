import { Singleton } from "./singleton";

class Main {
  main() {
    console.log('Start.')
    const obj1 = Singleton.getInstance();
    const obj2 = Singleton.getInstance();
    if (obj1 === obj2) {
      console.log('obj1 and obj2 are the same instances.')
    } else {
      console.log('obj1 and obj2 are not the same instances.')
    }
    console.log('End.')
  }
}

const m = new Main();
m.main();
