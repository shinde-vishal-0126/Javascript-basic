// PROTOTYPE

// prototype is an object that contains properties and methods that are shared among all instances of a particular object. Prototypes are used to implement inheritance and extend the functionality of objects.
//  JavaScript, a prototype is an object that provides properties and methods to other objects.
//  This is a fundamental concept of JavaScript's inheritance model,known as prototype-based inheritance.
//  prototype is an object associated with every function and object by default in javascript 
//  Every function include prototype object by default 

//  basically prototype allow for inheritances 
// so that objects can inherits the properties and method from there parent object

// so this is useful for creating a hierarchy of objects where parent objects defined common properties and method
// that are shared by all of its child objects

// example
//  Date objects inherit from Date.prototype 
//  Array objects inherit from Array.prototype

//  The Object.prototype is on the top of the prototype inheritance chain:
//  Prototype is a special hidden property in JavaScript objects,
//  each object can access its prototype through __proto__ .
//  The prototype itself is an object, so it also has its own prototype.
//  prototype allows you to add new properties and methods to arrays.
//  prototype is a property available with all JavaScript objects.


//  Prototype Object:
//  Every JavaScript function has a prototype property that is used 
// when the function is used as a constructor. 
// The prototype property is an object that defines properties and methods that will be shared by all instances created by that constructor.


//  Prototype Chain:
//  Objects in JavaScript inherit properties and methods from their prototype.
//  When a property or method is not found on an object, JavaScript looks up the prototype chain to find it.
//  This chain continues up to Object.prototype, the ultimate prototype object.


// Object.prototype: 
            // The default prototype object from which all other prototypes inherit. 
            //It provides methods like toString, hasOwnProperty, etc., to all objects.

// Function.prototype: 
            // The prototype object of all functions.
            //  It includes methods like apply, call, and bind.


// function's prototype property is accessible and modifiable and object's prototype property is not visible.