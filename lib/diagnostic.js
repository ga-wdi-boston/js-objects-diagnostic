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
// Entity: User
// Attributes: name, email, home timezone, events
// Methods: Events on a given day, events in a given week, time until next event, create new event, delete event, edit event
//
// Entity: Event
// Attributes: title, description, date, start time, end time, timezone, location
// Methods: (none)
// Answer Ends Here

// 2. Create an object literal that lines up with the following description.
// Store it in the variable below. Be sure to give it reasonable values for each
// of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
let owner = {
  name: 'Jen',
  address: '51 Melcher St, Boston MA 02210',
  numberOfPets: 3
};

// 3. Create an object literal that lines up with the following description.
// Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer
let pet = {
    {name: 'Lieam',
    species: 'rat',
    breed: 'fancy velveteen',
    },
    vocalize: function() {
      return "squeak"}
};

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function(name, species, breed) {
  this.name = name,
  this.species = species,
  this.breed = breed
};

// 5. Attach a `vocalize` method to the Pet's prototype.

User.Pet.prototype.vocalization() {
  if (this.breed === 'rat') {
    return "squeak";
  }
};

// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet
}
