//Ejercicio 1
function twoNums(num1, num2) {
  if (num1 > num2) {
    return Math.floor(num1);
  } else {
    return num2;
  }
}

//Ejercicio 2
function productNum(num1, num2, num3) {
  const total = num1 * num2 * num3;
  if (total >= 0) {
    return "+";
  } else {
    return "-";
  }
}


//Ejercicio 3

function arrOrd(array) {
  const result = [];

  if (array[0] < array[1] && array[0] < array[2]) {
    result.push(array[0]);
    array.splice(array.indexOf(array[0]), 1);
  } else if (array[1] < array[0] && array[1] < array[2]) {
    result.push(array[1]);
    array.splice(array.indexOf(array[1]), 1);
  } else if (array[2] < array[1] && array[2] < array[0]) {
    result.push(array[2]);
    array.splice(array.indexOf(array[2]), 1);
  }
  console.log(result);
  console.log(array);

  if (array[0] < array[1]) {
    result.push(array[0]);
    result.push(array[1]);
  } else {
    result.push(array[1]);
    result.push(array[0]);
  }

  return result;
}

console.log(arrOrd([22345, 1, 40450]));



//otra solucion


function arrOrd(array) {
  const result = [];


  if (array[0] < array[1] && array[0] < array[2]) {
    result.push(array[0]);
    array.splice(array.indexOf(array[0]), 1);
  } else if (array[1] < array[0] && array[1] < array[2]) {
    result.push(array[1]);
    array.splice(array.indexOf(array[1]), 1);
  } else if (array[2] < array[1] && array[2] < array[0]) {
    result.push(array[2]);
    array.splice(array.indexOf(array[2]), 1);
  }

  result.push(Math.min(array[0], array[1]));
  result.push(Math.max(array[0], array[1]));

  return result;
}

console.log(arrOrd([22345, 1, 40450]));


//FORMA LARGA

function arrOrd(array) {
  let result = [];

  if (array[0] < array[1] && array[0] < array[2]) {
    result.push(array[0]);
  } else
    if (array[1] < array[0] && array[1] < array[2]) {
      result.push(array[1]);
    } else {
      result.push(array[2]);
    }


  if (array[0] > array[1] && array[0] < array[2]) {
    result.push(array[0]);
  } else if (array[0] > array[2] && array[0] < array[1]) {
    result.push(array[0]);
  } else if (array[1] > array[0] && array[1] < array[2]) {
    result.push(array[1]);
  } else if (array[1] > array[2] && array[1] < array[0]) {
    result.push(array[1]);
  } else if (array[2] > array[1] && array[2] < array[0]) {
    result.push(array[2]);
  } else if (array[2] > array[0] && array[2] < array[1]) {
    result.push(array[2]);
  }

  if (array[0] > array[1] && array[0] > array[2]) {
    result.push(array[0]);
  } else
    if (array[1] > array[0] && array[1] > array[2]) {
      result.push(array[1]);
    } else {
      result.push(array[2]);
    }


  return result;
}

console.log(arrOrd([3, 5, 2]));


//Ejercicio 5

function arrNum(array) {
  let max = array[0];

  for (let number of array) {
    if (number > max) {
      max = number
    }
  }

  return max;
}


//Ejercicio 6

function arrOddOrEven(array) {
  for (let count = 0; count <= 15; count++) {

    let type = "";

    if (count % 2 === 0) {
      type = "even"
    } else {
      type = "odd"
    }
    array.push({ value: count, type: type });
  }
  return array
}

//Ejercicio 7

function averageNotes(array) {

  let total = 0;

  for (let count = 0; count <= array.length - 1; count++) {
    total += array[count]
  }

  total /= array.length;

  if (total < 60) {
    return "F"
  } else if (total < 70) {
    return "D"
  } else if (total < 80) {
    return "C"
  } else if (total < 90) {
    return "B"
  } else if (total <= 100) {
    return "A"
  }

}


console.log(averageNotes([80, 77, 88, 95, 68]));

//o 

function averageNotes(array) {

  let total = 0;

  for (let element of array) {   //aqui sumamos todos los elementos del array con un for..of

    total += element;

  }


  total /= array.length;

  if (total < 60) {
    return "F"
  } else if (total < 70) {
    return "D"
  } else if (total < 80) {
    return "C"
  } else if (total < 90) {
    return "B"
  } else if (total <= 100) {
    return "A"
  }

}


console.log(averageNotes([80, 77, 88, 95, 68]));


//EJERCICIO 8

function multiplos(array) {

  let result = []

  for (let count = 1; count <= 100; count++) {
    if (count % 15 === 0) {
      result.push("FizzBuzz")
    } else if (count % 5 === 0) {
      result.push("Buzz")
    } else if (count % 3 === 0) {
      result.push("Fizz")
    } else {
      result.push(count)
    }

  };
  return result

};