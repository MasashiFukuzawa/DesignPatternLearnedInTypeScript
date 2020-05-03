import { Gamer } from "./originator/gamer";

class Main {
  main() {
    const gamer = new Gamer(100);
    const memento = gamer.createMemento();

    Array.from({length: 100}).forEach((_, i) => {
      console.log(`==== ${i}`);
      const gamerMoney = Math.round(gamer.getMoney());
      console.log(`current_state: [${gamerMoney}, ${gamer.getFruits().filter(e => !!e)}]`);
      gamer.bet();
      console.log(`The remaining money is ${gamerMoney} yen.`);

      if (gamerMoney > memento.getMoney()) {
        console.log('Save current_state.');
        gamer.createMemento();
      } else if (gamerMoney < memento.getMoney() / 2) {
        console.log('Return to previous state.');
        gamer.restoreMemento(memento);
      }
    });
  }
}

const m = new Main();
m.main();
