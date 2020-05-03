import { Command } from "./command"

export class MacroCommand {
  private commands: Command[] = []

  execute() {
    this.commands.forEach(cmd => {
      cmd.execute();
    });
  }

  append(cmd: Command): void {
    if (cmd !== this) {
      this.commands.push(cmd)
    }
  }

  undo(): void {
    if (this.commands.length > 0) {
      this.commands.pop();
    }
  }

  clear() {
    this.commands = [];
  }
}
