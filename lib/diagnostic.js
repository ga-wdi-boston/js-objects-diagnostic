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
// const calender =
// {
// 	namePerson :
// 		dateEntered: "1234-56-78";
// 		task: " ";
// 		enddate: "8765-43-21";
// 		calculateEndDate();
// 	namePerson :
// 		date: "1234-56-78";
// 		task: "";
// 		endDate: "8765-43-21";
// 		calculateEndDate();
// }
// Answer Ends Here

// 2. Create an object literal that lines up with the following `owner` entity description.
// Store it in the variable below. Be sure to give it reasonable values for each
// of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
let owner =
{
  name: "suja";
  address: "";
  pets:[ "dog" ];
  numberOfPets() = function()
  {
    return this.pets.length;
  }
};

// 3. Create an object literal that lines up with the following `pet` entity description.
// Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer
let pet =
{
    name: "Boogie";
    species: "dog";
    breed: "pom";
    vocalization: "bow bow";
    vocalize = function()
    {
      return this.vocalization;
    }
};

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function( name, species, breed, vocalization )
{
  name = this.name;
  species - this.species;
  breed = this.breed;
  vocalization = this._vocalization;
};

// 5. Attach a `vocalize` method to the Pet's prototype.

Pet.prototype.vocalize()
{
  return this._vocalization;
}
// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet,
};
