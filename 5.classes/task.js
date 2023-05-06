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
  constructor(name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, (state = 100), (type = null));
    this.type = "magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, (state = 100), (type = null));
    this.author = author;
    this.type = "book";
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, (state = 100), (type = null));
    this.type = "novel";
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, (state = 100), (type = null));
    this.type = "fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, (state = 100), (type = null));
    this.type = "detective";
  }
}

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
    let findBook = this.books.find((itemBook) => itemBook[type] == value);
    return findBook || null;
  }
  giveBookByName(bookName) {
    let searchBook = this.findBookBy("name", bookName);
    if (searchBook) {
      this.books.splice(this.books.indexOf(searchBook), 1);
    }
    return searchBook;
  }
}
