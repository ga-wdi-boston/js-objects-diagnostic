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
// Entity: CalendarGrid
// Attributes: year, month, day, grid_size, theme
// Methods: switchMonth, switchWeek, switch, setTodo
//
// Entity: TodoList
// Attributes: todo_items = [[]], active
// Methods: addItem, removeItem, crossoutItem, setActive
// Answer Ends Here

// 2. Create an object literal that lines up with the following `owner` entity description.
// Store it in the variable below. Be sure to give it reasonable values for each
// of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
let owner = function(name, address, numberOfPets) {};

// 3. Create an object literal that lines up with the following `pet` entity description.
// Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer
let pet = function(name, species, breed, vocalization) {};

pet.prototype.vocalize = function() { };
console.log(pet.prototype);
// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function (name,species,breed,vocalization) {
  this.name = name;
  this.species = species;
  this.breed = breed;
  this.vocalization = vocalization;
};

// 5. Attach a `vocalize` method to the Pet's prototype.
Pet.prototype.vocalize = function() { return vocalization; };
// !!! PLEASE READ: After talking with Ben, we believe that the tests may not
//                  be entirely correct. The tests don't test, for example,
//                  if the object literal in Question 2 has a numberOfPets
//                  attribute. It also fails on things that should (to the best
//                  of my ability to read the spec) pass. Also, no where in
//                  any of the questions relating to pet or Pet does it say that
//                  the vocalize function should return a string- and if we are
//                  making a vocalize function it would make sense to have it
//                  return 'vocalization' (which I took to be the string).
//                  E.g. const doggy = new Pet('dog', 'wolf', 'hound', 'Bark!');
//
//                  If I am incorrect on any of the following please let me know
//                  as it is quite possible I am missing something.

// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet,
};
