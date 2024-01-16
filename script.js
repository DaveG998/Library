const myLibrary = [];

function Book(author, title, pages, read, displayed, date) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  this.displayed = displayed;
  this.date = date;
}

Book.prototype.addBookToLibrary = function () {
  myLibrary.push(this);
};

const cards = document.querySelector(".cards");

function displayBooks(myLibrary) {
  for (const book of myLibrary) {
    if (book.displayed == false) {
      book.displayed = true;
      const newCard = document.createElement("div");
      newCard.classList.add("card");
      const title = document.createElement("div");
      title.textContent = `Title: ${book.title}`;
      const author = document.createElement("div");
      author.textContent = `Author: ${book.author}`;
      const pages = document.createElement("div");
      pages.textContent = `Pages: ${book.pages}`;
      const read = document.createElement("div");
      read.textContent = `Read: ${book.read}`;
      const delBtn = document.createElement("button");
      delBtn.textContent = "Delete";
      delBtn.classList.add("cardDelBtn");

      newCard.appendChild(delBtn);
      newCard.appendChild(title);
      newCard.appendChild(author);
      newCard.appendChild(pages);
      newCard.appendChild(read);
      cards.appendChild(newCard);

      delBtn.addEventListener("click", (book) => {
        cards.removeChild(newCard);
        myLibrary = myLibrary.filter((item) => book.date !== item.date);
      });
    }
  }
}

const showButton = document.querySelector("#showDialog");
const dialog = document.querySelector("#dialog");
const bookTitle = document.querySelector("#book-title");
const bookAuthor = document.querySelector("#book-author");
const bookPages = document.querySelector("#book-pages");
const bookRead = document.querySelector("#book-read");
const confirmBtn = document.querySelector("#confirmBtn");
const cancelBtn = document.querySelector("#cancel");

showButton.addEventListener("click", () => {
  dialog.showModal();
});

cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});

confirmBtn.addEventListener("click", (e) => {
  if (
    bookTitle.value &&
    bookAuthor.value &&
    bookPages.value &&
    bookRead.value
  ) {
    book = new Book(
      bookTitle.value,
      bookAuthor.value,
      bookPages.value,
      bookRead.value,
      false,
      Date.now()
    );
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";

    dialog.close();
    book.addBookToLibrary();
    displayBooks(myLibrary);
  }
});
