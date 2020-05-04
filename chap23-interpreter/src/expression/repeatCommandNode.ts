import { Node } from "./node";
import { Context } from "../context/context";
import { CommandListNode } from "./commandListNode";

export class RepeatCommandNode implements Node {
  private number = 0;
  private readonly commandListNode = new CommandListNode();
  parse(context: Context): void {
    context.skipToken('repeat');
    this.number = context.currentNumber();
    context.nextToken();
    this.commandListNode.parse(context);
  }

  toString(): string {
    return `repeat ${this.number} times: ${this.commandListNode.toString()}`;
  }
}
