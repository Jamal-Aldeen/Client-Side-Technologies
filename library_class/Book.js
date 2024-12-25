export class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
      this.isAvailable = true; 
    }
  

    borrow() {
      if (this.isAvailable) {
        this.isAvailable = false;
      } else {
        console.log(`${this.title} by ${this.author} is already borrowed.`);
      }
    }
  
 
    returnBook() {
      if (!this.isAvailable) {
        this.isAvailable = true;
      } else {
        console.log(`${this.title} by ${this.author} was not borrowed.`);
      }
    }
  }
  