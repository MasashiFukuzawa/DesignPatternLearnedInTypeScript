import { Node } from "./node";
import { Context } from "../context/context";
import { CommandListNode } from "./commandListNode";

export class ProgramNode implements Node {
  private readonly commandListNode: CommandListNode = new CommandListNode();
  parse(context: Context): void {
    context.skipToken('program');
    this.commandListNode.parse(context);
  }

  toString(): string {
    return `[program ${this.commandListNode.toString()}]`;
  }
}
