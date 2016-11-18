'use strict';

// Write your answers inside this file, at the places where it's indicated by the comments.

// 1. Suppose that we wanted to create a browser-based calendar program for
// keeping track of things. Identify at least two entites such a program might
// need and describe attributes and methods of each.

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
Calendar would be my object
The entities:
Month - the attributes of the month would be the type of month: Jan, Feb, Mar, etc... (Strings)
Day - the day of the Month (numbers as strings)
Year - the year 


class Calendar
	constructor("day", "month", "year")

	Description: Our browser based calendar shows me the day, month, and year on screen.
	Entity: Calendar
	Attributes: day, month, year
	Methods: goTomonth, goToday, goToyear

	Entity: AppointmentOn
	Attributes: date, time
	Methods: alert

// Answer Ends Here

// 2. Create an object literal that lines up with the following `owner` entity description.
// Store it in the variable below. Be sure to give it reasonable values for each
// of its properties.
//
// Entity: Owner
// Attributes: name, address, numberOfPets

// Replace null with your answer
let owner = {
	name: "Julie",
	address: "1251 Dover Avenue",
	numberOfPets: 2
};

// 3. Create an object literal that lines up with the following `pet` entity description.
// Store it in the variable `pet`, below.

// Entity: Pet
// Attributes: name, species, breed, vocalization
// Methods: vocalize

// Replace null with your answer
let pet = {
	name: "Pascal",
	species: "Dog",
	breed: "Pug",
	vocalization: "Bark",

	vocalize: function ( {
		console.log(this.vocalization);
	}
}

// 4. Create a constructor function for pet objects, as described above. The
// constructor function should be responsible for setting the values of `name`,
// `species`, `breed`, and `vocalization`.

const Pet = function () {
  /* Your answer here */
};

// 5. Attach a `vocalize` method to the Pet's prototype.

/* your answer here */

// Don't change this
module.exports = {
  answerTwo: owner,
  answerThree: pet,
  answerFour: Pet,
};
