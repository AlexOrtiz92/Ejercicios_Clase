

//ejercicios for

//ej 1 Añade los numero 0 al 5 inclusivos, en orden ascendente al array usando un loop
const arr = [];

for (let count = 0; count <= 5; count++) {
  arr.push(count);
}

//ej 2 Añade los numeros impares del 1 al 9 en el array usando loop for

const arr = [];

for (let count = 1; count <= 9; count++) {
  arr.push(count);
  count++;

}

//ó

const arr = [];

for (let count = 1; count <= 9; count++) {
  arr.push(count);
  count += 1;

}

//o
const arr = [];

for (let count = 1; count <= 9; count += 2) {
  arr.push(count);


}


//ej 3 añade los numeros pares del 1 al 9 en orden descendente en el array usando loop for

const arr = [];

for (let count = 9; count >= 1; count--) {
  arr.push(count);
  count--;

}
//o

const arr = [];

for (let count = 9; count >= 1; count -= 2) {
  arr.push(count);

}



if (n === 1) {
  //pasan cosas
} else if (n === 2) {
  //pasan mas cosas
} else if (n === 3) {
  //siguen pasando mas cosas
} else {
  // si todo lo anterior falla, pasa esto
}

//tambien podemos escribirlo asi

if (n === 1) {
  //pasan cosas
} else {
  if (n === 2) {
    //pasan mas cosas
  } else {
    if (n === 3) {
      //siguen pasando mas cosas
    } else {
      // si todo lo anterior falla, pasa esto
    }
  }
} 
