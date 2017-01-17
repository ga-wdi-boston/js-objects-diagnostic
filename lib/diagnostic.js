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
//Description: Browser that keeps track of things.
//Entity: Day
//Attributes: task, event
//Methods: addTask, removeTask, addEvent, removeEvent
//Entity: Month
//Attributes: numberOfDays // calendars are confusing to model
//Methods:
// Answer Ends Here

// 2. Create an object literal that lines up with the following `owner` entity description.
// Store it in the variable below. Be sure to give it reasonable values for each
// of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
let owner = {
	  name: 'Hannah',
	  address: '26 Drive Road',
	  numberOfPets: 1000, //she keeps ants
  };
// 3. Create an object literal that lines up with the following `pet` entity description.
// Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer
let pet = {
	  name: 'Dave',
	  species: 'ant',
	  breed: 'fire',
	  vocalization: 'ribbit'
  };

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function () {
  /* Your answer here */
};


const Pet = function (name, species, breed, vocalization) {
this.petName = name;
this.petSpecies = species;
this.petBreed = breed;
this.petVocalization = vocalization;
}

var johnPet = new Pet("John", "rabbit", "very fluffy", "bark");
new Pet("Sally", "eagle", "bald", "screech");

// 5. Attach a `vocalize` method to the Pet's prototype.

johnPet.name = function () {  // ran out of time, did not work sequentially

};

// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet,
};
