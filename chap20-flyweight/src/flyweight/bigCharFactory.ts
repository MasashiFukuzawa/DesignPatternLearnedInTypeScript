import { BigChar } from "./bigChar";

export class BigCharFactory {
  private static singleton = new BigCharFactory();
  static getInstance(): BigCharFactory {
    return this.singleton;
  }
  private pool: { [key: string]: BigChar } = {};

  getBigChar(charName: string): BigChar {
    let bc = this.pool[charName]
    if (!bc) {
      bc = new BigChar(charName);
      this.pool[charName] = bc;
      console.log(`Created new instance: '${charName}'.`);
    } else {
      console.log(`'${charName}' is already existing.`);
    }
    return bc;
  }
}
