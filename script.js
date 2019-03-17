
// IDENTIFYING DATA TYPES
// For each of the following descriptions, which data type does it describe?
// Choose from the following: String, Number, Boolean, Object, Array, or Array of Objects.
// Another example would be, "A user password," which would be a String because it's
// not just true or false like a Boolean, it typically has more than just numbers,
// so it's not a Number, it doesn't have multiple properties, so it's not an Object,
// and it isn't a list, so it's not an Array. Make sure you comment out your answers
// so they don't throw errors for the exercises that follow.

// 1. A light switch that can be either on or off.
// Boolean
// 2. A user's email address.
// String
// 3. A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// Object
// 4. A list of student names from our class.
// Array
// 5. A list of student names from our class, each with a location.
// Array of Objects
// 6. A list of student names from our class, each with a location and a list of favorite tv shows.
// Array of objects


// CREATING AND ACCESSING SIMPLE ARRAYS AND SIMPLE OBJECTS
// 1. Create a variable whose value is an array that holds all of the colors of the rainbow.
var rainbowColors = ['red','orange','yellow','green','blue','purple'];
// 2. Write code that will access "blue" from the rainbow array. Log it to the console to test.
rainbowColors[4];
// 3. Make an object whose variable name is your name and holds the information about
// your favorite food, a hobby, the name of your current city, and your favorite data type.
var johnSmith = {
	favoriteFood: 'Chinese',
	hobby: 'Toy collecting',
	town: 'Denver',
	favoriteDatatype: 'String'
}
// 4. Write code that will access your hobby from the object that you just created.
jasonSpiller.hobby;


// ACCESSING VALUES FROM COMPLEX OBJECTS
// For each of the values in the numbered list below the complex object,
// write code that will access that value. Log your work to the console
// to test if you are correct. In other words, what is the address of
// each value? (Note: Notice that the "nicknames" property and 
// the "quotes" property are the same data type, but are presented
// differently. One is a horizontal list and the other vertical.)

var crazyObject = {
  taco: [
    {
      meat: 'steak',
      cheese: ['panela', 'queso', 'chihuahua']
    },
    {
      meat: 'chicken',
      salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
    },
  ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: [
      "Pretty pretty prettayyyyy good",
      "Is that a parkinson's thing?",
      "women love a self confident bald man",
      "I'm a walking talking enigma"
    ],
    characters: [
      {
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
    ]
  }
}


// 1. "omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);
// 2. "Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);
// 3. "Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);
// 4. "Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);
// 5. The entire object the contains the name funkhauser
console.log(crazyObject.larry.characters[1]);


// MANIPULATING COMPLEX OBJECTS
var inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

// Change the value of "limbo" from "Joseph Gordon Levitt" to null (no quotes around null).
// Now log the "limbo" property to the console.
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;

console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);
