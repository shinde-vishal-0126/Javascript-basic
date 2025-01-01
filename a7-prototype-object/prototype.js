// ? prototype

// A prototype in JavaScript is an object that is automatically associated with every function and object by default. 
// It is an integral part of JavaScript's object-oriented programming model and facilitates inheritance.


// Prototype in Functions
// Every JavaScript function has a prototype object, which allows for the addition of methods and properties 
// that can be inherited by instances created using that function.
//  This enables you to share functionality across multiple instances of the same constructor function.


// Prototype Chain
// In JavaScript, each object has a prototype property, which refers to another object.
//  Objects inherit properties and methods from their prototype, forming what’s called the prototype chain. 
// When you access a property or method on an object, JavaScript will first look for it on the object itself. If it doesn't find it, it will then search in the prototype, and so on, until it reaches the end of the prototype chain.
// At the top of this chain is Object.prototype, 
// which is the prototype object for all objects in JavaScript.
//  It contains methods like toString() that are available to all objects


//? Creating Objects
// Objects can be created in JavaScript in several ways, and all objects created automatically inherit properties and methods from their prototypes..
// 1. Using Object Literal
    // const myObject = {};
    // console.log(myObject);

// Using Constructor Function

//  function Person(name) {
//   this.name = name;
// }
// const person = new Person('Vishal');


//? Prototypes and Constructors:
// When objects are created using constructor functions, they automatically have a prototype property that points to the prototype object of the constructor.
//  You can add methods and properties to the prototype object, and they will be inherited by all instances created with that constructor.
// Person.prototype.sayHello = function() {
//     console.log(`Hello, my name is ${this.name}`);
//   };
  

//? Creating Objects with Specific Prototypes
// You can also create objects with a specific prototype using the Object.create() method:
// const newObject = Object.create(SomePrototype);

//? Changing Prototypes 
// You can change the prototype of an object using the Object.setPrototypeOf() method or by reassigning the __proto__ property (though this is not recommended in most cases).
// Object.setPrototypeOf(myObject, AnotherPrototype);


// In JavaScript, built-in objects like Date, Array, and Function have their own prototypes:
// Date objects inherit from Date.prototype
// Array objects inherit from Array.prototype
// Custom objects, such as instances of Person, inherit from Person.prototype

