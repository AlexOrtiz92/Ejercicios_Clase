//using onject for lookup
//Convert the switch statement into an object called lookup. Use it to look up val and assign the associated string to the result variable.

// Setup
function phoneticLookup(val) {
  let result = "";

  let lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  }
  result = lookup[val];

  return result;
}

phoneticLookup("charlie");

//Record collection
/*
You start with an updateRecords function that takes an object like collection, an id, a prop (like artist or tracks), and a value. Complete the function using the rules below to modify the object passed to the function.

Your function must always return the entire object.
If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
If value is an empty string, delete the given prop property from the album.
Note: A copy of the collection object is used for the tests. */
// Setup
var collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(object, id, prop, value) {

  if (prop !== "tracks" && value !== "") {
    object[id][prop] = value;
  } else if (prop === "tracks" && !object[id].hasOwnProperty(prop)) {
    object[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    object[id][prop].push(value)
  } else if (value === "") {
    delete object[id][prop]
  }

  return object;
}

updateRecords(collection, 5439, 'artist', 'ABBA');

//Ejercicios de Ojects

//Ej 1 Escribe una función de JS que acepta un objeto y devuelve una lista de las propiedades de dicho objeto

let perro = {
  nombre: "Lolo",
  patas: 4,
  raza: "Pastor Aleman"
}


function propObject(obj) {
  return Object.keys(obj);
}

console.log(propObject(perro))

//o 

function propObject(obj) {

  let prop = []

  for (let property in obj) {

    prop.push(property);

  }
  return prop;
}

console.log(propObject(perro))

//ej 2

let libros = {
  0: {
    id: 0000,
    title: "ESDLA",
    author: {
      name: "J.R.R",
      surname: "Tolkien"
    },
    read: true
  },

  1: {
    id: 1111,
    title: "Harry Potter",
    author: {
      name: "J.K.",
      surname: "Rowling"
    },
    read: false
  },
  2: {
    id: 2222,
    title: "1984",
    author: {
      name: "George",
      surname: "Orwel"
    },
    read: false
  },
};

//funcion aceptar un nuevo registro de libro
let bookExample = {
  3: {
    id: 3333,
    title: "La sonrisa Etrusca",
    author: {
      name: "Jose Luis",
      surname: "Sanpedro"
    },
    read: true
  }
}


function addBook(library, book) {
  for (let prop in book) {
    library[prop] = book[prop]
  }
  return library

}

console.log(addBook(libros, bookExample))

//modificar el estado de un libro de leido o no
function updateState(id, state, library) {

  if (state === "Leido") {
    library[id].read = true;
  } else if (state === "No leido") {
    library[id].read = false
  }
  return library;
}

console.log(updateState(1, "Leido", libros))


//obtener la lista de libros leidos y no leidos
function getRead(library) {
  let leidos = []
  let noLeidos = []
  let listOfBooks = Object.values(library);

  for (let book of listOfBooks) {

    if (book.read === true) {
      leidos.push(book.title)
    } else {
      noLeidos.push(book.title)
    }
  }
  console.log(`Libros leidos: ${leidos}`);
  console.log(`Libros NO leidos: ${noLeidos}`);
}
console.log(getRead(libros))


//devuelve el libro segun autor
function getBook(authorName, authorSurname, library) {

  let listOfBooks = Object.values(library);
  let consulta = [];


  for (let book of listOfBooks) {
    if (book.author.name === authorName && book.author.surname === authorSurname) {
      consulta.push(book.title)
    }
  }
  return console.log(consulta)
}

console.log(getBook("George", "Orwel", libros))

