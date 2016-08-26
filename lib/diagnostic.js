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
//  Description: Browser-based calendar program
//  Entity: Calendar,
//  Attributes: currentDate, event
//  Methods: add new event, view upcoming events, view by week, view by month

//  Entity: Event,
//  Attributes: date, location, event name, event category (school, work, personal...)
//  Methods: Set reminder to alert user when event is near
// Answer Ends Here

// 2. Create an object literal that lines up with the following `owner` entity description.
// Store it in the variable below. Be sure to give it reasonable values for each
// of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
let owner = {
  name: 'Tuck',
  address: '49 M Street, Boston MA',
  numberOfPets: 2
};

// 3. Create an object literal that lines up with the following `pet` entity description.
// Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer
let pet = {
  name: 'Sammy',
  species: 'Dog',
  breed: 'Black Lab',
  vocalization: 'woof!'
};

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function (name, species, breed, vocalization) {
  this.name = name;
  this.species = species;
  this.breed = breed;
  this._vocalization = vocalization;
};

// 5. Attach a `vocalize` method to the Pet's prototype.

/* your answer here */

// no matter what I do, this is failing the grunt test saying that
// 'answerThree does not have a method `vocalize`'
// when I test it in node with the same code, calling `pet.vocalize()`
// it does indeed work and return a string, so I am baffled here!

Pet.prototype.vocalize = function () {
  return this._vocalization;
};

// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet
};
