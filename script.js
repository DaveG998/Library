const myLibrary = [];

function Book(author, title, pages, read) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
  // this.info = function () {
  //   return `${title} by ${author}, ${pages}, ${read}`;
  // };
}

Book.prototype.addBookToLibrary = function () {
  myLibrary.push(this);
};

const cards = document.querySelector(".cards");

function displayBooks(myLibrary) {
  for (const book of myLibrary) {
    console.log("Test");
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

    newCard.appendChild(title);
    newCard.appendChild(author);
    newCard.appendChild(pages);
    newCard.appendChild(read);

    cards.appendChild(newCard);
  }
}

book1 = new Book("Harry Potter", "J.K.Rowling", "345", true);
book1.addBookToLibrary();

book2 = new Book("Harry Potter", "J.K.Rowling", "345", true);
book2.addBookToLibrary();
displayBooks(myLibrary);
