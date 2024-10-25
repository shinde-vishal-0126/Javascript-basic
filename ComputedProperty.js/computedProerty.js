// Computed property

//ES6 allow you to used an expression [] bracket (will used the result of expression as the property name of an object)
// computed property used [] bracket expression;

 let propName ='c'
 const rank ={
    a : 1,
    b : 2,
    [propName] :3  // this is computed propery of the rank object
    // propery name derived from the value of the propName variable 
 }
 console.log('rank' , rank.c);
// above example [propName] is computed proeprty of the rank object  the propery name derived from the value of the propName varible


// @ Like object literal you can used computed propery for getter and setter in class

let name = "fullName";
class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName
    }
    get[name](){ // [name] this is computed propery of the person class the propery name derived form the value of the name variable
        return `${this.firstName} and ${this.lastName}`
    }
}
let per = new Person('vishal','shinde');
console.log(per.fullName);

// NOTE 
// computed property allow you to use the value of expression as the propery name of the object 