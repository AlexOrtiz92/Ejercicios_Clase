js;
const s = "Hello, world"; // empezamos con un texto
// Obteniendo posiciones
s.substring(1, 3); // => ell: 2º y 3º y 4º caraceter
s.slice(1, 4); // => ell: lo mismo
s.slice(-3); // => rld: ultimos 3 caracteres
s.split(", "); // => ["Hello", "world"]: parte por string delimitador
// Buscando un string
s.indexOf("l"); // => 2: posicion de la primera letra "l"
s.indexOf("l", 3); // => 3: posicion de la primera "l" en o despues de 3 posiciones
s.indexOf("zz"); // => -1: no existe el substring
s.lastIndexOf("l"); // => 10: posicion de la ultima "l"
// Busqueda booleana
s.startsWith("Hell"); // => true: el string empieza asi
s.endsWith("!"); // => false: el string no finaliza asi
s.includes("or"); // => true: el string incluye el substring "or"
// Creando o modificando versiones de un string
s.replace("llo", "ya"); // => Heya, world
s.toLowerCase(); // => "hello, world"
s.toUpperCase(); // => "HELLO, WORLD"
// Inspeccionando strings
s.charAt(0); // => H: el primer caracter
s[0]; // => H: el primer caracter
s.charAt(s.length - 1); // => d: el ultimo caracter
// Padding
"x".padStart(3); // => "  x": añade espacios a la izquierda hasta una longitud de 3
"x".padEnd(3); // => "x  ": añade espacios a la izquierda hasta una longitud de 3
"x".padStart(3, "*"); // => "**x": añade * a la izquierda hasta una longitud de 3
"x".padEnd(3, "-"); // => "x--": añade - a la izquierda hasta una longitud de 3
// Triming
" test ".trim(); // => "test": elimina los espacions en blanco
" test ".trimStart(); // => "test ": elimina los espacions en blanco al inicio
" test ".trimEnd(); // => " test": elimina los espacions en blanco al final
// Otros
s.concat("!"); // => "Hello, world!"
"*".repeat(5); // => "*****": repite n copias

//ej1
function isString(param) {
  if (typeof param === "string") {
    return true;
  } else {
    return false;
  }
}
console.log(isString("Foo"));
console.log(isString(["Foo", "Bar"]));

function isString(param) {
  let x = typeof param;

  console.log(x);

  return x === "string";
}

console.log(isString("Foo"));
console.log(isString(["Foo", "Bar"]));

//ej2
function isBlank(param) {
  let x = param.length;
  console.log(x);
  return x === 0;
}
console.log(isBlank("Foo"));
console.log(isBlank(" "));
console.log(isBlank(""));

//ó

function isBlank(param) {
  return param === "";
}
console.log(isBlank("Foo"));
console.log(isBlank(" "));
console.log(isBlank(""));

//Pregunta ¿como saber si un valor es false o true?

//ej 3

function toWords(quote) {
  let x = quote.split(" ");
  return x;
}
console.log(toWords("El conejo blanco entró en la madriguera"));

//ó

function toWords(quote) {
  return quote.split(" ");
}
console.log(toWords("El conejo blanco entró en la madriguera"));

//ej4

function truncate(str, number) {
  let x = str.slice(0, number);
  return x;
}
console.log(truncate("Código limpio", 4));
console.log(truncate("Código sucio", 1));
console.log(truncate("Somos programadores ", 0));
console.log(truncate(" Somos programadores", 6));

//ej 5

function abbrevName(name) {
  let espacios = name.trim().split(" ");
  let nombre = espacios[0];
  let apellido = espacios[1].charAt(0);

  return `${nombre} ${apellido}` + ".";
}
console.log(abbrevName("Iván Zamarro")); // -> Ivan Z.
console.log(abbrevName("Juan Sánchez ")); // -> Juan S.
console.log(abbrevName(" Pedro Morillo ")); // -> Pedro M.

//ó

function abbrevName(name) {
  let x = name.trim();
  x = x.split(" ");
  x = `${x[0]} ${x[1].charAt(0)}.`;

  return x;
}
console.log(abbrevName("Iván Zamarro")); // -> Ivan Z.
console.log(abbrevName("Juan Sánchez ")); // -> Juan S.
console.log(abbrevName(" Pedro Morillo ")); // -> Pedro M.

//ej6
function protectEmailStr(email) {
  let x = email.split("@");

  let y = x[0].replace(x[0].substring(3), "****"); //caracter 0 del array lo remplazamos, todos los caracteres desde la posicion "3" hasta el final, por ****
  let z = x[1];

  console.log(y);
  console.log(z);

  return `${y}@${z}`;
}
console.log(protectEmailStr("ivanzamarro@gmail.com")); // ivan...@gmail.com
console.log(protectEmailStr("p.mar_69@gmail.com"));
console.log(protectEmailStr("fake_account@gmail.com "));
console.log(protectEmailStr("alejandro.ortiz.ortega@gmail.com "));

//ej7

function parameterize(str, param) {
  let x = str.trim().replace(/\s/g, param); //el Regex es para todos los espacios en blanco
  return x;
}
console.log(parameterize("Iván Zamarro de España", "-")); // iván-zamarro-de-españa
console.log(parameterize(" Juan Carlos de Bobón ", "*")); // juan*carlos*de*bobón

//ej8

function capitalizeFirst(str) {
  let x = str.split(" ");
  let y = x[0][0].toUpperCase() + x[0].substring(1);
  console.log(y);
  let z = x[1][0].toUpperCase() + x[1].substring(1);

  return y + " " + z; //las dos [0][0] indican el primer array y la primera letra de ese array]
}
console.log(capitalizeFirst("alejandro ortiz")); // Alejandro Ortiz

//ej9 --> NO ENTIENDO

function capitalizeWords(str) {
  return str.replace(null, (word) => {
    return "Vacio";
  });
}
console.log(capitalizeWords("iván zamarro")); // Iván Zamarro

//ej10

function injectstr(str, strToInject, position) {
  return str.slice(0, position) + strToInject + " " + str.slice(position);
}
console.log(injectstr("JavaScript", "mola ", 0)); // mola JavaScript
console.log(injectstr("We are doing some exercises", "JavaScript", 18)); // We are doing some JavaScript exercises.

//ej11

function removeFirst(str, strToRemove) {
  let x = str.replace(strToRemove, "");

  return x;
}
console.log(removeFirst("JavaScript mola, pero es dificil", " mola, pero")); // JavaScript es dificil
