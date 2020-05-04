import { Aggregate } from '../interface/aggregate'
import { Book } from './book'
import { BookshelfIterator } from './bookshelfIterator'

export class Bookshelf implements Aggregate {
  private readonly books: Book[];
  private last = 0;
  constructor(initialSize: number) {
    this.books = new Array(initialSize);
  }

  appendBook(book: Book): void {
    this.books[this.last] = book;
    this.last++;
  }

  getBookAt(index: number): Book {
    return this.books[index];
  }

  getLength(): number {
    return this.last;
  }

  iterator(): BookshelfIterator {
    return new BookshelfIterator(this);
  }
}
