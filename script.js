const grid = document.querySelector(".grid");
let myLibrary = [];

// Book class
function Book(title, author, numOfPages, isRead) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.isRead = isRead;
}

Book.prototype.info = function () {
    if (this.isRead) {
        return `${this.title} by ${this.author}, ${this.numOfPages} pages, read`;
    } else {
        return `${this.title} by ${this.author}, ${this.numOfPages} pages, not read yet`;
    }
};

function addBookToLibrary(title, author, pages, isRead) {
    let newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}

function addBookToGrid(book) {
    const gridBook = document.createElement("div");
    const bookInfo = document.createElement("div");

    bookInfo.textContent = book.info();

    gridBook.appendChild(bookInfo).className = "book-info";
    grid.appendChild(gridBook).className = "grid-book";
}

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 295, false);
addBookToLibrary("The Lord of the Rings", "J.R.R Tolkien", 500, true);

myLibrary.forEach((book) => addBookToGrid(book));
