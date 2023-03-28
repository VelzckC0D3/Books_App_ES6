export default class Navigation {
  constructor() {
    this.listButton = document.querySelector('.list');
    this.addButton = document.querySelector('.addButton');
    this.contactButton = document.querySelector('.contact');
    this.bookList = document.querySelector('.awesomeBooks');
    this.createBook = document.querySelector('.form');
    this.contact = document.querySelector('.contactCont');

    this.listButton.addEventListener('click', () => {
      this.changePage(this.bookList, this.createBook, this.contact);
    });

    this.addButton.addEventListener('click', () => {
      this.changePage(this.createBook, this.bookList, this.contact);
    });

    this.contactButton.addEventListener('click', () => {
      this.changePage(this.contact, this.bookList, this.createBook);
    });
  }

  changePage(show, hide1, hide2) {
    show.classList.remove('switch');
    hide1.classList.add('switch');
    hide2.classList.add('switch');
    this.listButton();
  }
}
