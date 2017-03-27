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

/* Answer Starts Here

Calendar Tracker Web App
Entity: calendar
Attributes: calendar name, calendar user name, items (array)
Methods (or prototype?): number of items

Entity: Tracked Item
Attributes: item name, track date start, track date end
Methods (or prototype?): Logging new item, calculate days of tracking,
calculate days until tracking ends
Answer Ends Here */

// 2. Create an object literal that lines up with the following `owner` entity
// description. Store it in the variable below. Be sure to give it reasonable
// values for each of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
let owner = {
name: 'General Assembly',
address: '125 Summer Street, Boston, MA',
numberOfPets: 28
}

// 3. Create an object literal that lines up with the following `pet` entity
// description. Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer

let pet = {
  name: 'doggy',
  species: 'canine',
  breed: 'labradoodle',
  vocalize: function () {
    let bark = console.log('woouuaafuh')
    return bark
  }
}

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function (name, species, breed) {
  this.name = name
  this.species = species
  this.breed = breed
  this.vocalize = function () {
    let bark = console.log('woouuaafuh')
    return bark
  }
};

// 5. Attach a `vocalize` method to the Pet's prototype.  The `vocalize` method
// should return the pet's vocalization attribute.

/* your answer here */
Pet.prototype.vocalize = function () {
  let bark = console.log('woouuaafuh')
  return bark
}

// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet,
};
