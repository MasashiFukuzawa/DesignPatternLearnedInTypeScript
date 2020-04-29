import { Iterator } from '../interface/iterator'
import { Bookshelf } from './bookshelf'

export class BookshelfIterator implements Iterator {
private index: number;
constructor(private readonly bookshelf: Bookshelf) {
  this.index = 0;
}

  hasNext() {
    return this.index < this.bookshelf.getLength();
  }

  next() {
    const book = this.bookshelf.getBookAt(this.index);
    this.index++;
    return book;
  }
}
