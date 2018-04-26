// //constructors
//
// function PersonName(first, last, nickname) {
//     this.firstName = first;
//     this.lastName = last;
//     this.nickname = namename;
// }
//
// function PersonProfression(title, company, jobDiscription, companyDiscriot) {
//     this.title = first;
//     this.lastName = last;
//     this.nickname = namename;
// }

// function Person(name, profession, gender, age, strength, hitPoints, printsStats) {
//   this.name = name
//   this.profession = profession
//   this.gender = gender
//   this.age = age
//   this.strength = strength
//
// }

// Constructor function for Person objects
function Person(name, profession, gender, age, strength, hitPoints, printsStats) {
  this.name = name
  this.gender = gender
  this.age = age
  this.strength = 10
    // this.name = function() {
    //     // return this.firstName + " " + this.lastName
    // };
}

// Create a Person object
let newPerson = new Person("John", "Doe", 50, "blue");
console.log (newPerson)

function Person2(name, profession, gender, age, strength, hitPoints, printsStats) {
  this.name = name
  this.gender = gender
  this.age = age
  this.strength = 20
    // this.name = function() {
    //     // return this.firstName + " " + this.lastName
    // };
}

// Create a Person object
let newPerson2 = new Person("Mack", "Jones", 35, "black");
console.log (newPerson2)
