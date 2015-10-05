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

//1. 'Apointment'
//Description: Our app helps manage your apointments by time.
//Every 'Apointment' has:
// - a date
// - a time
// - a location
// - a name
//Every 'Apointment' can:
// - check for conflicts
// - send reminders via email

//2. 'Birthday'
//Description: Our app tracks birthdays so we don't forget them
//Every 'Birthday' has:
// - a date
// - a time
// - a name
//Every 'Birthday' can:
// - send reminder in advance
// - calculate person's new age

//3. 'user'
//Description: Our app allows multiple users to view the calendar
//Every 'user' has:
// - username
// - email
//Every 'user' can:
// - limit their visibility
// - determine other users' availability

// Answer Ends Here


// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address

var pet_owner;

// Answer Starts Here
var pet_owner = {
  name: 'Chris',
  address: '241 N Mtn Rd, Dalton MA 01226'
}
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

var some_pet;

// Answer Starts Here
var some_pet = {
  name: 'Natty',
  species: 'yellow lab',
  breed: 'pure',
  noise: 'bark',
  makeNoise: function (){
    return this.noise;
  }
}
// Answer Ends Here

// 4. Create a constructor function for Pet objects, as described above. The constructor function should be responseible for setting
//    the values of `name`, `species`, `breed`, and `noise`. The constructor function should also give each pet a method called `makeNoise`,
//    which behaves as described in Q3.

var Pet;
// Answer Starts Here
var Pet = function (name, species, breed, noise){
  this.name = name;
  this.species = species;
  this.breed = breed;
  this.noise = noise;
}

Pet.prototype.makeNoise = function (){
    return this.noise;
  }

// Answer Ends Here

module.exports = {
  answerTwo: pet_owner,
  answerThree: some_pet,
  answerFour: Pet
}

/////////////////////////////////////////////////////////////

// You're done! Refer back to README.md.

/////////////////////////////////////////////////////////////
