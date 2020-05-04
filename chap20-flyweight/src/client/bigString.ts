import { BigChar } from "../flyweight/bigChar"
import { BigCharFactory } from "../flyweight/bigCharFactory"

export class BigString {
  private bigChars: BigChar[] = [];
  constructor(string: string) {
    let charStrings: string[] = [];
    Array.from({length: string.length}).forEach((_, i) => {
      charStrings.push(string.slice(i, i + 1));
    });
    const factory = BigCharFactory.getInstance();
    charStrings.forEach((e, i) => this.bigChars[i] = factory.getBigChar(e));
  }
}
