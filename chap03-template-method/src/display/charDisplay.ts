import { AbstractDisplay } from "./abstractDisplay";

export class CharDisplay extends AbstractDisplay {
  constructor(private readonly ch: string) {
    super();
  }

  open(): void {
    process.stdout.write('<<')
  }

  print(): void {
    process.stdout.write(this.ch)
  }

  close(): void {
    console.log('>>');
  }
}
