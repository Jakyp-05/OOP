class Books {
  constructor(title, author, year, isRead) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isRead = isRead;
  }

  toggleReadStatus() {
    return this.isRead ? "Бул китеп окулган" : "Бул китеп окула элек";
  }
}

class Library {
  constructor() {
    this.books = [];
  }
  addBook(title, author, year, isRead) {
    let myBook = new Books(title, author, year, isRead);
    this.books.push(myBook);
    console.log(myBook.toggleReadStatus());
    return myBook;
  }

  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
    return `Китеп ${title} очурулду`;
  }

  getUnreadBooks(isRead, title) {
    this.books.filter((book) => !book.isRead);
    return `${title},${isRead}, ------`;
  }
}

let myLibrary = new Library();

console.log(myLibrary.addBook("Сонку дем", "Халит Эртугурул", 2020, true));
console.log(myLibrary.addBook("Ант", "Нуржигит Кадырбеков", 2023, true));

// myBook.title = "Сонку дем";
// myBook.author = "Халит Эртугурул";
// myBook.year = 2021;
// myBook.isRead = true;

// console.log(myBook);

// console.log(myLibrary);
// console.log(myLibrary.addBook());

console.log("Текущий список книг:", myLibrary.books);
console.log(myLibrary.removeBook("Соңку дем"));
console.log(myLibrary.getUnreadBooks());
