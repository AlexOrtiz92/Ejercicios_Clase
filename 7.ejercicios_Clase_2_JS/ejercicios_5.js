
//Ejercicio 1

function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else if (num >= 20) {
    return "Huge";
  }
  return "Change me";
}
console.assert(testSize(4) === "Tiny");
console.assert(testSize(9) === "Small");
console.assert(testSize(14) === "Medium");
console.assert(testSize(19) === "Large");
console.assert(testSize(20) === "Huge");

//es bueno testear con los extremos.

//Ejercicio 2

function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}
console.assert(testElseIf(7) === "Between 5 and 10");
console.assert(testElseIf(11) === "Greater than 10");
console.assert(testElseIf(4) === "Smaller than 5");

//Ejercicio 3


function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greather than or equal to 10";
  }
}

console.assert(orderMyLogic(9) === "Less than 10");
console.assert(orderMyLogic(4) === "Less than 5");
console.assert(orderMyLogic(11) === "Greather than or equal to 10");

//Ejercicio 4

function caseInSwitch(val) {
  let answer = "";

  switch (val) {
    case 1:
      answer = "alpha";
      break;

    case 2:
      answer = "beta"
      break;

    case 3:
      answer = "gamma";
      break;

    case 4:
      answer = "delta";
      break;
  }
  return answer
}


console.assert(caseInSwitch(1) === "alpha");
console.assert(caseInSwitch(2) === "beta");
console.assert(caseInSwitch(3) === "gamma");
console.assert(caseInSwitch(4) === "delta");
console.assert(caseInSwitch(5) === "");



//Ejercicio 5


function sequentialSizes(val) {
  let answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }

  return answer;

}

console.assert(sequentialSizes(1) === "Low");
console.assert(sequentialSizes(5) === "Mid");
console.assert(sequentialSizes(9) === "High");
console.assert(sequentialSizes(2323) === "");





