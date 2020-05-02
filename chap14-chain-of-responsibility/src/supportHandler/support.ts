import { Trouble } from "../trouble/trouble";

export abstract class Support {
  private next: Support = Object as any;
  constructor(private readonly name: string) {}

  setNext(next: Support): Support {
    this.next = next;
    return next;
  }

  support(trouble: Trouble): void {
    if (this.resolve(trouble)) {
      this.done(trouble);
    } else if (this.next) {
      this.next.support(trouble);
    } else {
      this.fail(trouble);
    }
  }

  toString(): string {
    return`[${this.name}]`;
  }

  abstract resolve(trouble: Trouble): boolean;

  done(trouble: Trouble): void {
    console.log(`${trouble.toString()} is resolved by ${this.name}.`);
  }

  fail(trouble: Trouble): void {
    debugger;
    console.log(`${trouble.toString()} cannot be resolved.`);
  }
}
