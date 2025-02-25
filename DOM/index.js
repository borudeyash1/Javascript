const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Inheritance in JavaScript using Prototypal Inheritance
  // In this example, we're creating a genericCar object that has properties and methods common to all cars.
  // Then, we're creating a tesla object that inherits from the genericCar object using Object.setPrototypeOf().

  let genericCar = {
    // Properties common to all cars
    engine: 1,
    wheels: 4,
    
    // Methods common to all cars
    drive() {
      console.log('Car is driving');
    }
  };

  // Create a tesla object with its own properties
  let tesla = {
    owner: 'Elon Musk',
    
    // We can also add methods specific to tesla
    charge() {
      console.log('Tesla is charging');
    }
  };

  // Set the prototype of tesla to genericCar
  // This allows tesla to inherit properties and methods from genericCar
  Object.setPrototypeOf(tesla, genericCar);

  // Now, tesla has access to properties and methods of genericCar
  console.log(tesla);        
  tesla.drive(); // Output: Car is driving
  tesla.charge(); // Output: Tesla is charging
  res.send('Server is running');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// Functional Constructor 
// Rules

function Person(name, age) {     // Characteristic - first upper case letter of the function name

  this.name = name;
  this.age = age;    // this is used in the Functional Constructor
}

function Car(make, model) {
  this.make = make;
  this.model = model;
}
let myCar = new Car('Ford', 'F150');
console.log(myCar.make); // Output: Ford
console.log(myCar.model); // Output: F150
console.log(myCar); // Output: Car { make: 'Ford', model: 'F150' }

// How to create an object from the constructor object
let myUser = new Person('John', 30);
console.log(myUser.name); // Output: John
console.log(myUser.age); // Output: 30
console.log(myUser); // Output: Person { name: 'John', age: 30 }

// What is the use of the new keyword: to create an object we need to use the new keyword
// Example:
function Tea(type) {
  this.type = type;
  this.describe = function() {
    return `This is a cup of ${this.type}`
  }
}

// Example:
function Animal(species) {
  this.species = species;
}
Animal.prototype.sound = function() {
  return `${this.species} makes a sound`
};

let dog = new Animal("Dog");
console.log(dog.sound()); // Output: Dog makes a sound

// Error handling code (basic)

function Drink(name) {
  if (!new.target) {
    throw new Error('Drink must be called with new keyword');
  }
  this.name = name;
}

let coffee = new Drink('Coffee'); // No error
try {
  let tea = Drink('Tea'); // Error: Drink must be called with new keyword
} catch (error) {
  console.log(error.message);
}