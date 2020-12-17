// Ejemplo de Ivan de Libros
const LibraryBuilder = () => ({
  books: {},
  addBook(book) {
    this.books[book.id] = book;
  },
  modifyReadedStatus(bookId, newStatus) {
    this.books[bookId].readed = newStatus;
  },
  findBookByAuthor(authorName) {
    return Object.values(this.books).find(
      (book) => book.author.name === authorName
    );
  },
  get readedList() {
    return Object.values(this.books).filter((book) => book.readed);
  },
  get notReadedList() {
    return Object.values(this.books).filter((book) => !book.readed);
  },
});


//Ej de Lista compra (IVAN)

const createShoppingCart = () => ({
  items: {},
  add(product) {
    if (this.items[product.id] == null) {
      this.items[product.id] = { quantity: 1, value: product };
      return this.items;
    }
    this.items[product.id] = {
      ...this.items[product.id],
      quantity: this.items[product.id].quantity + 1,
    };
  },
  remove(product) {
    if (this.items[product.id] == null) {
      return this.items;
    }
    if (this.items[product.id].quantity === 1) {
      delete this.items[product.id];
      return this.items;
    }
    this.items[product.id] = {
      ...this.items[product.id],
      quantity: this.items[product.id].quantity - 1,
    };
    return this.items;
  },
  clear() {
    this.items = {};
  },
  toJSON() {
    return JSON.stringify(this.items);
  },
  get total() {
    let sum = 0;
    let products = Object.values(this.items);
    for (let product of products) {
      sum += product.value.price;
    }
    return sum;
  },
});
//Ej de Lista compra (AOO)
let carritoCompra = {
  productos: {},

  addProduct(producto) {
    this.productos[producto.id] = producto;
  },

  clear() {
    this.productos = {};
  },

  toSaveJSON() {
    return JSON.stringify(this.productos);
  },

  get total() {
    let total = 0;

    for (let product of Object.values(this.productos)) {
      total += product.precio;
    }

    return total;
  },
};