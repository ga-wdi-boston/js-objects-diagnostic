'use strict'

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
/* The browser-based calendar would want to have:
Entity1: Event
Attributes: time, date, description
methods: Set Alarm/ reminder, change items to complete, delete items

Entity2: User
Entity: username, email address
methods: Sent event info to users email address, abiiltity to invite or add other users
*/
// Answer Ends Here

// 2. Create an object literal that lines up with the following `owner` entity
// description. Store it in the variable below. Be sure to give it reasonable
// values for each of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
const owner = {
  name: 'Nora',
  address: '1121 Grant Street, NYC',
  numPets: 4
}

// 3. Create an object literal that lines up with the following `pet` entity
// description. Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer
const pet = {
  name: 'Buster',
  species: 'cat',
  breed: 'unknown',
  vocalization: 'meows',
  vocalize: function() { return console.log(this.vocalization)}
}
//console.log(pet)
//console.log(pet.vocalize())

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function (petName, petSpecies, petBreed, petVocalization) {
 this.name = petName
 this.species = petSpecies
 this.breed = petBreed
 this.vocalization = petVocalization
}
//let meow = new Pet('m', 's', 's', 't')
//console.log(meow)

// 5. Attach a `vocalize` method to the Pet's prototype.  The `vocalize` method
// should return the pet's vocalization attribute.

/* your answer here */
Pet.prototype.vocalize = function () {
  const vocalize = this.vocalization
  return vocalize
};

//console.log(meow.vocalize())

// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet
}
