import { Command } from "./command"

export class MacroCommand {
  private commands: Command[] = []

  execute(): void {
    this.commands.forEach((e) => e.execute());
  }

  append(cmd: Command): void {
    if (cmd !== this) {
      this.commands.push(cmd);
    }
  }

  undo(): void {
    if (this.commands.length > 0) {
      this.commands.pop();
    }
  }

  clear(): void {
    this.commands = [];
  }
}
