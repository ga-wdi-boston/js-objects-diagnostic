"use strict";
/////////////////////////////////////////////////////////////

///////////////////////// Challenge /////////////////////////

/////////////////////////////////////////////////////////////

// Write your answers inside this file, at the places where it's indicated by the comments.

// 1. Suppose that we wanted to create a browser-based calendar program for keeping track of things. In comments, list at least three reasonable abstractions that you might use to build this program; for each abstraction, list out at least two properties and behaviors that it would make sense for that abstraction to have. Below is an example - please write your answer in the same format.
  // 'Car'
  // Description: Our app manages car sales.
  // Every 'car' has
  // - a make
  // - a model
  // - a year
  // Every 'car' can
  // - drive
  // - brake
  // - park

// Answer Starts Here

// 'Calendar'
// Description: our app uses a calendar to keep track of appointments.

// Every 'calendar' can
// - set busy/free status
// - invite another person to an appointment


// Every 'calendar app' has
// - blocks of time
// - appointments
// - links to external calendars

// Each 'block of time' has
// - a minute
// - an hour
// - a day
// - a month
// - a year

// Each 'appointment' has
// - has a 'block of time assignment'
// - a 'name'
// - a 'location'


// Answer Ends Here

// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address

// Answer Starts Here
var pet_owner = {
  name : "Jeff Horn",
  address : "51 Melcher St, Boston, MA 02110"
};
// Answer Ends Here

// 3. Create an Object literal that lines up with the following description. Store it in the variable `some_pet`, below.

  // Pet
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'pet' has:
  // - a name
  // - a species
  // - a breed
  // - a noise that it can make (e.g. 'bark', 'meow', etc.)
  // Every pet can:
  // - make noise (each pet makes its own unique noise, as specified by `noise`.


// Answer Starts Here

  // this is correct syntax of an object literal, yes?
  // I believe last time, I was (mistakenly) mixing up constructor syntax
  // vs. object literal syntax. I think seeing the 'Pet' on line 69 confused me
  // a bit when trying to understand the question
  var some_pet = {
    name : "Fluffy",
    species : "cat",
    breed : "Norwegian Forest",
    noise : "meow",
    makeNoise : function(noise) {
      // changed from console.log to return because
      return this.noise;
  }
};
// Answer Ends Here

// 4. Create a constructor function for Pet objects, as described above. The constructor function should be responseible for setting
//    the values of `name`, `species`, `breed`, and `noise`. The constructor function should also give each pet a method called `makeNoise`,
//    which behaves as described in Q3.

// Answer Starts Here

// is this the correct syntax? I know convention is to use a capital letter to begin the constructor name
// however, I'm not finding consistent documentation on whether I need to begin with 'var Pet =' or if
// I can simply write 'function Pet([parameters here]){}'
var Pet = function Pet(name, species, breed, noise) {
  this.name = name;
  this.species = species;
  this.breed = breed;
  this.noise = noise;
};

// remember, if you are assigning a method inside a Constructor
// it's best practice to create it as a Constructor prototype method
Pet.prototype.makeNoise = function(noise) {
  return this.noise;
};
// Answer Ends Here

module.exports = {
  answerTwo: pet_owner,
  answerThree: some_pet,
  answerFour: Pet
};

/////////////////////////////////////////////////////////////

// You're done! Refer back to README.md.

/////////////////////////////////////////////////////////////
