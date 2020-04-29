import { Bookshelf } from './book/bookshelf'
import { Book } from './book/book';

class Main {
  main(): void {
    const bookshelf = new Bookshelf(4);
    bookshelf.appendBook(new Book('1st book'));
    bookshelf.appendBook(new Book('2nd book'));
    bookshelf.appendBook(new Book('3rd book'));
    bookshelf.appendBook(new Book('4th book'));

    const it = bookshelf.iterator();
    while (it.hasNext()) {
      let book = it.next();
      console.log(book.getName());
    }
  }
}

const m = new Main();
m.main();
