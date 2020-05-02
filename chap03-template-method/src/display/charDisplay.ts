import { AbstractDisplay } from "./abstractDisplay";

export class CharDisplay extends AbstractDisplay {
  constructor(private readonly ch: string) {
    super();
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
