import { Support } from "./support";
import { Trouble } from "../trouble/trouble";

export class NoSupport extends Support {
  resolve(trouble: Trouble): boolean {
    return false;
  }
}
