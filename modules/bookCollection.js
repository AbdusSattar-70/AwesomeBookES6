import Book from './book.js';

export default class BookCollection {
  constructor() {
    this.books = [];
  }

    getNextId = () => {
      let maximumId = 0;
      this.books.forEach((book) => {
        if (book.id > maximumId) {
          maximumId = book.id;
        }
      });
      return maximumId + 1;
    }

    addBook = (title, author) => {
      const id = this.getNextId();
      const book = new Book(id, title, author);
      this.books.push(book);
      this.save();
    }

    removeBook = (id) => {
      this.books = this.books.filter((book) => book.id !== id);
      this.save();
    }

    render = () => {
      const bookCollection = document.getElementById('displayBook');
      bookCollection.innerHTML = '';
      this.books.forEach((book) => {
        const bookElement = document.createElement('div');
        bookElement.className = 'list-block';
        bookElement.innerHTML = `<h4>${book.title} by ${book.author}</h4><button class="remove-button">Remove</button>`;
        bookElement.querySelector('.remove-button').addEventListener('click', () => {
          this.removeBook(book.id);
          this.render();
        });
        bookCollection.appendChild(bookElement);
      });
    }

    save = () => {
      localStorage.setItem('AllBook', JSON.stringify(this.books));
    }

    load = () => {
      const books = JSON.parse(localStorage.getItem('AllBook')) || [];
      books.forEach((book) => {
        this.books.push(new Book(book.id, book.title, book.author));
      });
    }
}