import { Strategy } from "../strategy/strategy";
import { Hand } from "../strategy/hand";

export class Player {
  private winCount: number = 0;
  private loseCount: number = 0;
  private gameCount: number = 0;
  constructor(
    private readonly name: string,
    private readonly strategy: Strategy
  ) {}

  nextHand(): Hand {
    return this.strategy.nextHand();
  }

  win(): void {
    this.strategy.study(true);
    this.winCount++;
    this.gameCount++;
  }

  lose(): void {
    this.strategy.study(false);
    this.loseCount++;
    this.gameCount++;
  }

  even(): void {
    this.gameCount++;
  }

  getName(): string {
    return this.name;
  }

  toString(): string {
    return `[${this.name}: ${this.gameCount} games, ${this.winCount} win, ${this.loseCount} lose]`;
  }
}
