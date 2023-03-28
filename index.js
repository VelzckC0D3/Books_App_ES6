// Import Modules
import getFormattedDateTime from './modules/date.js';
import Library from './modules/library.js';
import Navigation from './modules/navigation.js';

document.querySelector('#date-time').innerHTML = getFormattedDateTime();

const library = new Library();
library.showBooks();

const nav = new Navigation();
nav.changePage();
