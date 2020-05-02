import { Builder } from "./builder"

export class TextBuilder extends Builder {
  private str: string = '';

  makeTitle(title: string): void {
    this.str = this.str.concat('', `========================\n`);
    this.str = this.str.concat('', `<${title}>\n\n`);
  }

  makeString(str: string): void {
    this.str = this.str.concat('', `* ${str}\n\n`);
  }

  makeItems(items: string[]): void {
    items.forEach(item => {
      this.str = this.str.concat('', `  - ${item}\n`);
    });
    this.str = this.str.concat('', `\n`);
  }

  close(): void {
    this.str = this.str.concat('', `========================\n`);
  }

  getResult(): string {
    return this.str;
  }
}
