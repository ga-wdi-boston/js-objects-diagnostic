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

Calendar Program:
Entity: Current year
Attributes: days, months, time
Methods: switch calendar outlook, select days/months/time, input descriptions

entity: Events
Attribute: description, day, time, list of attendees,
Methods: invite, add, delete

// 2. Create an object literal that lines up with the following `owner` entity description.
// Store it in the variable below. Be sure to give it reasonable values for each
// of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
let owner = {
  name: 'Mark',
  address: '51 Melcher Street',
  numberofPets: 32,
}

// 3. Create an object literal that lines up with the following `pet` entity description.
// Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer
let pet = {
  name: 'McFluff Boo',
  species: 'monkey',
  breed: 'capuchins',
  vocalization: 'ow!',
  vocalize: function () {
    return this.vocalization;
  },
}

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function(name, species, breed, vocalization) {
  this.name = 'McFluff Boo',
  this.species = 'monkey',
  this.breed = 'capuchins',
  this.vocalization = 'ow!',
};

// 5. Attach a `vocalize` method to the Pet's prototype.

let bestFriend = new Pet ('McFluff Boo', 'monkey','capuchins','ow!')

pet.prototype.vocalize = function () {
  return this.vocalization;
}

// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet
};
