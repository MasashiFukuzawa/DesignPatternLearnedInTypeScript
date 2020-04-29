import { IDCardFactory } from "./idCard/idCardFactory";

class Main {
  main() {
    const factory = new IDCardFactory();
    const card1 = factory.create('Tanjiro');
    const card2 = factory.create('Zenitsu');
    const card3 = factory.create('Inosuke');
    console.log('------------------------');
    card1.use();
    card2.use();
    card3.use();
  }
}

const m = new Main();
m.main();
