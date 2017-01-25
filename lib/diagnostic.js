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

// Description: Calendar app to keep track of things.
// Entity: User
// Attributes: name, email, address
// Methods: Output of what the user did on a specific date.
//
// Entity: Date
// Attributes: date,
// Method: What needs to be done on each date, update to do list.


// 2. Create an object literal that lines up with the following `owner` entity
// description. Store it in the variable below. Be sure to give it reasonable
// values for each of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets
const Owner = {
    name: 'Aneela',
    address: '1 Devonshire Pl',
    numberOfPets: 0,
};
console.log(Owner.name);


// 3. Create an object literal that lines up with the following `pet` entity
// description. Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize
let Pet = {
  name: 'Ted',
  species: 'dog',
  breed: 'dalmation',
  vocalization: 'loud',
  }

// Replace null with your answer
// let pet = null;

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function () {
  /* Your answer here */
};

// 5. Attach a `vocalize` method to the Pet's prototype.  The `vocalize` method
// should return the pet's vocalization attribute.

/* your answer here */

// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet,
};
