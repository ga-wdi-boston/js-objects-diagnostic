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

  // Description: A calender program that keeps track of things.
  // Entity: calender
  // Attributes: day, month, year
  // Method: None
  //
  // Entity: thing tracker
  // Attributes: name, location, timeout
  // Method: place events on calender

// 2. Create an object literal that lines up with the following description.
// Store it in the variable below. Be sure to give it reasonable values for each
// of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer

let owner = {
  name: 'Bob',
  address: '51 summer st',
  numberOfPets: 2
};


// 3. Create an object literal that lines up with the following description.
// Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer

let pet = {
  name: 'Sparky',
  species: 'Dog',
  breed: 'Pitbull',
  volcaliztion: function () {

    return 'Woof';

  };


// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function (name,species,breed) {
  this.name = name;
  this.species = species;
  this.breed = breed;
};

// 5. Attach a `vocalize` method to the Pet's prototype.

Pet.prototype.vocalization = function () {
    return 'The' + this.species + 'speaks by saying Woof!';
};

// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet
};
