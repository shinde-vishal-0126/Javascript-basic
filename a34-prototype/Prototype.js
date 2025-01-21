//| Prototype 

// in javascript prototype provide the mechanism for sharing properties and method across instances.

// prototype is an object it is associated with every function and object in javascript  by default ;
// it allow for the inheritances of  properties and method across different objects.


//! prototype fo Function :
// every javascript function has special property call as prototype 
// this prototype is object that contain method and properties that will be shared all instances created using the function 

//! prototype chain:
// javascript object has hidden internal property called as [[prototype]] ==> which refer to the another object (i.e its prototype)
// if you try to access property or method of an object javascript will first check the object itSelf if it does not found property it look into chain of prototype  (known as prototype chain) until its find the property or reaches to end of the chain (null)

//! Built in object like array, object and function 
// this also having prototype object as well 

// ! chaining the prototype :
// You can also modify the prototype of an object or function to add new methods or properties dynamically.

//! __proto__
// __proto__ is a special property (an internal property) that exists on all objects. It is used to refer to an object's prototype, or the object from which it inherits properties and methods
// hough it has been largely replaced by Object.getPrototypeOf() and Object.setPrototypeOf() in modern JavaScript, __proto__ is still supported in most environments and can be used to access or modify the prototype of an object.

const person = {
    name: 'Alice'
  };
  const employee = {
    job: 'Developer'
  };
  
  person.__proto__ = employee;
  console.log(person.job); // Output: Developer
  