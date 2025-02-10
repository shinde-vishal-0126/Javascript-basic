
// =================================================================================================================
// # Computed property
// =================================================================================================================

// ? what is computed property name ?
// - A computed property in JavaScript refers to the ability to dynamically define object property names using expressions. 
// Instead of hardcoding a property name, you can compute it based on a variable or an expression. 
// This is particularly useful when the property name needs to be determined at runtime.
// ES6 allow you to used an expression [] bracket (will used the result of expression as the property name of an object)

//  computed property used [] bracket expression;
 let propName ='c'
 const rank ={
    a : 1,
    b : 2,
    [propName] :3  // this is computed popery of the rank object
    // property name derived from the value of the propName variable 
 }
 console.log('rank' , rank.c);
// above example [propName] is computed property of the rank object  the properly name derived from the value of the propName variable


// Like object literal you can used computed property for getter and setter in class
let name = "fullName";
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName
    }
    get[name](){ // [name] this is computed property of the person class the properly name derived form the value of the name variable
        return `${this.firstName} and ${this.lastName}`
    }
}
let per = new Person('vishal','shinde');
console.log(per.fullName);

// - NOTE 
// computed property allow you to use the value of expression as the property name of the object 


//- ex.
const prefix = 'user_';
const id = 123;
const user = {
  [`${prefix}${id}`]: 'John Doe'
};
console.log(user.user_123); // John Doe


