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
Description: Calendar program for tracking your events.
Entity: date
Attributes: year, month, day, hour
Methods: add event

Entity: event
Attributes: where, who, notes, time length, repeat (weekly or daily)
Methods: edit event, delete event, forward event (to message or email)
// Answer Ends Here

// 2. Create an object literal that lines up with the following `owner` entity description.
// Store it in the variable below. Be sure to give it reasonable values for each
// of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
let owner = {
  name: 'Drew Murphy',
  address: '100 El Cajon Boulevard, San Diego, CA 92810',
  numberOfPets: 2
};

// 3. Create an object literal that lines up with the following `pet` entity description.
// Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer
let vocalize = function (sound) {
  console.log(sound);
}

let pet = {
  name: 'Mirah',
  species: 'Canis Felis',
  breed: 'Common Housecat',
  vocalization: vocalize(),
};

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

/* Your answer here */
const Pet = function(name, species, breed, sound) {
  this.name = name;
  this.species = species;
  this.breed = breed;
  this.vocalization = sound;
};

// 5. Attach a `vocalize` method to the Pet's prototype.

/* your answer here */
Pet.prototype.vocalize = function() {
  console.log(this.vocalization);
};

// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet
};
