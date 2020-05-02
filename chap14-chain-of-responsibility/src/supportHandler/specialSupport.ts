import { Support } from "./support";
import { Trouble } from "../trouble/trouble";

export class SpecialSupport extends Support {
  constructor(name: string, private readonly number: number) {
    super(name);
  }

  resolve(trouble: Trouble): boolean {
    return trouble.number === this.number;
  }
}
