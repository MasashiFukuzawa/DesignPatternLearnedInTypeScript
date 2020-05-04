import * as fs from 'fs';

export class BigChar {
  constructor(private charName: string) {
    try {
      const content = fs.readFileSync(`./src/bigTxtSamples/big${charName}.txt`);
      console.log(content.toString());
      this.charName = charName;
    } catch(e) {
      this.charName = `${charName}?`;
    }
  }
}
