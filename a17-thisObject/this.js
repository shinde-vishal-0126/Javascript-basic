//# This Object

// Note: this is not a variable. it is a keyword and you can not change this to any object  
// This object is that it contains the current context.
// (this is nothing but references to something like an object )
// This object can have different values depending on where it is placed
// this keyword refer to different object depending no how it is used ?

//- in an object method : this refer to the object
const obj = {
  myAge: 27,
  myName: function() {
    console.log(
      "in object method this refer to the object :",
      this,
      this.myAge
    );
  },
};
obj.myName();

// - in this example the greet method is defined using the method shortHand syntax it is more concise way to defined method in object literals
const obj4 ={
  name:'akshu',
  greet() {
    console.log('shortHand',this)
  } 
} 
obj4.greet()

// alone : this refer to the Global object
console.log(this);
// in node environment this refers to the empty object
// but in Browser it refers to the window object

//3 in a function : this refer to the Global object
function MyName() {
  console.log(this); // in function also refer to the Global object
}
MyName();

// example 2
let name = "vishal shinde";
function display() {
  console.log(this.name); // return the global object variable where we have to defined
}
display();


// 4 in a function : in strict mode : this is undefined
function strict() {
  "use strict";
  console.log("in strict mode this", this); // return undefined
}
strict();

// in a event : this refer to the element that received the event
// method like call(), apply() and bind() : can refer this to any object

// - fat arrow function with this keyword ?
// This function not work with the arrow function
// In traditional functions (function keyword): The value of this is determined by how the function is called, i.e., the calling context (e.g., an object or event handler).
// In arrow functions: Arrow functions do not bind their own this. 
// Instead, they inherit this from the surrounding lexical context (the scope in which they were defined).
const obj1 = {
  name: "Alice",
  greet: () => {
    console.log('using arrow function',this.name); // 'this' refers to the surrounding scope, not 'obj' so it return undefined because in this case arrow function refer to it surrounding scope like window object but in object there in no name property so it return undefined
  },
};
obj1.greet(); // Output: undefined (or window object in a browser)
// the arrow function inherits this from its lexical scope, which is the global scope in this case (or outer function if there is one). Since there is no name property in the global scope, this.name is undefined.

function chai() {
  let username = "vishal";
  console.log('this inside the function',this);
  // this object are work with object (this object not work inside the function) // this return the undefined
}
chai();

const chai1 = function () {
  let username = "vishal";
  console.log('this inside the function',this.username); //  it return undefined 
};
chai1();

// ex
//  2 types in object binding in javascript 
//  -explicit object binding :
//  explicit binding can we apply using the call, apply and bind method
// - implicit object binding :
//  (implicit binding apply when an invoke the function in an object using .(dot), notation )
  // this keyword in such senario will point to the object using function was an invoked  (simply object left sind the dot )

// here this is Global context (i.e refer to the window object )

// this.a = 5;
// console.log(a);

// console.log(this) // return the window object .

function greeting(){
  console.log(this.a)
}
greeting()

// what happen in arrow function :
const greet = () =>{
  console.log(this) // in arrow function here it refer to the window object (global object )
}
greet()


// ex.
let user ={
  name:'vishal',
  age: 24, 
  // this is normal function refer to the current context so return the vishal and 24
  getData() {
    console.log(this.name , this.age)
    console.log(this) // this is refer to its parent object not Global object 
  },
  getData1 : () =>{
    console.log(this.name, this.age); // here arrow function return undefined because it refer to directly window object and window object does not have the name and age 
    // arrow function only refer to its parent function if does not have parent function it refer to the global i.e widow object 
    console.log(this)
  },
  childObj : {
    newName : 'shinde vishal',
    // so this normal function refer to the childOje not the user object 
    getData2  (){
      console.log(this.newName , this.name);
      console.log("this", this)
    }

  }

}
user.getData();
user.getData1()
user.childObj.getData2();

// Arrow functions do not have their own this.
// Instead, they use the value of this from the surrounding lexical scope. 
// If there is no surrounding context, this will refer to the global object (window).
// so this normal function are pointing to the immediate parent function

let user1 = {
  name:'vishal',
  age : 28,
  hi() {
    console.log(this.name, this.age)
    console.log(this)
  },
  //if you defined arrow function it return undefined because it refer to the window object 
  h1 :() =>{
    console.log(this) // refer to window object because does not have its this binding it refer to surrounding lexical scop 
    console.log(this.name, this.age)
  },
get1() {
 this.newName = 'akshu' 
 const h2 = () =>{
  console.log(this);
  console.log("hello word ",this.newName, this.name) // However, the newName: 'akshu'; statement does nothing because it’s a standalone statement and not part of the user1 object.
 }
 h2()
}
}
user1.hi();
user1.h1();
user1.get1()