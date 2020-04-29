import { AbstractDisplay } from "./abstractDisplay";

export class CharDisplay extends AbstractDisplay {
  constructor(private readonly ch: string) {
    super();
    this.ch = ch;
  }

  open() {
    process.stdout.write('<<')
  }

  print() {
    process.stdout.write(this.ch)
  }

  close() {
    console.log('>>');
  }
}
