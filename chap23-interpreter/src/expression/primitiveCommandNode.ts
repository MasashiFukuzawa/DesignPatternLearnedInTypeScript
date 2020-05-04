import { Node } from "./node";
import { Context } from "../context/context";

export class PrimitiveCommandNode implements Node {
  private name: string = '';
  parse(context: Context): void {
    this.name = context.getCurrentToken();
    context.skipToken(this.name);
    if (!['go', 'right', 'left'].includes(this.name)) {
      throw new Error(`${this.name} is undefined.`);
    }
  }

  toString(): string {
    return this.name;
  }
}
