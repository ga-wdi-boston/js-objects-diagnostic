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

// the function method 'drive' is calling the object 'car' and will print out the following attributes 'make, model, year'
const car = {
  make: 'Acura',
  model: 'TLX',
  year : 2017,
  drive: function () {
    return this.car;
  }
};
// the function method 'sell' is calling the object 'SalesPerson' and wil print out the following attributes 'name & and commisionRate'
const SalesPerson = {
  name: 'Pinaro Ouk',
  comissionRate: 5,
}
  sell: function () {
    retun this.SalesPerson;
  }
};
// Answer Ends Here

// 2. Create an object literal that lines up with the following `owner` entity
// description. Store it in the variable below. Be sure to give it reasonable
// values for each of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
const owner = {
  name: 'Pinaro Ouk',
  address: '125 Summer St',
  numberOfPets: 0
};
//

// 3. Create an object literal that lines up with the following `pet` entity
// description. Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer
const pet = {
  name: 'Kobe',
  speices: 'Dog',
  breed: 'Huskie',
  vocaliation: 'bark',
vocalize: function () {
  return this.pet;
}
};

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function (name, speices, breed, vocalization) {
  this.pet = name;
  this.speices = speices;
  this.breed = breed;
  this.vocalization = vocalization;
  /* Your answer here */
};

// 5. Attach a `vocalize` method to the Pet's prototype.  The `vocalize` method
// should return the pet's vocalization attribute.

/* your answer here */
pet.prototype.vocalize = function () {
  return this.vocalization;
};
// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet

}
