import { BigChar } from "../flyweight/bigChar"
import { BigCharFactory } from "../flyweight/bigCharFactory"

export class BigString {
  private bigChars: BigChar[] = [];
  constructor(string: string) {
    let tmp: string[] = [];
    Array.from({length: string.length}).forEach((_, i) => {
      tmp.push(string.slice(i, i + 1));
    });
    const factory = BigCharFactory.getInstance();
    tmp.forEach((charName, i) => {
      this.bigChars[i] = factory.getBigChar(charName);
    });
  }
}
