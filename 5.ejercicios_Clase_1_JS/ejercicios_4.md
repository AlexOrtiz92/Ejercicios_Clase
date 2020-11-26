# Ejercicios de Javascript

```js
//Ejercicio 1: retorne "si", si x es menor o igual a 50 y mayor a 25. en cualquier otro caso "no"

function test(x) {
  if (x) {
    if (x) {
      return "si";
    }
  }
  return "no";
}

test(x);

//ejercicio 2 Haz lo que dice la funcion

function mayorIgualQue(x) {
  if (x) {
    return "Es 25 o mayor";
  }

  if (x) {
    return "Es 15 o mayor";
  }

  return "Es menor que 15";
}

//ejercicio 3: retorna Igual solo si es estrictamente igual a 12
function estrictamenteIgual(x) {
  if (x) {
    return "Igual";
  }
  return "No igual";
}

//ejercicio 4: Haz que el if tenga sentido

function esDeTipoString(x) {
  if (x) {
    return "Es un tipo string";
  }
  return "No es un tipo string";
}

//ejercicio 5

const isAnAdult = (age, minAge);
isAnAdult(18, 21);
isAnAdult("18", 18);


//ejercicio 6: completa la funcion para comprobar que una propiedad "x". Existe en un objeto "o"
function hasProperty() {
  return false;
}

hasProperty(3, []);
hasProperty("x", {});
hasProperty("y", { x: 1 });
hasProperty("y", { x: 1, y: 2 });


//ejercicio 7 completa la funcion para indicar si el valor dado es un valor vacio

const isNil = x; => {
  return false;
}
isNil(null); // -> true;
isNil(undefined); // -> true;
isNil(0); // -> false;
isNil([]); // -> false;

//ejercicio 8:

function sumAssignment() {
  let a = 1;
  let b = 2;
  let c = 3;
  // sustituye por el asignador de suma
  a = a + 11;
  b = 9 + b;
  c = c + b;
}
function subAssignment() {
  let a = 10;
  let b = 9;
  let c = 8;
  // sustituye por el asignador de resta
  a = a - 5;
  b = b - a;
  c = c - 8;
}
/*
  crea dos ejemplos más, siguiendo los anteriores:
    - para la multiplicacion
    - para la división
*/


//ejercicio 9 retorna true si el numero es impar

function isOdd(x) {
  return x;
}

/*
const x = 0;
x > 0 ? x: -x
es equivalente a:
if (x > 0) {
  x
} else {
  -x
}
a === b ? "una cosa" : (a < b) ? "otra" : "finalmente"
*/

//ejercicio 10: completa la siguiente funcion de tal manera que si username existe  se retorna '"hello" y el username'si no existe retorna '"hello" there'

function saludar(username) {
  let greeting = ""
  return greeting;
}

console.log(saludar());
console.log(saludar("Iván"));

//ejercicio 11: completa la funcion con un condicional ternario para saber si los dos parametros son iguales

function isEqual(a, b) {
  return false;
}
console.log(isEqual(1, 2));
console.log(isEqual("Foo", "Foo"));

//ejercicio 12 Encadena dos ternarios para saber si nuestro tamaño de pantalla es "LARGE" "MEDIUM" "SMALL"
//es LARGE si es size es >=960
//es MEDIUM si es size es >=660
//si no es SMALL
function layout(size) {
  return false;
}
console.log(layout(screen.width));
```
