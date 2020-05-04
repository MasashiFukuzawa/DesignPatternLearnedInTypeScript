import { Strategy } from "./strategy";
import { Hand } from "./hand";
import "../extensions/math.extensions";

export class ProbStrategy implements Strategy {
  private prevHandValue = 0;
  private currentHandValue = 0;
  private history = [[1, 1, 1], [1, 1, 1], [1, 1, 1]];

  nextHand(): Hand {
    const bet = Math.getRandomInt(this.sum(this.currentHandValue));
    let handValue: number;
    if (bet < this.history[this.currentHandValue][0] + this.history[this.currentHandValue][1]) {
      handValue = 0;
    } else if (bet < this.history[this.currentHandValue][0] + this.history[this.currentHandValue][1]) {
      handValue = 1;
    } else {
      handValue = 2;
    }
    this.prevHandValue = this.currentHandValue;
    this.currentHandValue = handValue;
    return Hand.getHand(handValue);
  }

  study(win: boolean): void {
    if (win) {
      this.history[this.prevHandValue][this.currentHandValue] + 1;
    } else {
      this.history[this.prevHandValue][this.currentHandValue + 2 % 3];
    }
  }

  sum(hv: number): number {
    let sum = 0;
    Array.from({length: 3}).forEach((_, i) => sum += this.history[hv][i]);
    return sum;
  }
}
