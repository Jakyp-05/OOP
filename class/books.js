class Books {
  #bookName;
  #author;
  #year;
  #isRead;

  constructor(bookName, author, year, isRead) {
    this.#bookName = bookName;
    this.#author = author;
    this.#year = year;
    this.#isRead = isRead;
  }

  toggleReadStatus() {
    return this.#isRead ? "Бул китеп окулган" : "Бул китеп окула элек";
  }

  isUnread() {
    return !this.#isRead;
  }

  getBookName() {
    return this.#bookName;
  }

  getAuthorBook() {
    return this.#author;
  }

  getYearBook() {
    return this.#year;
  }
}

class Library {
  constructor() {
    this.books = [];
  }
  addBook(bookName, author, year, isRead) {
    let myBook = new Books(bookName, author, year, isRead);
    this.books.push(myBook);
    console.log(myBook.toggleReadStatus());
    return myBook;
  }

  removeBook(bookName) {
    this.books = this.books.filter((book) => book.getBookName() !== bookName);
    return `Китеп ${bookName} очурулду`;
  }

  getUnreadBooks() {
    return this.books.filter((book) => !book.isUnread());
  }
}

// Библиотека
let myLibrary = new Library();

console.log(myLibrary.addBook("Сонку дем", "Халит Эртугурул", 2020, true));
console.log(myLibrary.addBook("Ант", "Нуржигит Кадырбеков", 2023, false));

console.log("Текущий список книг:", myLibrary.books);
console.log(myLibrary.removeBook("Соңку дем"));
console.log(myLibrary.getUnreadBooks());

console.log("Непрочитанные книги:");
myLibrary.getUnreadBooks().forEach((book) => {
  console.log(
    `Китеп: ${book.getBookName()}, Автор: ${book.getAuthorBook()}, Жылы: ${book.getYearBook()}`
  );
});

// Книги

let myBooks = new Books("Сонку дем", "Халит Эртугурул", 2020, false);

console.log(myBooks.getBookName());
console.log(myBooks.getAuthorBook());
console.log(myBooks.getYearBook());

// myBook.title = "Сонку дем";
// myBook.author = "Халит Эртугурул";
// myBook.year = 2021;
// myBook.isRead = true;

// console.log(myBook);

// console.log(myLibrary);
// console.log(myLibrary.addBook());
