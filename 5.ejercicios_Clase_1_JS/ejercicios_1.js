//ejercicio 1

const nombre = "Alex";
const apellidos = " Ortiz Ortega";

console.log(nombre + apellidos);

//ejercicio 2 (tiene que usarse let porque si usamos const no se puede cambiar)
let x = "foo";
let y = "bar";

console.log((x += y));

//ejercicio 3
const name = "Alejandro";
const firstQuote = "Mi nombre es";
const lastQuote = "¿como estas?";

console.log(firstQuote + " " + name + " " + lastQuote);

// o se puede hacer con template string

console.log(`${firstQuote} ${name} ${lastQuote}`);

//ejercicio 4

let myStr = 'Soy un String con "dobles comillas", dentro de "dobles comillas"';
console.log(myStr);

//ejercicio 5
let simpCom = `Esto es un texto con \`comillas simples\`dentro de \`comillas simples\``;

console.log(simpCom);
//ó las comillas simples no hace falta escaparlas si estan dentro de comillas dobles

let simpCom2 =
  "Esto es un texto con `comillas simples`dentro de `comillas simples`";
console.log(simpCom2);

//ejercicio 6 (Se escapa tambien usando un backslash)

let backSlash = "Vamos a escapar un backslash(\\)";

console.log(backSlash);

//ejercicio 7

let newLine = "Vamos a hace run salto de \n linea";
console.log(newLine);

//ejercicio 8

let retCarr = "Vamos a hacer un retorno de \r carro";
console.log(retCarr);

//ejercicio 9

let tabNota = "Vamos a hacer una \t tabulacion de nota";
console.log(tabNota);

//ejercicio 10

let lastNameLength = 0;
const lastName = "Lovelace";

console.log(lastName.length);

lastNameLength = lastName.length;

console.log(lastNameLength);

// ejercicio 11

let firstLetterOfLastName = 0;
const fullName = "Ada Lovelace";

let name = fullName.split(" ")[0];
let surname = fullName.split(" ")[1];

console.log(name);
console.log(surname);

firstLetterOfLastName = surname.charAt(0);

console.log(firstLetterOfLastName);

let lastLetterOfName = 10;
console.log(lastLetterOfName);

lastLetterOfName = name.charAt(name.length - 1);

// ejercicio 12

const noun = "perro";
const adjetive = "grande";
const verbo = "corre";
const adverb = "rapido";
let blanks = "";

blanks = blanks.concat(
  "Ahi hay un ",
  noun,
  " muy ",
  adjetive,
  " que ",
  verbo,
  " super ",
  adverb
);

//otra manera es con template string

blank = `Ahi hay un ${noun} muy ${adjetive} que ${verbo} super ${adverb}.`;
