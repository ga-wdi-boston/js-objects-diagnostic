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

// Description: Application which manages a calendar
// Entity: event
// Attributes: date, startTime, endTime, attendees
// Methods: newEvent, invitePeople
//
// Entity: contact
// Attributes: name, phoneNum, eMail
// Methods: inviteContact, tellYourFriends



// 2. Create an object literal that lines up with the following `owner` entity description.
// Store it in the variable below. Be sure to give it reasonable values for each
// of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
let owner = {
  name: 'Homer Simpson',
  address: '1136 Evergreen Terrace',
  numberOfPets: 2,
};

// 3. Create an object literal that lines up with the following `pet` entity description.
// Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer
let pet = {
  name: "Santa's Little Helper",
  species: 'dog',
  breed: 'greyhound',
  vocalization: '*bark!*',
  vocalize: function(
    return '*bark!*'
  );
};

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function() {
  this.name: "Santa's Little Helper",
  this.species: 'dog',
  this.breed: 'greyhound',
  vocalization: "*bark!*",
};

// 5. Attach a `vocalize` method to the Pet's prototype.

pet.prototype.vocalization = function (){
  result =  '*bark!*',
}
// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet
};
