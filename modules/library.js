// Library and how to iterate within it
class Library {
  constructor() {
    this.books = [];
    this.loadBooks();
    this.showBooks();

    const addButton = document.querySelector('#addButton');
    addButton.addEventListener('click', () => {
      const title = document.querySelector('#title').value;
      const author = document.querySelector('#author').value;

      if (title && author) {
        this.addBook(title, author);
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
      }
    });
  }

  showBooks() {
    const booksCont = document.querySelector('#books');
    booksCont.innerHTML = '';
    this.books.forEach((book, i) => {
      const li = document.createElement('li');
      li.style.listStyle = 'none';
      li.classList.add('booksLi');
      li.innerHTML = `"${book.title}" by ${book.author}`;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Remove';
      deleteButton.classList.add('deleteButton');
      deleteButton.setAttribute('data-book-index', i);
      deleteButton.addEventListener('click', () => {
        this.removeBook(i);
      });
      li.appendChild(deleteButton);
      booksCont.appendChild(li);
    });
  }

  loadBooks() {
    if (localStorage.getItem('books')) {
      const savedBooks = JSON.parse(localStorage.getItem('books'));
      savedBooks.forEach((book) => {
        this.books.push({ title: book.title, author: book.author });
      });
    }
  }

  addBook(title, author) {
    const newBook = { title, author };
    this.books.push(newBook);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.showBooks();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
    this.showBooks();
  }
}

export default Library;