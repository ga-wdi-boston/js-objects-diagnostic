'use strict';

//Comfort: 3
//Clarity: 3

//I used Google and my class notes to help with this diagnostic.

//Write your answers inside this file, at the places where it's indicated by
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

/* Answer Starts Here:

Description:  Our app keeps track of events.

Entity:  Day
Attributes:  year, day, month
Methods:  addEvent, cancelEvent, viewAllEvents, conflictWithOtherEvent

Entity:  Event
Attributes:  titleEvent, locEvent, timeStart, timeEnd
Methods:  updateEvent, createEvent, deleteEvent

 Answer Ends Here */

// 2. Create an object literal that lines up with the following `owner` entity
// description. Store it in the variable below. Be sure to give it reasonable
// values for each of its properties.
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
let owner = new Owner()
owner.name = 'Seymore'
owner.address = 'Little Shop of Horros Lane'
owner.numberOfPets = 1


// 3. Create an object literal that lines up with the following `pet` entity
// description. Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer
let pet = new Pet()
pet.name = 'Barbra Ann'
pet.species = 'kitty'
pet.breed = 'Tortoiseshell'
pet.vocalization = 'muh muh muh muh muh muh meow'

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function (name, species, breed, vocalization) {
  this.name = name
  this.species = species
  this.breed = breed
  this.vocalization = vocalization
}

// 5. Attach a `vocalize` method to the Pet's prototype.  The `vocalize` method
// should return the pet's vocalization attribute.

Pet.prototype.vocalize = function () {
  let noise = this.vocalization
  }
  return noise
}

// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet,
}
