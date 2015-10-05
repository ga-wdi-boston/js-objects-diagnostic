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

// 'One-Time Event'
//Description: Our app reminds users of upcoming one-time events.
// Every 'one-time event' has
// - a date/time
// - a location
// - a type (party? appointment?)
// Every 'one-time event' can
// - start
// - end

// 'Ongoing Event'
//Description: Our app keeps tracks of ongoing events
// Every 'ongoing event' has
// - a start date
// - an end date
// - a type (exhibit? class?)
// Every 'ongoing event' can
// - extend
// - end
// - start

// 'Alarm'
// Description: Our app can set off an alarm for no specified event, only at a specified time
//Every 'alarm' has
// - a tone
// - a time
// - a snooze option (yes or no)
// Every 'alarm' can
// - sound
// - snooze
// - repeat (every day, every Monday, etc.)



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
  name: 'Caroline',
  address: '43 Linnaean St'
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
  name: 'Claire',
  species: 'dog',
  breed: 'Rottweiler',
  noise: 'Bark',
  makeNoise: f() {
    return 'Bark!'
  }
}

// Answer Ends Here

// 4. Create a constructor function for Pet objects, as described above. The constructor function should be responseible for setting
//    the values of `name`, `species`, `breed`, and `noise`. The constructor function should also give each pet a method called `makeNoise`,
//    which behaves as described in Q3.

var Pet;
// Answer Starts Here

var Pet = {
  name: 'Claire',
  species: 'dog',
  breed: 'Rottweiler',
  noise: 'Bark',

makeNoise: function (){
  return noise;
}
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
