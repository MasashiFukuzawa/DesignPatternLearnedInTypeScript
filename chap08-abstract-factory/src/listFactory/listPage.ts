import { Page } from "../factory/page";

export class ListPage extends Page {
  constructor(title: string, author: string) {
    super(title, author);
  }

  makeHTML(): string {
    let html = `<html><head><title>${this.title}</title></head>\n`;
    html = html.concat('', `<body>\n`);
    html = html.concat('', `<h1>${this.title}</h1>\n`);
    html = html.concat('', `<ul>\n`);
    this.content.forEach((e) => html = html.concat('', e.makeHTML()));
    html = html.concat('', `</ul>\n`);
    html = html.concat('', `<address>${this.author}</address>`);
    html = html.concat('', `</body></html>\n`);
    return html;
  }
}
