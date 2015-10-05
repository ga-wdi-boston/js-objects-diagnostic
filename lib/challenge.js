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
//'Spending Budget'
// has:
// - user info
// - total spent amount
// - categories of things spent on
// can:
// - keep track of spending on a daily basis.
// - keep track of how much money spent on each category.

//'Calories'
// has:
// - user info
// - meals
// can:
// - keep track of calories consumed each meal.
// - keep track of the total calories consumed in a day.

//'Trips'
// has:
// - user info
// - cost per trip
// - distance per trip
// can:
// - keep track of trips between 2 destinations.
// - keep track of total cost.
// Answer Ends Here

// 2. Create an Object literal that lines up with the following description. Store it in the variable 'pet_owner', below. Be sure to give it reasonable values for each of its properties.

  // 'Owner'
  // Description: We are making an app for a veterinary clinic - it manages pets' vaccinations.
  // Every 'owner' has:
  // - a name
  // - an address

var pet_owner = ;

// Answer Starts Here
var pet_owner = {
  name: "Leah Nguyen",
  address: "1850 Mass Ave, Cambridge, MA 02140"
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
  name: "Bianca",
  species: "K9",
  breed: "Bernese Mountain Dog",
  noise: "Woof"
}
// Answer Ends Here

// 4. Create a constructor function for Pet objects, as described above. The constructor function should be responseible for setting
//    the values of `name`, `species`, `breed`, and `noise`. The constructor function should also give each pet a method called `makeNoise`,
//    which behaves as described in Q3.

var Pet ;
// Answer Starts Here
var Pet = function Pet (name,species,breed,noise){
    this.name = name;
    this.species = species;
    this.breed = breed;
    this.noise = [];
}
Pet.prototype.makeNoise = function(species){
    var noise = 0;
    for( var i = 0; i < this.Pet.length; i++){
      if(species === 'K9'){
        noise = "Woof";
      }
      else {
        noise = "Meow";
      }
    }
    return noise;
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
