//Ejercicio 1: retorne "si", si x es menor o igual a 50 y mayor a 25. en cualquier otro caso "no"

function test(x) {
  if (x > 25 && x <= 50) {
    return "si";
  }
  return "no";
}

test(x);

//ejercicio 2

function mayorIgualQue(x) {
  if (x > 25) {
    return "Es 25 o mayor";
  }

  if (x >= 15 && x <= 25) {
    return "Es 15 o mayor";
  }

  return "Es menor que 15";
}

mayorIgualQue(x);

//ejercicio 3
function estrictamenteIgual(x) {
  if (x === 12) {
    return "Igual";
  }
  return "No igual";
}

estrictamenteIgual(12);

//ejercicio 4 Haz que el if tenga sentido

function esDeTipoString(x) {
  if (typeof x === "string") {
    return "Es un tipo String";
  }

  return "No es un tipo string";
}

//ejercicio 5: completa la funcion para que dada una "age" y un "minAge" el usuario es adulto

function isAnAdult(age, minAge) {
  if (age < minAge) {
    return "Es menor de edad";
  }
  return "Puede beber Cerveza";
}
isAnAdult(18, 21);
isAnAdult("18", 18); //en este caso el string lo convierte a number

//ó
const isAnAdult = (age, minAge) => age >= minAge;

isAnAdult(18, 21);
isAnAdult("18", 18); //en este caso el string lo convierte a

//ejercicio6: completa la funcion para comprobar que la propiedad x existe en un objeto o

function hasProperty() {
  return false;
}

hasProperty(3, []);
hasProperty("x", {});
hasProperty("y", { x: 1 });
hasProperty("y", { x: 1, y: 2 });

//ejercicio7: completa la funcion para indicar si el valor dado es un valor vacio

const isNil = (x) => {
  return false;
};

isNull(null); // true
isNull(undefined); // true
isNull(0); // false
isNull([]); // false

const isNil = (x) => x == null;

//Sustituye por el asignador de Suma

let a = 1;
let b = 2;
let c = 3;

a = a + 11;
b = 9 + b;
c = c + b;

a += 11; //12

b += 9; //11

c += b; //14

//Sustituye por el asignador de Resta
let a = 10;
let b = 9;
let c = 8;

a = a - 5;
b = b - a;
c = c - 8;

a -= 5; //5
5;

b -= a; //4
4;

c = b -= 8; //-4

/* 
Crea dos ejemplos mas siguiendo las anteriores:

    -para multiplicacion
    -para division
*/

//ejercicio 6 retorna true si el numero es impar

function isOdd(x) {
  return x;
}

//ejercicio 7: completa la siguiente funcion de tal manera que si username existe  se retorna '"hello" y el username'si no existe retorna '"hello" there'

function saludar(username) {
  let greeting = "";
  return greeting;
}

console.log(saludar());
console.log(saludar("Ivan"));

//ejercicio 8: completa la funcion con un condicional ternario para saber si los dos parametros son iguales

function isEqual(a, b) {
  return false;
}

console.log(isEqual(1, 2));
console.log(isEqual("Foo", "Foo"));

//encadena dos ternarios para saber si nuestro tamaño es "LARGE", "MEDIUM", "SMALL"
//es LARGE si es size es >=960
//es MEDIUM si es size es >=660
//si no es SMALL
function layout(size) {
  return false;
}
console.log(layout(screen.width));

//ej1

function test(x) {
  if (x <= 50 && x > 20) {
    return "si";
  }
  return "no";
}

test(x);

//ó

function test(x) {

  return x <= 50 && x >20 ? "si": "no" ;

}

test(x);

//ejemplo distinto con condicional ternario

function test2(x) {

  return x >= 50 || x <= 20 ? "si": "no" ;

}

test(x);





//ej 2
function mayorIgualQue(x) {
  if (x >= 25) {
    return "Es 25 o mayor";
  }

  if (x >= 15) {
    return "Es 15 o mayor";
  }

  return "Es menor que 15";
}

//ej3

function estrictamenteIgual(x) {
  if (x === 12) {
    return "Igual";
  }
  return "No igual";
}

estrictamenteIgual(12); //-->Igual
estrictamenteIgual(11); //-->I No igual

//ej 4

function esDeTipoString(x) {
  if (typeof x === "string") {
    return "Es un tipo string";
  }
  return "No es un tipo string";
}
esDeTipoString();


//ejercicio 5

const isAnAdult = (age, minAge) => age >= minAge ? "mayor de edad": "menor"

isAnAdult(18, 21);
isAnAdult("18", 18);





//ej 6 comprueba si el valor x como propiedad, esta dentro del valor o


const hasProperty = (x, o) => x in o;

hasProperty(3, []);
hasProperty("x", {});
hasProperty("y", { x: 1 });
hasProperty("y", { x: 1, y: 2 });

//ej 7

const isNil = (x) => (x === null ? true : x === undefined ? true : false);

isNil(null); // -> true;
isNil(undefined); // -> true;
isNil(0); // -> false;
isNil([]); // -> false;

//ó mas simple

const isNil = (x) => x == null //esta afirmacion incluye tambien a undefined. Si hubieramos puesto === no estaria incluida.

isNil(null); // -> true;
isNil(undefined); // -> true;
isNil(0); // -> false;
isNil([]); // -> false;


//ej 8

function sumAssignment() {
  let a = 1;
  let b = 2;
  let c = 3;

  // - Suma

  
  let a = 1;
  let b = 2;
  let c = 3;

  a += 11;
  12;

  b += 9;
  11;

  c += b;
  14;
  

  // - Resta

  
  let a = 10;
  let b = 9;
  let c = 8;

  a = a - 5;
  b = b - a;
  c = c - 8;

  a -= 5;
  5;

  b -= a;
  4;

  c -= 8;
  0;
  

  // - Multiplicacion

  
  let a = 10;
  let b = 9;
  let c = 8;

  a = a / 2;
  b = b / 3;
  c = c / a;

  a /= 2;
  5;

  b /= 3;
  3;

  c /= a;
  1.6;


  // - Division

  
  let a = 10;
  let b = 9;
  let c = 8;

  a = a * 3;
  b = b * c;
  c = c * 500;

  a *= 3;
  30;

  b *= c;
  72;

  c *= a;
  4000;


  //ej 9 retorna true si el numero es impar

  function isOdd(x) {

    return (x % 2) !== 0

  } 
  
  isOdd(75); // true
  isOdd(100); //false


  //ej 10

  function saludar(username) {

    let greeting = "Hello, " + username;

    return username != null ? greeting: "Hello, there"
  }
  
  console.log(saludar());
  console.log(saludar("Iván"));

//ej 11

function isEqual(a, b) {
  return a === b ? "Igual": "No igual";
}
console.log(isEqual(1, 2));
console.log(isEqual("Foo", "Foo"));



  //ej 12

  function layout(size) {

    console.log(window.innerWidth)

    return size >= 960 ? "LARGE" : size >= 660 ? "MEDIUM" : "SMALL"

  }
  console.log(layout(window.innerWidth));
  