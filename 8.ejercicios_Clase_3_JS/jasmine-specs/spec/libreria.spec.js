//ej 1 de lista de propiedades
describe("getProps", () => {
  it("devuelve un array de un objeto", () => {
    expect(getProps({ x: 1, y: 2 })).toEqual(["x", "y"])
    expect(getProps({ z: 1, h: 2 })).toEqual(["z", "h"])
  });
});


describe("library", () => {
  it("añade un libro", () => {
    const library = {};
    const book = {
      id: 0,
      title: "LOTR",
      read: false,
      author: {
        name: "J.R",
        surname: "Tolkien",
      },
    };
    addBook(book, library);

    expect(library[book.id]).toEqual(jasmine.objectContaining(book));
  });

  it("modificar estadoa leido/noleido", () => {
    const library = {
      0: {
        id: 0,
        title: "LOTR",
        read: false,
        author: {
          name: "J.R",
          surname: "Tolkien",
        },
      }
    };
    modStatus(library, true, 0);
    expect(library[0].read).toEqual(true)
  });

  it("obtener lista libros leidos", () => {
    const library = {
      0: {
        id: 0,
        title: "LOTR",
        read: false,
        author: {
          name: "J.R",
          surname: "Tolkien",
        },
      },
      1: {
        id: 0,
        title: "1984",
        read: true,
        author: {
          name: "George",
          surname: "Orwel",
        },
      }

    };
    modStatus(library, true, 0); //añadimos este aqui para que lo modifique sobre la marcha tambien

    getReaded(library);

    expect(getReaded(library)).toEqual(["LOTR", "1984"]);//Estamos comprobando los nombres
    expect(getReaded(library)).toHaveSize(2);//aqui comprobamos la long
  });
  it("obtener lista libros NO leidos", () => {
    const library = {
      0: {
        id: 0,
        title: "LOTR",
        read: false,
        author: {
          name: "J.R",
          surname: "Tolkien",
        },
      },
      1: {
        id: 0,
        title: "1984",
        read: true,
        author: {
          name: "George",
          surname: "Orwel",
        },
      }

    };
    getNotReaded(library);

    expect(getNotReaded(library)).toEqual(["LOTR"]);//Estamos comprobando los nombres
    expect(getNotReaded(library)).toHaveSize(1);//aqui comprobamos la long

  });

  it("devuelve un libro segun autor", () => {
    const library = {
      0: {
        id: 0,
        title: "LOTR",
        read: false,
        author: {
          name: "J.R",
          surname: "Tolkien",
        },
      },
      1: {
        id: 0,
        title: "1984",
        read: true,
        author: {
          name: "George",
          surname: "Orwel",
        },
      }
    };
    expect(authorBook("George", "Orwel", library)).toEqual("1984");
  });



});