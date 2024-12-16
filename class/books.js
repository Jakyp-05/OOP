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

  setBookName(bookName) {
    if (bookName.length > 0) {
      this.#bookName = bookName;
      return this;
    } else {
      throw new Error("book name is incorrect!");
    }
  }

  setAuthorBook(author) {
    if (author.length > 0) {
      this.#author = author;
      return this;
    } else {
      throw new Error("book author is incorrect!");
    }
  }

  setYearBook(year) {
    if (typeof year === "number" && year > 0) {
      this.#year = year;
      return this;
    } else {
      throw new Error("year book is incorrect!");
    }
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

// Array library

let librarys = [
  myLibrary.addBook("Сонку дем", "Халит Эртугурул", 2020, true),
  myLibrary.addBook("Ант", "Нуржигит Кадырбеков", 2023, false),
  myLibrary.addBook("Мен атамды таптым", "Нуржигит Кадырбеков", 2024, false),
];

for (let library of librarys) {
  console.log(library);
}

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

// Set
let setBooks = new Books();

// Цепочки методов
setBooks.setBookName("Ант").setAuthorBook("Кадырбеков Н.").setYearBook(2018);

console.log(setBooks.getBookName());
console.log(setBooks.getAuthorBook());
console.log(setBooks.getYearBook());
