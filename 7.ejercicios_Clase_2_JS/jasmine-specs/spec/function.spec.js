describe("twoNums", () => {
  it("retorna 'El más grande de los dos'", () => {
    expect(twoNums(4, 6)).toEqual(6);
    expect(twoNums(6, 4)).toEqual(6);
  });
});

describe("productNum", () => {
  it("Retorna signo de producto", () => {
    expect(productNum(4, 8, -7)).toEqual("-");
    expect(productNum(4, 8, 7)).toEqual("+");
    expect(productNum(0, 8, 7)).toEqual("+");
  });
});

describe("arrOrd", () => {
  it("Retorna el array con los numeros ordenados", () => {
    expect(arrOrd([3, 5, 2])).toEqual([2, 3, 5]);
  });
});

describe("arrNum", () => {
  it("Retorna el numero mas alto contenido en el array", () => {
    expect(arrNum([5, 3, 9])).toEqual(9);
    expect(arrNum([5, 3, 9, 15])).toEqual(15);
    expect(arrNum([-100, -50, -1])).toEqual(-1);
  });
});


describe("arrOddOrEven", () => {
  it("Retorna array con numero y su tipo (par o impar)", () => {
    expect(arrOddOrEven([])).toEqual([
      { value: 0, type: "even" },
      { value: 1, type: "odd" },
      { value: 2, type: "even" },
      { value: 3, type: "odd" },
      { value: 4, type: "even" },
      { value: 5, type: "odd" },
      { value: 6, type: "even" },
      { value: 7, type: "odd" },
      { value: 8, type: "even" },
      { value: 9, type: "odd" },
      { value: 10, type: "even" },
      { value: 11, type: "odd" },
      { value: 12, type: "even" },
      { value: 13, type: "odd" },
      { value: 14, type: "even" },
      { value: 15, type: "odd" }

    ]);
  });
});

describe("averageNotes", () => {
  it("Devuelve el grado de la media de notas", () => {
    expect(averageNotes([80, 77, 88, 95, 68])).toEqual("B")
    expect(averageNotes([10, 77, 47, 95, 68, 0, 50])).toEqual("F")
    expect(averageNotes([80, 77])).toEqual("C")

  });
});

describe("multiplos", () => {
  it(" numeros del 1 al 100 y cambioa algunos multiplos", () => {
    expect(multiplos()).toEqual([1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16, 17, "Fizz", 19, "Buzz", "Fizz", 22, 23, "Fizz", "Buzz", 26, "Fizz", 28, 29, "FizzBuzz", 31, 32, "Fizz", 34, "Buzz", "Fizz", 37, 38, "Fizz", "Buzz", 41, "Fizz", 43, 44, "FizzBuzz", 46, 47, "Fizz", 49, "Buzz", "Fizz", 52, 53, "Fizz", "Buzz", 56, "Fizz", 58, 59, "FizzBuzz", 61, 62, "Fizz", 64, "Buzz", "Fizz", 67, 68, "Fizz", "Buzz", 71, "Fizz", 73, 74, "FizzBuzz", 76, 77, "Fizz", 79, "Buzz", "Fizz", 82, 83, "Fizz", "Buzz", 86, "Fizz", 88, 89, "FizzBuzz", 91, 92, "Fizz", 94, "Buzz", "Fizz", 97, 98, "Fizz", "Buzz"])
  });
});