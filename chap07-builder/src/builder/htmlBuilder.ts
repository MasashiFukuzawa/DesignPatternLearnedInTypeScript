import * as fs from 'fs'
import { Builder } from "./builder";

export class HTMLBuilder extends Builder {
  private filename: string = '';
  private writer = (data: string): void => {
    fs.appendFileSync(this.filename, data);
  };

  makeTitle(title: string): void {
    this.filename = `${title}.html`
    let data = `<html><head><title>${title}</title></head><body>\n`;
    data = data.concat('', `<h1>${title}</h1>\n`);
    this.writer(data);
  }

  makeString(str: string): void {
    const data = `<p>${str}</p>\n`;
    this.writer(data);
  }

  makeItems(items: string[]): void {
    let data = `<ul>\n`;
    items.forEach(item => {
      data = data.concat('', `<li>${item}</li>\n`);
    });
    data = data.concat('', `</ul>\n`);
    this.writer(data);
  }

  close(): void {
    const data = `</body></html>\n`;
    this.writer(data);
  }

  getResult(): string {
    return this.filename;
  }
}
