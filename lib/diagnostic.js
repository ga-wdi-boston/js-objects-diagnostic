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

Description: Our app is a browser based calender to manage acitivities
Entity: calender
Attributes: date (month, day, possibly time)-- these will be achieved using an
object constructor, as the dates/times will constantly change.
Methods: the acitivities needed will be added as methods to be applied to the
applicable dates etc e.g methods: (workouts, appointments).

// Answer Ends Here

// 2. Create an object literal that lines up with the following `owner` entity
// description. Store it in the variable below. Be sure to give it reasonable
// values for each of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets
// Replace null with your answer
const owner = {
  name: 'spencer',
  address: '40 Mullin Ave Quincy MA 02169',
  numberOfPets: 2,
  coolnessOfPets: 10
}

// 3. Create an object literal that lines up with the following `pet` entity
// description. Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer
const pet = {
  name: 'Leeroy',
  species: 'dog',
  breed: 'pitbull/shepard mix',
  vocalization: function() {
    console.log('woof, I am the best dog ever')
  }
}

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function () {
  this.name = name
  this.species = species
  this.breed = breed
  this.vocalization = vocalization
   }
}

// 5. Attach a `vocalize` method to the Pet's prototype.  The `vocalize` method
// should return the pet's vocalization attribute.

/* your answer here */
pet.prototype.vocalize = function() {
    console.log(this.vocalization);
// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet
}
