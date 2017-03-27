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

Description: Browser-based calendar program for keeping track of things.
Entity: Calendar
Attributes:  time, day, week, month, year
Methods: search, save, import, export

Entity: Event
Attributes: location, invitee, note, attachment
Methods: alert, repeat, reminder

// Answer Ends Here

// 2. Create an object literal that lines up with the following `owner` entity
// description. Store it in the variable below. Be sure to give it reasonable
// values for each of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
let owner = {
  name: 'John Smith',
  address: '10 Main Street',
  numberOfPets: 2
}

// 3. Create an object literal that lines up with the following `pet` entity
// description. Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer

const useVocalization = function () {
  return vocalization
}

let pet = {
  name: 'Buddy',
  species: 'Dog',
  breed: 'Golden Retriever',
  vocalization: 'bark',
  vocalize: useVocalization
}

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function Pet (name, species, breed, vocalization) {
  this.name = name
  this.alias = alias
  this.breed = breed
  this.vocalization = vocalization
}

// 5. Attach a `vocalize` method to the Pet's prototype.  The `vocalize` method
// should return the pet's vocalization attribute.

const useVocalization = function () {
  return vocalization
}

// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet,
}
