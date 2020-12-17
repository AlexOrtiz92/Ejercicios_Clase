//ejercicio 1

function getProps(obj) {
  let properties = [];

  for (let prop in obj) {
    properties.push(prop);
  }
  return properties
}


//ejercicio 2

//1
function addBook(book, library) {

  library[book.id] = book;

};

//2
function modStatus(library, status, id) {
  library[id].read = status;
};



//3

// const getReaded = (library) => {
//   let listBooks = [];
//   let totalLibrary = Object.values(library);

//   for (let book of totalLibrary) {
//     if (book.read === true) { //tambien puede ser (book.read) ya que es true
//       listBooks.push(book.title)
//     };
//   };
//   return listBooks
// };

// const getNotReaded = (library) => {
//   let listBooks = [];
//   let totalLibrary = Object.values(library);

//   for (let book of totalLibrary) {
//     if (!book.read) { //tambien puede ser (book.read) ya que es true
//       listBooks.push(book.title)
//     };
//   };
//   return listBooks
// };

//refactorizando

function getBookByReadedStatus(library, status) {
  let listBooks = [];
  let totalLibrary = Object.values(library);
  for (let book of totalLibrary) {
    if (book.read === status) {
      listBooks.push(book.title)
    };
  }
  return listBooks;

}

function getReaded(library) {
  return getBookByReadedStatus(library, true);
}

function getNotReaded(library) {
  return getBookByReadedStatus(library, false);
}

//4

function authorBook(nombre, apellido, library) {

  let bookTitle = []
  let listOfBooks = Object.values(library);

  for (let book of listOfBooks) {
    if (book.author.name === nombre && book.author.surname === apellido) {
      bookTitle = book.title;
    };
  };

  return bookTitle


}