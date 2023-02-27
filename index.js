import BookCollection from './modules/bookCollection.js';
import navigator from './modules/navigation.js';
import updateTime from './modules/time.js';

const bookCollection = new BookCollection();
bookCollection.load();
bookCollection.render();

const bookForm = document.getElementById('book-form');
bookForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  bookCollection.addBook(title, author);
  bookCollection.render();
  bookForm.reset();
});

navigator();
updateTime();
