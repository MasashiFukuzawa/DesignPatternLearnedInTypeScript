import * as fs from 'fs';
import { Node } from './expression/node';
import { ProgramNode } from './expression/programNode';
import { Context } from './context/context';

class Main {
  main() {
    const content = fs.readFileSync('./src/program.txt');
    const lines = content.toString().split(`\n`);
    lines.forEach(line => {
      if (!!line) {
        console.log(`text = "${line}"`);
        const node: Node = new ProgramNode();
        node.parse(new Context(line));
        console.log(`node = ${node.toString()}`.replace(/[\"]/g, ''));
        console.log('----------------------');
      }
    });
  }
}

const m = new Main();
m.main();
