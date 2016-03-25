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

// Entity: Day Block
// Attributes: date, name of Day, year
// methods: takes in the date, takes in the name of the day, takes in the year

// Entity: Events
// Attributes: personal, work, comments, name of event
// methods: decides personal or professional, write description, writes event names

// 2. Create an object literal that lines up with the following `owner` entity description.
// Store it in the variable below. Be sure to give it reasonable values for each
// of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
let owner = {
  name: "Bob",
  address: "51 State St",
  numberOfPets: 2
};

// 3. Create an object literal that lines up with the following `pet` entity description.
// Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer
let pet = {
  name: "Mr.Paws",
  species: "dog",
  breed: "Siberian Husky",
  vocalize: function(vocalization){
    let vocalization = "bark bark"
    return vocalization;
  }
};

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function(name, species, breed, vocalization) {
  this.name = name,
  this.species = species,
  this.breed = breed,
  this.vocalization = vocalization,
  this.vocalize = vocalize
};

// 5. Attach a `vocalize` method to the Pet's prototype.

const vocalize = function(){
  return this.vocalization,
}

// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet
};
