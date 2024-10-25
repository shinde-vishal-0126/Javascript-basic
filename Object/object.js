// 1 objects


// -  References type  (non-primitive type it compare the reference )
// - if you compare 2 objects you have to compare it address not value of the object (i.e address compare)

// - Object Literal :
// - Object literal is simply key: value pair data structure.
// - Storing variable and function together in one container, we can refer this as an objects
// - objects key by defaults are string.

// To access the value form the object using the 
// 1. dot notation 
// 2. bracket notation

let obj = {
  fileName :'vishal',
  lastName: 'shinde',
  age:28,
  welcomeUser : function(){
    console.log(`${obj.fileName} and ${obj.lastName}`);
  },
  getData(){
    console.log(`first-name : ${obj.fileName} and ${obj.lastName}`);
  }
}
obj.welcomeUser();
obj.getData();



// 2. what if you want an object as value inside the object
// (inside one object having the other object )
let bioData = {
  fullName: {
    firstName: "vishal",
    lastName: "shinde",
  },
  age: 45,
  getData() {
    console.log(
      `full-name ${this.fullName.firstName} ${this.fullName.lastName}`
    );
  },
};
bioData.getData();
console.log('get object data using dot notation :', bioData.fullName.firstName);
console.log('get the object value using the bracket notation :', bioData.fullName["firstName"]);



// example 
let name3 = 'shinde'
let agee = 'age';
myObj = {
  [name3] : 'vishal',
  [agee] : 20
}
console.log('myobje :', myObj);




// ----------------------------------------------------------------

// Object Destructuring :
//  Def : Object destructuring is a feature in JavaScript  that allows you to extract values from objects and assign them to variables in a more concise and readable way.
// (make it possible to unpack value or properties form the object in distinct variable)

const myBio = {
    name:'vishal',
    age:30,
    degree:'BE'
}
 let age1 = myBio.age
 console.log(age1);
 
 // way to destructuring
 let  {name, age, degree} = myBio
  console.log('name:',name);
  console.log('age:',age);
  console.log('degree:',degree);



  // *  now we can add dynamic properties 
//   (How to get dynamic data on object )
let name1 = 'vishal'
let myData = {
    [name1] : 'how are you',
    [20] : 'this is my age'

}
console.log(myData);

//  =========================================================================================

// ES8 having objects method to get property value and entries in objects  

// 1. Object.values()
// Def : Object .values() method returns an array containing all the object's own property value.

const person6 = {
  name:'vishal',
  age: 20
}
console.log(Object.values(person6)); // return this format [ 'vishal', 20 ]

// ==================================================================

// 2. Object.entries() 
// def : This method returns an array containing all the object data.
// So the object.entries()  method  returns each and every property or (key value pair) in a separate array.

console.log(Object.entries(person6)); // return [ [ 'name', 'vishal' ], [ 'age', 20 ] ]

// ===========================================================================

// 3. Object.formEntries() :
// object.formEntries() expect iterable of kay value pair such as an array of array where each inner array contain tow element [key, value]
// so in previous method If you used the object.entries method it converted the object to array of array 
// But if you want to convert again array or array to return objects. You have to use object.fromEntries() .

const arrayData = Object.entries(person6);
console.log(arrayData); // [ [ 'name', 'vishal' ], [ 'age', 20 ] ]
const result = Object.fromEntries(arrayData);
console.log('result', result) // result { name: 'vishal', age: 20 }






// tricky question :

// if you defined object in following way you con not access using dot notation so you have to access using the bracket notation:
let my = 'name'
const data = {
  'first-name' :'vishal', // if you defined the object key name as first-name then you have to assign as string otherwise it show the references error 
  lastName : 'shinde',
  name : 'vishu'
}
console.log('firstName', data.firstName); // here dot notation are not work so you have to used the bracket notation
console.log('firstName', data['first-name'])
console.log('lastName', data.lastName);

// note  : inside the squareBracket notation you have to write your variable as well as expression 
console.log('last name', data["last"+"Name"]); // this is expression and here you have to access the lastName

// also here you have to access the variable using bracket notation :
console.log(data[my]);
console.log('new data', data.age = 28)  // by using dot notation you have to add the data in object 
console.log(data);

// if you want to add the dynamic value using the bracket notation then you have to used the following way
console.log(data['last-date'] = 45)
console.log(data);


// # How to delete the any one properly form the object ?
const user ={
  firstName :'vishal',
  lastName : 'shinde',
  age : 33
}
console.log(delete user.age); // return true
console.log('user',user);


// # what is used of the Object.seal() & Object.freeze() method in javascript ?
// (useful when you want to control how objects are modified,)
// - Object.seal() and Object.freeze() are two methods in JavaScript that allow you to control the mutability (ability to modify) of objects.
// - They are used to restrict changes to the structure or values of an object, 
// - but they do so at different levels of restriction.

// 1. Object.seal() :
// - it prevent new properties from being added to the object 
// - marks all existing properties as non-configurable ('you can not delete them');
// - you can still modify the value of the existing properties.

//- No new properties can be added.
// - No properties can be removed.
// - Existing properties can be updated (if they are writable).
const person1 = { name: "John", age: 30 };
Object.seal(person1);

person1.age = 31; // OK, you can modify existing properties
person1.gender = "male"; // Error in strict mode, adding new properties is not allowed
delete person1.name; // Error in strict mode, can't delete properties


// 2. Object.freeze() :
// - It prevents new properties from being added
//  or existing properties from being removed.
// Additionally, it makes all existing properties immutable, meaning their values cannot be changed.

// No new properties can be added.
// No properties can be removed.
// No properties can be modified (even if they are writable).
const car = { make: "Toyota", model: "Camry" };
Object.freeze(car);

car.model = "Corolla"; // Error in strict mode, can't modify property values
car.year = 2020; // Error in strict mode, adding new properties is not allowed
delete car.make; // Error in strict mode, can't delete properties

// conclusion :
// Object.seal() allows modifying existing property values but prevents adding or deleting properties.
// Object.freeze() disallows all changes: no adding, no deleting, and no modifying of properties.
 
 
// IN (Relational operator :)
// -  used to check if a property exists in an object (either as an own property or an inherited one). 
//It returns true if the specified property is in the object, otherwise, it returns false.
// in operator checks for both own properties (properties directly present in the object) and inherited properties (properties in the object's prototype chain).
const person2 = { name: "Alice", age: 25 };
console.log("name" in person2);  // true
console.log("age" in person2);   // true
console.log("gender" in person2); // false

// also check in prototype chain :
const person3 = { name: "Alice" };
console.log("toString" in person3);  // true, because `toString` is inherited from Object.prototype


// # what is difference between hasOwnProperty() and IN operator in javascript ?

// hasOwnProperty() :
// hasOwnProperty() method: Only checks if the property exists as an own (direct) property of the object, not on its prototype.
const person = { name: "Alice" };
console.log("toString" in person);           // true, inherited from Object.prototype
console.log(person.hasOwnProperty("toString")); // false, because it's not an own property

// in operator: Checks if the property exists anywhere in the object, including its prototype chain.

