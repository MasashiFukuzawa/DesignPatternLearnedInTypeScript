import { Builder } from "./builder"

export class TextBuilder extends Builder {
  private buffer: string = '';

  makeTitle(title: string): void {
    this.buffer = this.buffer.concat('', `========================\n`);
    this.buffer = this.buffer.concat('', `<${title}>\n\n`);
  }

  makeString(str: string): void {
    this.buffer = this.buffer.concat('', `* ${str}\n\n`);
  }

  makeItems(items: string[]): void {
    for (let i = 0; i < items.length; i++) {
      this.buffer = this.buffer.concat('', `  - ${items[i]}\n`);
    }
    this.buffer = this.buffer.concat('', `\n`);
  }

  close(): void {
    this.buffer = this.buffer.concat('', `========================\n`);
  }

  getResult(): string {
    return this.buffer;
  }
}
