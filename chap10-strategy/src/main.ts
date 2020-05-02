import { Player } from "./context/player";
import { WinningStrategy } from "./strategy/winningStrategy";
import { ProbStrategy } from "./strategy/probStrategy";

class Main {
  main() {
    const player1 = new Player('Taro', new WinningStrategy());
    const player2 = new Player('Hana', new ProbStrategy());

    Array.from({length: 100}).forEach(() => {
      const nextHand1 = player1.nextHand();
      const nextHand2 = player2.nextHand();

      if (nextHand2.isWeakerThan(nextHand1)) {
        console.log(`Winner: ${player1.getName()}`);
        player1.win();
        player2.lose();
      } else if (nextHand2.isStrongerThan(nextHand1)) {
        console.log(`Winner: ${player2.getName()}`);
        player1.lose();
        player2.win();
      } else {
        console.log('Even...');
        player1.even();
        player2.even();
      }
    });

    console.log(`Total result:\n${player1.toString()}\n${player2.toString()}`);
  }
}

const m = new Main();
m.main();
