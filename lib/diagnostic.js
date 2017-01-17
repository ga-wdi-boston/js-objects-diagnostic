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

/* Answer Starts Here

Description: calendar app for keeping track of things
Entity: Day
Attributes: date, dayOfWeek, events, holiday
Methods: addEvent(event), isBusy(time), isHoliday()

Entity: Event
Attributes: name, time, location, notes, reoccuring
Methods: remove, addNote(note), changeTime(time), changeLocation(location), setRecurrence

Answer Ends Here */

// 2. Create an object literal that lines up with the following `owner` entity description.
// Store it in the variable below. Be sure to give it reasonable values for each
// of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
let owner = {
  name: "Jesse Ellis",
  address: "1000 Hope St, Providence, RI",
  numberOfPets: 1,
};

// 3. Create an object literal that lines up with the following `pet` entity description.
// Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer
let pet = {
  name: "Isla",
  species: "canine",
  breed: "boston terrier/pit",
  vocalization: "Woof!",
  vocalize: function() {
    return this.vocalization;
  }
};

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

class Pet {
  constructor(name, species, breed, vocalization) {
    this.name = name;
    this.species = species;
    this.breed = breed;
    this.vocalization = vocalization;
  }
  vocalize() {
    return this.vocalization;
  }
}

// 5. Attach a `vocalize` method to the Pet's prototype.
/*
Answer: Method created in question #4
*/
// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet,
};
