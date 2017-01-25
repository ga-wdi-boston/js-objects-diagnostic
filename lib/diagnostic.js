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
// Description: The person that the personal calendar belongs to
// Entity: User
// Attributes: name, religion, job
// Methods: add events, create profile
//
// Description : Mark Users’ religious holidays
// Entity: Special day’s/ occasions
// attributes: religion, calendar, icons/images, holiday names
// methods: choose religion/denomination
//
// Answer Ends Here

// 2. Create an object literal that lines up with the following `owner` entity
// description. Store it in the variable below. Be sure to give it reasonable
// values for each of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
let owner = {
  entity: 'pet owner',
	name = 'Ted',
	address: '123 Fake Street',
	numberOfPets: 5
};

// 3. Create an object literal that lines up with the following `pet` entity
// description. Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer
let pet = {
  entity: 'animal',
  name: 'Raul',
  species: 'dog',
  breed: 'Shiba Inu',
  vocalization: 'barks',
  vocalize: function(){
    this.vocalization = 'loudly';
  }
};
// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const vocalization = function(){
  return this._vocalize;
};

const Pet = function (name, species, breed, vocalization) {
  this.name = name;
  this.species = species;
  this.breed = breed;
  this.vocalize = vocalize;
  this._vocalization = vocalization;
};

// 5. Attach a `vocalize` method to the Pet's prototype.  The `vocalize` method
// should return the pet's vocalization attribute.

/* your answer here */

Pet.prototype.vocalize = function(){
  return this._vcoalization;
};

// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet,
};
