class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }
  fix() {
    this.state *= 1.5;
  }
  set state(newState) {
    if (newState > 100) {
      this._state = 100;
    } else if (newState < 0) {
      this._state = 0;
    } else {
      this._state = newState;
    }
  }
  get state() {
    return this._state;
  }
}
class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    super(name, releaseDate, pagesCount, (state = 100), (type = null));
    this.type = "magazine";
  }
}
class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
    super(name, releaseDate, pagesCount, (state = 100), (type = null));
    this.author = author;
    this.type = "book";
  }
}
class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
    super(author, name, releaseDate, pagesCount, (state = 100), (type = null));
    this.type = "novel";
  }
}
class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
    super(author, name, releaseDate, pagesCount, (state = 100), (type = null));
    this.type = "fantastic";
  }
}
class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state = 100, type = null) {
    super(author, name, releaseDate, pagesCount, (state = 100), (type = null));
    this.type = "detective";
  }
}
// const picknick = new FantasticBook(
//   "Аркадий и Борис Стругацкие",
//   "Пикник на обочине",
//   1972,
//   168
// );

// console.log(picknick.author); //"Аркадий и Борис Стругацкие"
// picknick.state = 10;
// console.log(picknick.state); //10
// picknick.fix();
// console.log(picknick.state); //15

class Library {
  constructor(name, books = []) {
    let stringName = String(name);
    this.name = stringName;
    this.books = books;
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    let findBook = this.books.find((item) => item[type] == value);
    if (findBook === undefined) {
      findBook = null;
    }
    return findBook;
  }

  giveBookByName(bookName) {
    let book = this.findBookBy("name", bookName);
    if (book) {
      this.books.splice(this.books.indexOf(book), 1);
    }
    return book;
  }
}
