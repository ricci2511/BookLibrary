const grid = document.querySelector(".grid");
let myLibrary = [];

// Book class
function Book(title, author, numOfPages, isRead) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pages, isRead) {
    let newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
}

function addBookToGrid(book) {
    const gridBook = document.createElement("div");
    const title = document.createElement("div");
    const author = document.createElement("div");
    const pages = document.createElement("div");
    const isRead = document.createElement("div");

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = `${book.numOfPages} pages`;
    isRead.textContent = (book.isRead) ? 'Read' : 'Not read yet';

    gridBook.appendChild(title).className = "title";
    gridBook.appendChild(author).className = "author";
    gridBook.appendChild(pages).className = "pages";
    gridBook.appendChild(isRead).className = "isRead";
    grid.appendChild(gridBook).className = "grid-book";
}

addBookToLibrary("The Hobbit", "J.R.R Tolkien", 295, false);
addBookToLibrary("The Lord of the Rings", "J.R.R Tolkien", 500, true);
addBookToLibrary("The Lord of the Rings, Return of the king", "J.R.R Tolkien", 500, true);
addBookToLibrary("The Lord of the Rings", "J.R.R Tolkien", 500, true);
addBookToLibrary("The Lord of the Rings", "J.R.R Tolkien", 500, true);
addBookToLibrary("The Lord of the Rings", "J.R.R Tolkien", 500, true);
addBookToLibrary("The Lord of the Rings", "J.R.R Tolkien", 500, true);
addBookToLibrary("The Lord of the Rings", "J.R.R Tolkien", 500, true);
addBookToLibrary("The Lord of the Rings", "J.R.R Tolkien", 500, true);

myLibrary.forEach((book) => addBookToGrid(book));
