import { Book } from './Book.js';

export class Library {
  constructor(name) {
    this.name = name;
    this.books = []; 
  }

  addBook(book) {
    this.books.push(book);
  }


  listAvailableBooks() {
    const availableBooks = this.books.filter(book => book.isAvailable);
    if (availableBooks.length === 0) {
      console.log('No available books at the moment.');
    } else {
      console.log('Available books:');
      availableBooks.forEach(book => {
        console.log(`${book.title} by ${book.author}`);
      });
    }
  }


  borrowBook(title) {
    const book = this.books.find(book => book.title === title);
    if (book) {
      if (book.isAvailable) {
        book.borrow();
        console.log(`${book.title} has been borrowed.`);
      } else {
        console.log(`${book.title} is not available.`);
      }
    } else {
      console.log(`Book titled ${title} not found in the library.`);
    }
  }

  returnBook(title) {
    const book = this.books.find(book => book.title === title);
    if (book) {
      if (!book.isAvailable) {
        book.returnBook();
        console.log(`${book.title} has been returned.`);
      } else {
        console.log(`${book.title} was not borrowed.`);
      }
    } else {
      console.log(`Book titled ${title} not found in the library.`);
    }
  }
}