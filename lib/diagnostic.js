'use strict';

// Write your answers inside this file, at the places where it's indicated by the comments.

// 1. Suppose that we wanted to create a browser-based calendar program for
// keeping track of things. Identify at least two entites such a program might
// need and describe attributes and methods of each.
//

Description: browser-based Calendar //manages time and events over time

Entity: Year //time
Attributes: Month, Week, day //units of time
Method: display (by month week day),  //??is this a good example?

Entity: events //events
Attributes: Title, location, time  //coordinates of the events
Method: attend, cancel  //??  Is this a good example?
//Not sure about the Methods


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
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
let owner = (); {
  name: 'Ryan';
  address: '123 random st.';
  numberOfPets: 3;
}

//AHH!  this is where my brain freezes up.  Is this right?



// 3. Create an object literal that lines up with the following `pet` entity description.
// Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer
let pet = (); {
  name: 'Peter Fluffy Bottom';
  species: 'Rabbit';
  breed: 'Whatever rabbits are';
  vocalization: 'bark';
//I'm a little less confident now
  vocalize: function() {
    let vocalization = this.vocalization;
    return vocalization;
  }

};

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function (name, species, breed, vocalization) {
  this.name = name;
  this.species = species;
  this.breed = breed;
  this.vocalization = vocalization;
};

// 5. Attach a `vocalize` method to the Pet's prototype.

/* your answer here */

// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet,
};
