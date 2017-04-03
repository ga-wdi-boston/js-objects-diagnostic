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
1)
//Description: browser-based calender program to log the user's daily activities
//Entity: Calender
//Attributes: user, day, week, month, year
//Methods: trackActivity,avgPerDay,avgPerWeek,avgPerMonth
2)
//Entity: user
//Attributes: user/loginProfile, age, name, email
//Methods: track, activityFrequency,

// Answer Ends Here

// 2. Create an object literal that lines up with the following `owner` entity
// description. Store it in the variable below. Be sure to give it reasonable
// values for each of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
const owner = {
  name: 'Brian',
  address: '60 Pleasant Street',
  numberOfPets: 0
}

// 3. Create an object literal that lines up with the following `pet` entity
// description. Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer
const pet = {
  name: 'Buba',
  species: 'Tiger',
  breed: 'unknown'
  vocalize: function(){
    return 'meow'
  }
}

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function (name, species, breed) {
  /* Your answer here */
  this.name = name
  this.species = species
  this.breed = breed
  this.vocalization = vocalization
}

// 5. Attach a `vocalize` method to the Pet's prototype.  The `vocalize` method
// should return the pet's vocalization attribute.

/* your answer here */

const Buba = new Pet('Buba', 'Tiger', 'unknown')

// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet
}
