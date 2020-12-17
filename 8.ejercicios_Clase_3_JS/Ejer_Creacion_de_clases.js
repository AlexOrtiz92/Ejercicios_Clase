class Person {
  static gender = {
    MALE: "MALE",
    FEMALE: "FEMALE",
    NO_BINARY: "NO_BINARY",
  };
  constructor(first, last, age, gender, interests) {
    this.name = {
      first,
      last,
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
  }
  greeting() {
    console.log(`Hi! I'm ${this.name.first}`);
  }
  farewell() {
    console.log(`${this.name.first} has left the class room. Bye!`);
  }
}
class Teacher extends Person {
  static subjects = {
    JavaScript: "JavaScript",
    Node: "Node",
  };
  constructor(first, last, age, gender, interests, subject) {
    super(first, last, age, gender, interests);
    this._subject = subject;
  }
  get subject() {
    return this._subject;
  }
  set subject(newSubject) {
    if (!Object.values(Teacher.subjects).includes(newSubject)) {
      throw new Error(
        `Teacher Error: type of subject ${newSubject} not implemented`
      );
    }
    this._subject = newSubject;
  }
}
const monica = new Person("Monica", "Cortés", 24, Person.gender.FEMALE, [
  "Design",
]);
const ivan = new Teacher(
  "Iván",
  "Zamarro",
  30,
  Person.gender.MALE,
  ["Bikes"],
  Teacher.subjects.JavaScript
);
ivan.greeting();
//Ejercicio Pokemon Roger
class Pokemon {
  static plant = "plant";
  static water = "plant";
  static fire = "fire";
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  attack() {
    return this.type;
  }
}
class PlantPokemon extends Pokemon {
  constructor(name, type) {
    super(name, type);
  }
  resistance(attack) {
    return attack === "fire" ? "You loose" : "you win"
  }
}
class FirePokemon extends Pokemon {
  constructor(name, type) {
    super(name, type);
  }
  resistance(attack) {
    return attack === "water" ? "You loose" : "you win";
  }
}
class WaterPokemon extends Pokemon {
  constructor(name, type) {
    super(name, type);
  }
  resistance(attack) {
    return attack === "plant" ? "You loose" : "you win";
  }
}

//Ejercicio Pokemon

class Pokemon {
  static evolutionPhase = {
    Primera: "Primera",
    Segunda: "Segunda",
    Tercera: "Tercera",
  };

  static type = {
    grass: "grass",
    fire: "fire",
    water: "water",
    electric: "electric",
    ground: "ground",
  };


  constructor(name, evolution, level) {
    this.name = name;
    this.evolution = evolution;
    this.level = level;
  };


}


class FirePokemon extends Pokemon {
  constructor(name, evolution, level, type) {
    super(name, evolution, level);
    this.type = type;

  };

}

const charmander = new Fire


//Ejercicio Banco Ivan
class BankAccountError extends Error {
  constructor() {
    super("BankAccount error");
  }
}
class BankAccount {
  constructor() {
    this._open = false;
    this._balance = 0;
  }
  open() {
    if (!this._open) {
      this._open = true;
    }
  }
  close() {
    if (this._open) {
      this._open = false;
    }
  }
  deposit(amount) {
    if (!this._open || amount < 0) {
      throw new BankAccountError();
    }
    this._balance += amount;
  }
  withdraw(amount) {
    if (!this._open || amount < 0 || this._balance < amount) {
      throw new BankAccountError();
    }
    this._balance -= amount;
  }
  get balance() {
    if (!this._open) {
      throw new BankAccountError();
    }
    return this._balance;
  }
}
//Ejercicio cuenta bancaria


class BankAccount {

  static movement = {
    open: "open",
    close: "close",
    widthdraw: "widthdraw",
    deposit: "deposit"
  }

  constructor(dni, password, calle, cp, movement) {
    this.dni = dni;
    this.password = password;
    this.calle = calle;
    this.cp = cp;
    this.movement = movement;
  };


  open() {
    return
  }






}
