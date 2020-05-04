import { Node } from "./node";
import { Context } from "../context/context";
import { CommandNode } from "./commandNode";

export class CommandListNode implements Node {
  private list: CommandNode[] = [];

  parse(context: Context): void {
    while (true) {
      if (!context.getCurrentToken()) {
        throw new Error('Missing end');
      } else if (context.getCurrentToken() === 'end') {
        context.skipToken('end');
        break;
      } else {
        const commandNode = new CommandNode();
        commandNode.parse(context);
        this.list.push(commandNode);
      }
    }
  }

  toString(): string {
    return this.list.toString();
  }
}
