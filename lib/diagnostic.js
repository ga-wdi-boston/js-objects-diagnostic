'use strict';

// Write your answers inside this file, at the places where it's indicated by the comments.

// 1. Suppose that we wanted to create a browser-based calendar program for
// keeping track of things. Identify at least two entites such a program might
// need and describe attributes and methods of each.

  Years : months - weeks | days | hours | capturing leap years
  Reminders : Reminder Name : set location : Date time : With Contacts : Additional notes
  Access Date from calendar
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
//
// Answer Ends Here

// 2. Create an object literal that lines up with the following `owner` entity description.
// Store it in the variable below. Be sure to give it reasonable values for each
// of its properties.
//
Entity: Chef
Attributes: Gordon Ramsey, 1 london st, 3 kids, 11 restaurants

// Replace null with your answer
let owner = "Gordon Ramsey";

// 3. Create an object literal that lines up with the following `pet` entity description.
// Store it in the variable `pet`, below.

Entity: Pet
Attributes: Fido, dog, bull-terrier, bark
Methods: 'barks at cats in the neighborhood'

// Replace null with your answer
let pet = Fido;

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function() {
  return this.pet = pet;
};

// 5. Attach a `vocalize` method to the Pet's prototype.

const Pet = function() {
  return this.bark = bark;
}
// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet
};
