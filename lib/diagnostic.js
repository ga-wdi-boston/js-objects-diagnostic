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
Description: calander based program
Entity: newCalanderEntry
Attributes: date, time, nameOfEntry, peopleInvolved
Methods: deleted, edit, sendInvite.

Entity: occurance
Attributes: Repeat,
Methods: Birthday, Appointment, Reminder,
// Answer Ends Here

// 2. Create an object literal that lines up with the following `owner` entity description.
// Store it in the variable below. Be sure to give it reasonable values for each
// of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
let owner {
  name :'Brian',
  address: 'Somerville Ave',
  numberOfPets: 5
};

// 3. Create an object literal that lines up with the following `pet` entity description.
// Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer

const vocalize = function vocalize(){
  return ._vocalization;
};
let pet{
  name :'katya',
  speciies : 'dog',
  this.breed: 'husky',
  this._vocalization 'bark',
};

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const vocalize = function vocalize(){
  return this._vocalization;
};
const pet = function(name, species, breed, vocalization){
  this.name = name;
  this.speciies = species;
  this.breed= breed;
  this._vocalization = vocalization;
};
// 5. Attach a `vocalize` method to the Pet's prototype.

/* your answer here */

// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet
};
