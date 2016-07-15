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
// Description: Browser-based calendar program for keeping track of things
//
// Entity: Calendar Month
// Attributes: number of days in month, dates of days
// Methods: add appointment to calendar, cancel appointment,
// Answer Ends Here
//
// Entity: Appointment
// Attributes: title, time, description, whether there is an active reminder set, reminder time
// Methods: add reminder, reminder alert, mark reminder complete

// 2. Create an object literal that lines up with the following `owner` entity description.
// Store it in the variable below. Be sure to give it reasonable values for each
// of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
let owner = {
  name:'Gabe Scarbrough',
  address: '26 Malcolm Circle, Taunton, MA, 02780',
  numberOfPets: 0
};

// 3. Create an object literal that lines up with the following `pet` entity description.
// Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer
let pet = {
  name: 'Max',
  species: 'dog',
  breed: 'Schnauzer',
  vocalization: 'bark',
  vocalize: function(){
    return 'bark';
  }
};

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function(name, species, breed, vocalization) {
  this.name = name;
  this.species = species;
  this.breed = breed;
  this.vocalization = vocalization;
};

// 5. Attach a `vocalize` method to the Pet's prototype.

/* your answer here */
  const vocalize =  function(){
    return 'bark';
  };

  Pet.prototype.vocalize = vocalize;
// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet
};
