import books from "./book.json";
import templateFunction from './template.hbs';
const wrap = document.querySelector(".wrap")
wrap.innerHTML = templateFunction({books});