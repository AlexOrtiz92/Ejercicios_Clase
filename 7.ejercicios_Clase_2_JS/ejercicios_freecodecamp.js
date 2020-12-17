
//Ej 88 : using object for lookup Table

function phoneticLookup(val) {
  let result = "";

  // Only change code below this line

  let lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  }
  result = lookup[val];


  // Only change code above this line
  return result;
}

phoneticLookup("charlie");
phoneticLookup("alpha")

//ej 89: Testing object for properties

function checkObj(obj, checkProp) {
  // Only change code below this line

  if (obj.hasOwnProperty(checkProp)) {
    return obj[checkProp];
  } else {

    return "Not Found";
    // Only change code above this line
  }
}

//ej 90 Manipulating complex Objects:

var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  }
  // Add a record here
];

//Ej 92: Record Collection

// Setup
let collection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(object, id, prop, value) {
  if (prop !== "tracks" && value !== "") {
    object[id][prop] = value;
  } else if (prop === "tracks" && object.hasOwnProperty("tracks")) {
    object[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    object[id][prop].push(value);
  } else if (value === "") {
    delete object[id][prop]
  }
  return object;
}

updateRecords(collection, 5439, 'artist', 'ABBA');

//ej 98 Nesting for Loops

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

//Ej 100 Replace loops using recursion (RECURSIVIDAD)

//Suma los primeros "n" numeros de un array

function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}


//extra: factorial de un numero
function factorial(num) {
  if (num <= 0) {
    return 1
  } else {
    return factorial(num - 1) * (num);
  }
}

//ej101 Profile Lookup

// Setup
let contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];



function lookUpProfile(name, prop) {

  for (let j = 0; j < contacts.length; j++) {

    if (contacts[j].firstName === name) {

      if (contacts[j].hasOwnProperty(prop)) {

        return contacts[j][prop];

      } else {
        return "No such property"
      }
    }
  }
  return "No such contact"


};

// Ej : numeor aleatorio entre 5 y 10
lookUpProfile("Akira", "likes");

function random() {

  let result = 0
  while (result < 5 || result > 10) {
    result = Math.floor(Math.random() * 100);
  };
  return result;

}

//ej 104 numero aleatorio entre otros dos numeros:

function randomRange(myMin, myMax) {

  return myMin + Math.floor(Math.random() * (myMax - myMin + 1))

}