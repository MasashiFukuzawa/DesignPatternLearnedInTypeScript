import * as fs from 'fs'

export class HTMLWriter {
  private writer = (data: string) => {
    fs.appendFileSync(this.fileName, data)
  };
  constructor(private readonly fileName: string) {}

  title(title: string): void {
    let data = '<html>';
    data = data.concat('', '<head>');
    data = data.concat('', `<title>${title}</title>`);
    data = data.concat('', '</head>');
    data = data.concat('', `<body>\n`);
    data = data.concat('', `<h1>${title}</h1>\n`);
    this.writer(data);
  }

  paragraph(msg: string): void {
    const data = `<p>${msg}</p>\n`;
    this.writer(data);
  }

  link(href: string, caption: string) {
    this.paragraph(`<a href=${href}>${caption}</a>`);
  }

  mailTo(mailAddr: string, userName: string): void {
    this.link(`mailto:${mailAddr}`, userName);
  }

  close(): void {
    const data = `</body></html>\n`;
    this.writer(data);
    close();
  }
}
