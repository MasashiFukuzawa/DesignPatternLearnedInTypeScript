import * as fs from 'fs';

export class Properties {
  constructor(private readonly fileName: string) {}

  getProperty(mailAddr: string): string {
    const content = fs.readFileSync(this.fileName);
    const lines = content.toString().split(`\n`).filter((e) => !!e);
    const targetIndex = lines.findIndex((e) => e.match(new RegExp(mailAddr)));
    const userInfo = lines[targetIndex].split('=');
    const userName = userInfo[1];
    return userName;
  }
}
