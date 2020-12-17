//NOTA: Los ejemplos son siempre CONCRETOS



describe("golfScore", () => {

  it("Retorna 'Hole-in-one' si strokes es igual a 1", () => {
    expect(golfScore(1, 1)).toEqual(names[0]);
    expect(golfScore(5, 1)).toEqual(names[0]);

  });
  it("Retorna 'Eagle' si strokes <= par - 2", () => {
    expect(golfScore(4, 2)).toEqual(names[1]);
    expect(golfScore(8, 4)).toEqual(names[1]);

  });
  it("Retorna 'Birdie' si strokes = par -1", () => {
    expect(golfScore(3, 2)).toEqual(names[2]);
    expect(golfScore(9, 8)).toEqual(names[2]);

  });

  it("Retorna Par si strokes = par", () => {
    expect(golfScore(3, 3)).toEqual(names[3]);
    expect(golfScore(11, 11)).toEqual(names[3]);
  });

  it("Retorna Bogey si strokes = par +1", () => {
    expect(golfScore(3, 4)).toEqual(names[4]);
    expect(golfScore(11, 12)).toEqual(names[4]);
  });

  it("Retorna Double Bogey si strokes = par +2", () => {
    expect(golfScore(3, 5)).toEqual(names[5]);
    expect(golfScore(11, 13)).toEqual(names[5]);
  });
  it("Retorna Go Home! si strokes >= par +3", () => {
    expect(golfScore(3, 6)).toEqual(names[6]);
    expect(golfScore(11, 19)).toEqual(names[6]);
  });






});