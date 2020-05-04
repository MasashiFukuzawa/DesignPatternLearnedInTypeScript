import { Directory } from "./entry/directory";
import { File } from "./entry/file";

class Main {
  main(): void {
    console.log('Making root entries...');
    const rootDir = new Directory('root');
    const binDir = new Directory('bin');
    const tmpDir = new Directory('tmp');
    const usrDir = new Directory('usr');
    rootDir.add(binDir);
    rootDir.add(tmpDir);
    rootDir.add(usrDir);
    binDir.add(new File('vi', 10000));
    binDir.add(new File('latex', 20000));
    rootDir.printList('');

    console.log('');
    console.log('Making user entries...');
    const tanjiro = new Directory('tanjiro');
    const zenitsu = new Directory('zenitsu');
    const inosuke = new Directory('inosuke');
    usrDir.add(tanjiro);
    usrDir.add(zenitsu);
    usrDir.add(inosuke);
    tanjiro.add(new File('diary.html', 100));
    tanjiro.add(new File('Composite.java', 200));
    zenitsu.add(new File('memo.txt', 300));
    inosuke.add(new File('game.doc', 400));
    inosuke.add(new File('junk.mail', 500));
    rootDir.printList('');
  }
}

const m = new Main();
m.main();
