import './extensions/math.extensions'
import { MacroCommand } from "./command/macroCommand";
import { DrawCanvas } from "./drawer/drawCanvas";
import { DrawCommand } from "./drawer/drawCommand";

class Main {
  main() {
    const history = new MacroCommand();
    const canvas = new DrawCanvas(400, 400, history);

    Array.from({length: 10}).forEach((_, i) => {
      i++;
      const rand = Math.getRandomInt(10) + 1;
      const cmd = new DrawCommand(canvas, { x: i * rand, y: i * rand });
      if ([1, 2, 3].includes(rand)) {
        history.clear();
        console.log('clear');
      } else if ([4, 5, 6].includes(rand)) {
        history.undo();
        console.log('undo');
      } else {
        history.append(cmd);
        console.log('append');
      }
      cmd.execute();
      console.log('--------------------------------');
    });
  }
}

const m = new Main();
m.main();
