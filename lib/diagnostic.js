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

The calendar could have a month entity and a day entity. Month would have to
have the total number of days in a each month and what day of the week the month
starts on. Day entity would have attribute of national holiday or not. The day
could also have a method to add an event.

// 2. Create an object literal that lines up with the following `owner` entity description.
// Store it in the variable below. Be sure to give it reasonable values for each
// of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
let owner = {
  name: 'Joey McPet',
  address: '123 Cathouse St. Woofville, MA',
  numberOfPets: 21
};

// 3. Create an object literal that lines up with the following `pet` entity description.
// Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer
let pet = {
  name: 'sparky',
  species: 'canine',
  breed: 'corgie',
  vocalization: 'woof',
  // vocalize: function (){
  //   return this.vocalization;
  //  commented this out when I added the method prototype deal
  // }
};

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function(name, species, breed, vocalization) {
  this.name = name;
  this.species = species;
  this. breed =  breed;
  this.vocalization = vocalization;
  this.vocalize = vocalize;
};


// 5. Attach a `vocalize` method to the Pet's prototype.

const vocalize = function(){
  return this.vocalization;
};

Pet.prototype.vocalize = vocalize;

// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet
};
