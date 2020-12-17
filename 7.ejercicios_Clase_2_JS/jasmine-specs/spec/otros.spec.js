describe("sequentialSizes", () => {
  it("Devuelve si es un numero", () => {
    expect(sequentialSizes(1)).toEqual("1, 2, or 3");
    expect(sequentialSizes(2)).toEqual("1, 2, or 3");
    expect(sequentialSizes(3)).toEqual("1, 2, or 3");
    expect(sequentialSizes(4)).toEqual("4 alone");
  })
})

describe("cc", () => {
  it("Devuelve el conteo de las cartas y accion", () => {
    expect(cc(2)).toEqual("1 Bet");
    expect(cc(3)).toEqual("2 Bet");
    expect(cc(7)).toEqual("2 Bet");
    expect(cc("K")).toEqual("1 Bet");
    expect(cc("A")).toEqual("0 Hold");



  })
})