'use strict';

// Write your answers inside this file, at the places where it's indicated by the comments.

// 1. Suppose that we wanted to create a browser-based calendar program for
// keeping track of things. Identify at least two entites such a program might
// need and describe attributes and methods of each.
//
// EXAMPLE
// Description: Our app manages car sales.
// Entity: Car
// Attributes: make, model, year
// Methods: drive, brake, park
//
// Entity: SalesPerson
// Attributes: name, commissionRate
// Methods: sell, call

// Answer Starts Here
// Description: browser-based calendar program
//
// Entity: User
// Attributes: Schedule, Calendar,
// Methods: addEventToSchedule

// Entity: Day
// Attributes: Date, Events
// Methods: isToday, isPast

// Entity: Event
// Attributes: Date, Description
// Methods: alarm, isPast, didAttend

// Answer Ends Here




// 2. Create an object literal that lines up with the following `owner` entity description.
// Store it in the variable below. Be sure to give it reasonable values for each
// of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
let owner = {
  name: 'Daniel Raine',
  address: '11 Grey St.',
  numberOfPets: 0
};

// 3. Create an object literal that lines up with the following `pet` entity description.
// Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer
let pet = {};
pet.name = 'Eric Idle';
pet.species = 'snake';
pet.breed = 'Python';
pet._vocalization = 'ssscriptsss';
pet.vocalize = function() {
  return pet._vocalization;
};


// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function(name, species, breed, vocalization) {
  this.name = name;
  this.species = species;
  this.breed = breed;
  this._vocalization = vocalization;
};

// 5. Attach a `vocalize` method to the Pet's prototype.
Pet.prototype.vocalize = function() {
  return this._vocalization;
};

let snek = new Pet('Severus', 'snake', 'Corel', 'sssvgsss');
console.log(snek.vocalize());

// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet
};
