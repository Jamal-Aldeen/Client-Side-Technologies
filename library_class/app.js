import { Book } from './Book.js';
import { Library } from './Library.js';

const myLibrary = new Library('City Library');

const book1 = new Book('Red', 'C.Color');
console.log(book1);

const book2 = new Book('Bule', 'C.Color');
const book3 = new Book('Green', 'C.Color');

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);


myLibrary.listAvailableBooks();  

myLibrary.borrowBook('Red');
myLibrary.borrowBook('Green');

myLibrary.borrowBook('Red');

myLibrary.listAvailableBooks();

myLibrary.returnBook('Red');

myLibrary.returnBook('Blue');

myLibrary.listAvailableBooks();
