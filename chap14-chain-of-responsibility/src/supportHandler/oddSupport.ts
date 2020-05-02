import { Support } from "./support";
import { Trouble } from "../trouble/trouble";

export class OddSupport extends Support {
  resolve(trouble: Trouble): boolean {
    return trouble.number % 2 === 1;
  }
}
