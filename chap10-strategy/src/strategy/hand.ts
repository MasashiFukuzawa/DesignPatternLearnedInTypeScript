export class Hand {
  static handList = {
    guu: 0,
    cho: 1,
    paa: 2
  };
  static hand = [
    new Hand(Hand.handList.guu),
    new Hand(Hand.handList.cho),
    new Hand(Hand.handList.paa)
  ];
  static handName = ['グー', 'チョキ', 'パー'];

  constructor(private readonly handValue: number) {}

  static getHand(handValue: number): Hand {
    return Hand.hand[handValue];
  }

  isStrongerThan(h: Hand): boolean {
    return this.fight(h) === 1;
  }

  isWeakerThan(h: Hand): boolean {
    return this.fight(h) === -1;
  }

  fight(h: Hand): number {
    if (this == h) {
      return 0;
    } else if ((h.handValue + 1) % 3 == this.handValue) {
      return 1;
    } else {
      return -1;
    }
  }

  toString(): string {
    return Hand.handName[this.handValue];
  }
}
