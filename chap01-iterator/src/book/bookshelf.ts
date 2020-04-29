import { Aggregate } from '../interface/aggregate'
import { Book } from './book'
import { BookshelfIterator } from './bookshelfIterator'

export class Bookshelf implements Aggregate {
  private readonly books: Book[];
  private last: number;
  constructor(initialSize: number) {
    this.books = new Array(initialSize);
    this.last = 0;
  }

  appendBook(book: Book) {
    this.books[this.last] = book;
    this.last++;
  }

  getBookAt(index: number) {
    return this.books[index];
  }

  getLength() {
    return this.last;
  }

  iterator() {
    return new BookshelfIterator(this);
  }
}
