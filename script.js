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
      title.classList.add("book-title");
      title.textContent = `"${book.title}"`;
      const author = document.createElement("div");
      author.textContent = book.author;
      author.classList.add("book-author");
      const pages = document.createElement("div");
      pages.textContent = `${book.pages} pages`;
      pages.classList.add("book-pages");
      const delBtn = document.createElement("button");
      delBtn.textContent = "Delete";
      delBtn.classList.add("cardDelBtn");
      const readBtn = document.createElement("button");
      readBtn.textContent = "not read";
      readBtn.classList.add("readBtn");

      if (book.read === "read") {
        readBtn.classList.add("read");
        readBtn.textContent = "read";
      }

      newCard.appendChild(delBtn);
      newCard.appendChild(title);
      newCard.appendChild(author);
      newCard.appendChild(pages);
      // newCard.appendChild(read);
      newCard.appendChild(readBtn);
      cards.appendChild(newCard);

      delBtn.addEventListener("click", (book) => {
        cards.removeChild(newCard);
        myLibrary = myLibrary.filter((item) => book.date !== item.date);
      });

      readBtn.addEventListener("click", () => {
        if (readBtn.classList.contains("read")) {
          readBtn.textContent = "not read";
          readBtn.classList.toggle("read");
        } else {
          readBtn.classList.toggle("read");
          readBtn.textContent = "Read";
        }
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
