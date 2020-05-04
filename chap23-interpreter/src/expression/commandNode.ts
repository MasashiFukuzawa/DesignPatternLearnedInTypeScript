import { Node } from "./node";
import { Context } from "../context/context";
import { RepeatCommandNode } from "./repeatCommandNode";
import { PrimitiveCommandNode } from "./primitiveCommandNode";

export class CommandNode implements Node {
  private node: Node = Object as any;
  parse(context: Context): void {
    if (context.getCurrentToken() == 'repeat') {
      this.node = new RepeatCommandNode();
    } else {
      this.node = new PrimitiveCommandNode();
    }
    this.node.parse(context);
  }

  toString(): string {
    return this.node.toString();
  }
}
