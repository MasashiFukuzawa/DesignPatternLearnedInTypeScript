import { TextBuilder } from "./builder/textBuilder";
import { Director } from "./director/director";
import { HTMLBuilder } from "./builder/htmlBuilder";

class Main {
  main(): void {
    const args = process.argv;

    if (args.length > 3) {
      console.log('argument error');
      return;
    }

    const type = args[2];
    if (type === 'plain') {
      const textBuilder = new TextBuilder();
      const director = new Director(textBuilder);
      director.construct();
      const result = textBuilder.getResult();
      console.log(result);
    } else if (type === 'html') {
      const htmlBuilder = new HTMLBuilder();
      const director = new Director(htmlBuilder);
      director.construct();
      const filename = htmlBuilder.getResult();
      console.log(`Created ${filename}.`);
    } else {
      console.log(`Usage: node build/main.js plain`);
      console.log(`Usage: node build/main.js html`);
      return;
    }
  }
}

const m = new Main();
m.main();
