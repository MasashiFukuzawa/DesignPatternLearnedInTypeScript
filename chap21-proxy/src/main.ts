import { PrinterProxy } from "./printer/printerProxy";

class Main {
  main() {
    const p = new PrinterProxy('Alice');
    console.log(`Current name is ${p.getPrinterName()}.`)
    p.setPrinterName('Bob');
    console.log(`Current name is ${p.getPrinterName()}.`)
    p.print('Hello, world.');
  }
}

const m = new Main();
m.main();
