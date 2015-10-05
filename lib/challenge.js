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

'Calendar'
Description: Our calendar program tracks activities, events and to-dos
every calendar has
  - hours
  - days
  - months
  - years
every calendar can
  - schedule appointments/events
  - list to-do activities
  - set an alert to notify you of an upcoming event

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
  name: 'Christine',
  address: '79 Chestnut St, Wilmington, MA 01887',
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

var some_pet;

// Answer Starts Here

var some_pets = () {
  name: 'DiDi',
  species: 'dog',
  breed: 'labrador/beagle mix',
  noise: [
    {
      happyNoise: 'bark',
      angryNoise: 'growl',
    }
  ],

}

// Answer Ends Here

// 4. Create a constructor function for Pet objects, as described above. The constructor function should be responseible for setting
//    the values of `name`, `species`, `breed`, and `noise`. The constructor function should also give each pet a method called `makeNoise`,
//    which behaves as described in Q3.

var Pet;
// Answer Starts Here

var Pet = function Pet(name, species, breed, noise) {
  this.name = name;
  this.species = species;
  this.breed = breed;
  this.noise = []];

};

Pet.prototype.makeNoise = function makeNoise () {
  var makeNoises = 0;
  for (var i = 0; i < this.noise.length; i++) {
    makeNoises += this.noise[i].noise;
  }
  return makeNoise;
};

// I ran out of time to figure this last question out.

// Answer Ends Here

module.exports = {
  answerTwo: pet_owner,
  answerThree: some_pet,
  answerFour: Pet
}

/////////////////////////////////////////////////////////////

// You're done! Refer back to README.md.

/////////////////////////////////////////////////////////////
