'use strict';

// Write your answers inside this file, at the places where it's indicated by
// the comments.

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

Description: Our calendar helps Danny Ainge figure out whether he needs to make a trade at the trade deadline.
Entity: Boston Celtics, Danny Ainge
Attributes: roster, coach,
Methods: trade, release, sign

Entity: DannyAinge
Attributes: name, dateOfBirth, hometown, salary
Methods: trade, release, sign

Entity: BostonCeltics
Attributes: teamName, hometown
Methods: makePlayoffs

// Either the directions were not specific enough or my creativity in the morning is null. :(

// Answer Ends Here

// 2. Create an object literal that lines up with the following `owner` entity
// description. Store it in the variable below. Be sure to give it reasonable
// values for each of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
let owner = {
  name: 'Owner',
  address: '100 Liberty Way',
  numberOfPets: 2
};

// 3. Create an object literal that lines up with the following `pet` entity
// description. Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer
let pet = {
  name: 'Octavia',
  species: 'Gecko',
  breed: 'Leopard',
  vocalization: 'Moooooo'
};

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function ()
 {
  this.name = name
  this.species = species
  this.breed = breed
  this._vocalization = speak
};

// 5. Attach a `vocalize` method to the Pet's prototype.  The `vocalize` method
// should return the pet's vocalization attribute.

const speak = function () {
  return this.vocalization
}

// Does this function need to exist above the pet constructor in order to be called?

// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet,
};
