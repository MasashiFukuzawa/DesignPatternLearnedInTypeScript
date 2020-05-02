import { Support } from "./support";
import { Trouble } from "../trouble/trouble";

export class LimitSupport extends Support {
  constructor(name: string, private readonly limit: number) {
    super(name);
  }

  resolve(trouble: Trouble): boolean {
    return trouble.number < this.limit;
  }
}
