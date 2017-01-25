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
// Entity: User
// Attributes: name, email,
// Methods:
//
// Entity: Week 1
// Attributes: wake up time, time it takes to get ready, time to go to work
// Methods:
//
// Entity: Weekend 1
// Attributes: time to go to birthday party, time to study
// Methods:
//
// I understand that methods are what the entity 'does' but I'm not really
// what to put here
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
  name: 'John Doe',
  address: '707 S Monroe st',
  numberOfPets: 5,
};

// 3. Create an object literal that lines up with the following `pet` entity
// description. Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer
let pet = {
  name: 'Majin Buu',
  species: 'dog',
  breed: 'mutt',
  vocalization: 'bark',
    let vocalize = function () {
      if (excited) {
        console.log('bark');
      }
    }
};
// I know there are errors here, but methods are a little confusing to me still
//
// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function (name, breed, vocalization) {
  name: 'name',
  breed: 'breed',
  vocalization: 'vocalization',
};

// 5. Attach a `vocalize` method to the Pet's prototype.  The `vocalize` method
// should return the pet's vocalization attribute.

let Pet = function(name, breed, vocalize)

Pet.prototype.vocalization(vocalize)
//I don't think this is right
//
// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet,
};
