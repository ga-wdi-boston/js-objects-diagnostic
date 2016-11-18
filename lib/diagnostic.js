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

Entity: Cal
Attributes: month, day, year
Methods: count, add

// Answer Ends Here

// 2. Create an object literal that lines up with the following `owner` entity description.
// Store it in the variable below. Be sure to give it reasonable values for each
// of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
let owner = {
  name: "Madlyn",
  address: "Bristol",
  numberOfPets: 2
}

// 3. Create an object literal that lines up with the following `pet` entity description.
// Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer
let Pet = {
  name: "Tuka",
  species: "canine",
  breed: "Whippet mix",
  vocalization: "bark",
  vocalize: function (){
    console.log("bark")
  }
}



// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function () {
  name: "Tuka",
  species: "canine",
  breed: "Whippet mix",
  vocalize();
};

class Pet {
  constructor(name, species, breed) {
    this.name = name;
    this.species = species;
    this.breed = breed;
  }
  vocalize(){
    this.vocalize =
    console.log("bark")
  }

// 5. Attach a `vocalize` method to the Pet's prototype.

/* your answer here */

// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet,
};
