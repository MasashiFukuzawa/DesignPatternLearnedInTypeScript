import * as fs from 'fs';

export class Database {
  private constructor() {}

  static getProperty(mailAddr: string): string {
    const lines = [
      'hyuki@hyuki.com=Hiroshi Yuki',
      'hanako@hanako.com=Hanako Sato',
      'tomura@tomura.com=tomura',
      'mamoru@mamoru.com=Mamoru Takashashi'
    ];
    const targetIndex = lines.findIndex(e => {
      return e.match(new RegExp(mailAddr));
    });
    const userInfo = lines[targetIndex].split('=');
    const userName = userInfo[1];
    return userName;
  }
}
