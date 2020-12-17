//Ejemplo Ivan de Libros

describe("Library", () => {
  let library = null;
  let book = null;
  beforeEach(() => {
    library = LibraryBuilder();
    book = {
      id: 0,
      title: "LOTR",
      readed: false,
      author: { name: "J.R", surname: "Tolkien" },
    };
  });
  it("añade un libro", () => {
    library.addBook(book);
    expect(library.books[book.id]).toEqual(book);
  });
  it("modifica el estado de lectura de un libro", () => {
    library.addBook(book);
    library.modifyReadedStatus(book.id, true);
    expect(library.books[book.id].readed).toEqual(true);
  });
  it("retorna la lista de libros leídos", () => {
    library.addBook(book);
    library.modifyReadedStatus(book.id, true);
    expect(library.readedList).toHaveSize(1);
  });
  it("retorna la lista de libros NO leídos", () => {
    library.addBook(book);
    expect(library.notReadedList).toHaveSize(1);
  });
  it("retorna un libro buscado por author", () => {
    library.addBook(book);
    expect(library.findBookByAuthor("J.R")).toEqual(book);
  });
});
//Ejercicio lista compra (Ivan)

describe("shoppingCart", () => {
  let shoppingCart = null;
  let product = null;
  beforeEach(() => {
    shoppingCart = createShoppingCart();
    product = {
      id: 0,
      name: "Pepsi",
      price: 9.99,
    };
  });
  it("permite añadir productos", () => {
    shoppingCart.add(product);
    expect(Object.values(shoppingCart.items)).toHaveSize(1);
  });
  it("permite incrementar la cantidad de un mismo producto", () => {
    shoppingCart.add(product);
    shoppingCart.add(product);
    expect(shoppingCart.items[product.id].quantity).toEqual(2);
  });
  it("permite decrementar la cantidad de un mismo producto", () => {
    shoppingCart.add(product);
    shoppingCart.add(product);
    shoppingCart.remove(product);
    expect(shoppingCart.items[product.id].quantity).toEqual(1);
  });
  it("si al decrementar un producto solo existe uno, este sale de la lista de items", () => {
    shoppingCart.add(product);
    shoppingCart.remove(product);
    expect(Object.values(shoppingCart.items)).toHaveSize(0);
  });
  it("permite consultar el precio total del carrito", () => {
    shoppingCart.add(product);
    shoppingCart.add({ ...product, id: 1, name: "Pan" });
    expect(shoppingCart.total).toEqual(19.98);
  });
  it("permite borrar todos los productos", () => {
    shoppingCart.add(product);
    shoppingCart.clear();
    expect(Object.values(shoppingCart.items)).toHaveSize(0);
  });
  it("permite salvar los productos en JSON", () => {
    shoppingCart.add(product);
    expect(shoppingCart.toJSON()).toEqual(JSON.stringify(shoppingCart.items));
  });
});


//Ejercicio lista compra (AOO)
describe("carritoCompra", () => {
  let producto = {
    id: 0,
    precio: 9.99,
  };

  let producto2 = {
    id: 1,
    precio: 9.99,
  };
  it("Que permita añadir productos", () => {
    carritoCompra.addProduct(producto);
    expect(carritoCompra.productos[0]).toEqual(producto);
  });

  it("Que permita borrar todos los productos del carrito", () => {
    carritoCompra.addProduct(producto);
    carritoCompra.clear();
    expect(Object.values(carritoCompra.productos)).toHaveSize(0);
  });

  it("Que permita salvar en JSON los productos del carrito", () => {
    carritoCompra.addProduct(producto);
    expect(carritoCompra.toSaveJSON()).toEqual(
      JSON.stringify(carritoCompra.productos)
    );
  });

  it("Que permita obtener el precio total del carrito", () => {
    carritoCompra.addProduct(producto);
    carritoCompra.addProduct(producto2);
    expect(carritoCompra.total).toEqual(19.98);
  });

});
