// //example of ES6 Class
// const util = require("util")
//
// class Person {
//   constructor(name, className){
//     this.name = name
//     this.className = className
//   }
//
//   greeting(){
//     console.log(`My name is ${this.name}, I am a student, in the ${this.className}`)
//     //console.log(`My name is ${this.name}`)
//   }
// }
//
// let bob = new Person("Bob", "BJJ")
// bob.greeting() //=> "My name is Bob"
// //bob.age
//
// //let Jon = new Person("Jon")
// //Jon.greeting() //=> "My name is Bob"
//
// class Student extends Person {
//   greeting() {
//     console.log(`My name is ${this.name}, I am a student, in the ${this.className}`)
//   }
// }
//
// let tom = new Student("Tom", "Hamster Taming 101")
// tom.greeting() //=> "My name is Tom, I am a student"
//
//

class Programmer {
  constructor(name, jobTitle, seniority, favLang){
    this.name = name
    this.jobTitle = jobTitle
    this.seniority = seniority
    this.favLang = favLang
  }
 greeting(){
   console.log(`The engineers is ${this.name}, and h/she is the ${this.jobTitle} for our Company. They are a ${this.seniority} and their favorite language is ${this.favLang}`)
//     //console.log(`My name is ${this.name}`)
  }
 }

 let chucho = new Programmer("Chucho", "Front-end Web Dev", "Jr. Dev", "Javascript")
 chucho.greeting()
