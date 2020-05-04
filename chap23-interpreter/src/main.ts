import * as fs from 'fs';
import { ProgramNode } from './expression/programNode';
import { Context } from './context/context';

class Main {
  main(): void {
    const content = fs.readFileSync('./src/program.txt');
    const lines = content.toString().split(`\n`);
    lines.forEach((e) => {
      if (!!e) {
        console.log(`text = "${e}"`);
        const node = new ProgramNode();
        node.parse(new Context(e));
        console.log(`node = ${node.toString()}`.replace(/[\"]/g, ''));
        console.log('----------------------');
      }
    });
  }
}

const m = new Main();
m.main();
