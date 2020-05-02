import { Strategy } from "./strategy";
import { Hand } from "./hand";
import "../extensions/math.extensions";

export class WinningStrategy implements Strategy {
  private won: boolean = false;

  nextHand(): Hand {
    return Hand.getHand(Math.getRandomInt(3));
  };

  study(win: boolean): void {
    debugger;
    this.won = win;
  };
}
