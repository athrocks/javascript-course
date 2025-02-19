// Object
// A javaScript object is an entity having state and behavior (properties and method).

const student = {
  fullName: "Atharva Pardeshi",
  cGpA: 8.87,
  printCgPa: function () {
    console.log("cGpA are", this.cGpA);
  },
};

console.log(student.printCgPa());

// Prototypes
// JS objects have a special property called prototype.
// We can set prototype using __proto__

const employee = {
  // calcTax : function() {
  //     console.log("tax rate is 10%");
  // },

  // below is another way to write fucntion in object
  calcTax() {
    console.log("tax rate is 10%");
  },
};

const atharva = {
  salary: 39000,
};

atharva.__proto__ = employee;

console.log(atharva.calcTax());

const aditya = {
  salary: 49000,
  calcTax() {
    console.log("tax rate is 30%"); // original function preffered
  },
};

aditya.__proto__ = employee;

console.log(aditya.calcTax());

// Classes
// Class is a program-code template for creating objects.

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  printCar() {
    console.log(this.make, this.model, this.year);
  }
}

const car1 = new Car("Honda", "City", 2020);
car1.printCar();

const car2 = new Car("Maruti", "Swift", 2019);
car2.printCar();

// Inheritence
// inheritance is passing down properties & methods from parent class to child class.

class Parent {
  constructor(name) {
    this.name = name;
  }

  printName() {
    console.log(this.name);
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }

  printAge() {
    console.log(this.age);
  }
}

const child1 = new Child("Atharva", 21);
child1.printName();
child1.printAge();

// super Keyword
// The super keyword is used to call the constructor of its parent class to access the parent's
// properties and methods.

class AquaticSpecies {
  constructor(species) {
    this.species = species;
  }

  printSpecies() {
    console.log(this.species);
  }
}

class Fish extends AquaticSpecies {
  constructor(species, type) {
    super(species);
    this.type = type;
  }

  printType() {
    console.log(this.type);
  }
}

const fish1 = new Fish("Goldfish", "Freshwater");
fish1.printSpecies();
fish1.printType();

// Error handling
// Error handling is the process of catching errors in our code and taking appropriate action.

try {
  console.log("Hello World");
  throw new Error("This is an error");
} catch (err) {
  console.log(err);
}
