js;
Number.parseInt("1"); // Convierte un string numerico a tipo Number
Number.parseFloat("2.0"); // Convierte un string numerico a tipo Number
Number.isNaN(x); // Es x un valor NaN?
Number.isFinite(x); // Es x un numero finito?
Number.isFinite(x); // Es x un numero finito?
Number.isInteger(x); // Es x un numero entero?
Number.isSafeInteger(x); // Es x un numero entero entre los valores maximos y minimos a representar?
Number.MIN_SAFE_INTEGER; // => -(2**53-1)
Number.MAX_SAFE_INTEGER; // => 2**53-1
Number.tofixed(x); //dice el numero de decimales que tiene un numero
a.toString(x); //Convierte a string un numero

Math.pow(2, 53); // => 9007199254740992: 2 exponenciado a 53
Math.round(0.6); // => 1.0: redondeo al mas cercano
Math.ceil(0.6); // => 1.0: redondeo hacia arriba
Math.floor(0.6); // => 0.0: redondeo hacia abajo
Math.abs(5); // => 5: valor absoluto
Math.max(x, y, z); // Retorna el argumento mas largo
Math.min(x, y, z); // Retorna el argumento mas pequeño
Math.random(); // Devuelve un numero pseudorandomizado x donde 0 <= x < 1.0
Math.PI; // π: Circunferencia de un circulo / diametro
Math.E; // e: La base de logaritmo natural
Math.sqrt(3); // Raiz cuadrada de 3
Math.pow(3, 1 / 3); // Raiz cubica de 3
Math.sin(0); // Trigonometria: Tambien tenemos disponibles el Math.cos, Math.atan, etc.
Math.log(10); // Logaritmo de 10

// [... etc]

//ej1

function randomInt() {
  const x = Math.random() * 10; //
  console.log(x);
  const y = Math.round(x);
  console.log(y);

  return y;
}
console.log(Number.isInteger(randomInt()));
//ó

function randomInt(min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}
console.log(randomInt(1, 10));

//ej2

function toDecimals(number, decimals) {
  let x = Number.parseFloat(number).toFixed(decimals);

  return x;
}
console.log(toDecimals(3.100212, 2)); //=== "3.10");
console.log(toDecimals(3.100212, 3)); //=== "3.100");

//ej3
function isNumber(z) {
  let x = Number.isInteger(z); //este dice solo numeros enteros

  return x;
}

console.log(isNumber(2));
console.log(isNumber(3.43));
console.log(isNumber("3.1"));

//ó

function isNumber(param) {
  let x = typeof param === "number";
  return x;
}
console.log(isNumber(2));
console.log(isNumber(3.43));
console.log(isNumber("3.1"));

//otro

function isNumber(z) {
  let x = Number.isFinite(z); //este te dice todo numero cualquiera

  return x;
}

console.log(isNumber(2));
console.log(isNumber(3.43));
console.log(isNumber("3.1"));

//otro

function isNumber(z) {
  let x = Number.parseFloat(z);
  let y = Number.isFinite(x);

  return y;
}
console.log(isNumber(2));
console.log(isNumber(3.43));
console.log(isNumber("3.1"));
console.log(isNumber("sss"));

//otro

function isNumber(n) {
  return typeof Number.parseInt(n, 10) === "number";
}
console.log(isNumber(2));
console.log(isNumber(3.43));
console.log(isNumber("3.1"));
console.log(isNumber("sss")); // te dara true porque es NaN y NaN es un "Number"

//ej4

function pythagorean(a, b) {
  return Math.hypot(a, b);
}
console.log(pythagorean(3, 4)); // -> 5

//ej 5

function round5(num) {
  return Math.round(num / 5) * 5;
}
console.log(round5(32)); // -> 35
console.log(round5(137)); // -> 140

//ej 6

function round(num, roundNum) {
  return Math.round(num * 10 ** roundNum) / 10 ** roundNum;
}
console.log(round(4.235, 2)); // -> 4.24
console.log(round(5.0235, 3)); // -> 5.024

function round(num, roundNum) {
  return parseFloat(num.toFixed(roundNum));
}
  console.log(round(4.235, 2)); // -> 4.24
  console.log(round(5.0235, 3)); // -> 5.024

  //ej 7

  function percentage(x, y) {
    return Number.parseFloat((y * 100) / x).toFixed(2);
  }
  console.log(percentage(1000, 47.12)); // -> 4.712
  console.log(percentage(687, 345)); // -> 50.21
  console.log(percentage(100, 30)); // ->

  //ej 8

  function radians2Degrees(radians) {
    return (radians * 180) / Math.PI;
  }
  console.log(radians2Degrees(0.7853981633974483)); // -> 45

  //ej 9

  function thousandsSplit(num) {
    let x = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return x;
  }

  console.log(thousandsSplit(1000)); // -> 1,000
  console.log(thousandsSplit(100000)); // -> 100,000

  //ej10

  function sqrt2Int(num) {
    return Math.round(Math.sqrt(num));
  }
  console.log(sqrt2Int(17)); // -> 4
  console.log(sqrt2Int(3)); //
}
