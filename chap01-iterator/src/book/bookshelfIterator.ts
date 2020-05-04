import { Iterator } from '../interface/iterator'
import { Bookshelf } from './bookshelf'
import { Book } from './book';

export class BookshelfIterator implements Iterator {
private index = 0;
constructor(private readonly bookshelf: Bookshelf) {}

  hasNext(): boolean {
    return this.index < this.bookshelf.getLength();
  }

  next(): Book {
    const book = this.bookshelf.getBookAt(this.index);
    this.index++;
    return book;
  }
}
