// Book class
class Book {
    constructor(
        title = 'Unknown',
        author = 'Unknown',
        numOfPages = 0,
        isRead = false
    ) {
        this.title = title;
        this.author = author;
        this.numOfPages = numOfPages;
        this.isRead = isRead;
    }
}

// Library class to store the books
class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    getBook(title) {
        return this.books.find((book) => book.title === title);
    }

    deleteBook(element) {
        if (element.classList.contains('remove-btn')) {
            const bookTitle = element.parentNode.parentNode.firstChild.innerHTML.replaceAll('"', '');
            const bookObj = this.getBook(bookTitle);

            this.books = this.books.filter((book) => book !== bookObj);
            element.parentElement.parentElement.remove(); // remove its parent which is grid-book
        }
    }
}

// UI class
class UI {
    static clearInputFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#pages').value = '';
        document.querySelector('#isRead').checked = false;
    }

    static checkReadStatus(element) {
        if (element.classList.contains('isRead-btn')) {
            const bookTitle = element.parentNode.parentNode.firstChild.innerHTML.replaceAll('"', '');
            const book = myLibrary.getBook(bookTitle);

            book.isRead = !book.isRead;
            updateGrid();
        }
    }
}

const myLibrary = new Library();
const grid = document.querySelector('.grid');
const addBookBtn = document.querySelector('#addBookBtn');
const formAddBtn = document.querySelector('#formAddBtn');
const formCancelBtn = document.querySelector('#formCancelBtn');

function addBookToGrid(book) {
    const gridBook = document.createElement('div');
    const title = document.createElement('div');
    const author = document.createElement('div');
    const pages = document.createElement('div');
    const isRead = document.querySelector('#isRead')

    const bookBtns = document.createElement('div');
    const isReadBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    const readBtnColor = 'rgb(68, 255, 115)';
    const notReadBtnColor = 'rgb(248, 20, 20)';

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = `${book.numOfPages} pages`;
    removeBtn.textContent = 'Remove';

    if (book.isRead) {
        isReadBtn.textContent = 'Read';
        isReadBtn.style.backgroundColor = readBtnColor;
    } else {
        isReadBtn.textContent = 'Not read yet';
        isReadBtn.style.backgroundColor = notReadBtnColor;
    }

    gridBook.appendChild(title).className = 'title';
    gridBook.appendChild(author).className = 'author';
    gridBook.appendChild(pages).className = 'pages';
    bookBtns.appendChild(isReadBtn).className = 'isRead-btn';
    bookBtns.appendChild(removeBtn).className = 'remove-btn';
    gridBook.appendChild(bookBtns).className = 'book-btns';
    grid.appendChild(gridBook).className = 'grid-book';
}

function updateGrid() {
    grid.innerHTML = ''; // clear grid
    myLibrary.books.forEach((book) => addBookToGrid(book));
}

function getInputBookData() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let isRead = document.querySelector('#isRead');
    isRead = isRead ? isRead.checked : false;

    return new Book(title, author, pages, isRead);
}

// EVENTS
addBookBtn.addEventListener('click', () => {
    document.querySelector('.add-book-popup').classList.add('active');
});

formCancelBtn.addEventListener('click', () => {
    document.querySelector('.add-book-popup').classList.remove('active');
});

formAddBtn.addEventListener('click', () => {
    let newBook = getInputBookData();
    myLibrary.addBook(newBook);
    updateGrid();
    UI.clearInputFields();
});

grid.addEventListener('click', (e) => UI.checkReadStatus(e.target));

grid.addEventListener('click', (e) => myLibrary.deleteBook(e.target));
