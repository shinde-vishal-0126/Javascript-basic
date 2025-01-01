//| 1 objects

//  object are fundamental part of javascript providing a way to group related data and function together.
// -  References type  (non-primitive type it compare the reference )
// - if you compare 2 objects you have to compare it address not value of the object (i.e address compare)
// - javascript object is collection of key-value pairs where each key is string(or as a symbol) and value can be any dat type including other object
// - object can have properties and method making it versatile  for various use cases
// - Object Literal :
// - Object literal is simply key: value pair data structure.
// - Storing variable and function together in one container, we can refer this as an objects
// - objects key by defaults are string.

//! To access the value form the object using the
// 1. dot notation
// 2. bracket notation

//| Note:
// javascript object are not iterative 
// javascript object does not have length property
// javascript object are enumerable so we can used the for in loop to iterate over the key of the enumerable properties
// (Enumerable properties are those properties of an object that can be listed or iterated over using a loop or certain methods like Object.keys().)
//It iterates over the enumerable properties of an object.
// The loop retrieves the keys (property names) of the object one at a time.



//| Pass by Value and pass By reference:

//? explain the differences between passing objects by references and by value in javascript provide and example to demonstrate each scenario
// - in javascript primitive data type like numbers, and string are passed by value
// - object are passed by reference

//! passing by value:
//- when passing by value a copy of the primitive value is created and pass to the function or assigned to a variable.
//- any changes made to the copy do not affect the original value
let a = 10;
const modifiedValue = (a) =>{
  return a = 20;
}
console.log('modified value:', modifiedValue(a));
console.log('original value', a)


//! pass by reference 
//- passing by reference : when passing reference a reference to memory location of the object is passed to the function or assigned to a variable 
// - any changes made to the object through this reference will affect the original object
const obj1 = {
  id:1,
  name:'vishal',
  address:'pune'
}
console.log('pass by reference', obj1);
let obj2 = obj1; // here create copy of the object with it reference 
console.log('pass by reference 2', obj2)
// here we have to modified the property of the obj1 like name --> vishal to change 'vishal shinde'
obj1.name = 'vishal shinde';
console.log('original object name change:',obj1.name);
console.log('change the object 2 also (change name vishal to vishal shinde)',obj2.name)
//! in above example if you have change the name of the obj1 also change the name of the obj2 so it passing reference to the object1 to object2

//! to avoid this situation and you want to make object as pass by value you need to create the true copy of the object using following 2 way
//1. Object.assign(target, ...source) : Object.assign() is used to copy properties from one or more source object to a target object
//2. using spread operator (create the copy of the object)

//! using Object.assign()   great way to copy or merge objects in JavaScript.
const new_obj = Object.assign({},obj1);
console.log('before change new obj:', new_obj.name);
new_obj.name = 'akshu'
console.log('after change new obj:', new_obj.name);
console.log('original object:',obj1.name)
//! Note:
// Object.assign() value used to copy or merge the object into the single object but if it merge the object and key are same in source object so at that time it get 2nd key and value as result it override the firs key which is similar to another object

//! using spread operator
const obj111 = {...obj1};
console.log('obj1....', obj1)
console.log('obj111', obj111); 
obj111.name = 'akshay';
console.log('obj111', obj111.name);
console.log('obj1....', obj1.name) 

//| object compare by reference 
// two object are equal only if they refer to the same object 
// Independent objects (even if they look alike) are not equal
const obj123 = {
  name:'vishal',
  education:'BE'
}
const obj1234 = 
{
  name:'vishal',
  education:'BE'
}
const obj12345 = obj123

const isEqual = obj123 == obj1234 ? true : false;
console.log('isEqual or not', isEqual);
const isEqual1 = obj12345 == obj123 ? true : false;
console.log('isEqual or not', isEqual1);


//| object creation
//! object created using object literal using following
let obj = {
  fileName: "vishal",
  lastName: "shinde",
  age: 28,
  "it's feature": false,
  // anonymous function
  welcomeUser: function () {
    console.log(`${obj.fileName} and ${obj.lastName}`);
  },
  // object method
  getData() {
    return `first-name : ${obj.fileName} and ${obj.lastName}`;
  },
};
// access function using
obj.welcomeUser();
console.log("fileName.....s", obj["fileName"]);
obj.getData();
// here function of any object you can  access using the square bracket () parenthesis
console.log(".............", obj["getData"]());
// this type of key you are not able to access by using the dot notation you have to access using the square bracket
// obj.it's feature
console.log(
  "multi-string key access using square bracket:",
  obj["it's feature"]
);

//-------

//! what if you want an object as value inside the object
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
console.log("get object data using dot notation :", bioData.fullName.firstName);
console.log(
  "get the object value using the bracket notation :",
  bioData.fullName["firstName"]
);

//! adding and modify the properties of the object

// example
let name3 = "shinde";
let agee = "age";
myObj = {
  [name3]: "vishal",
  [agee]: 20,
};
console.log("myObj :", myObj);

// ----

let Bio = {
  name: "vishal",
  age: 29,
  welcomeUser: function () {
    console.log(`${obj.fileName} and ${obj.lastName}`);
  },
  // object method
  getData() {
    return `first-name : ${obj.fileName} and ${obj.lastName}`;
  },
};
//! by using the dot notation you you to add the properties to the object
Bio.job = "SDE1";
Bio.age = 28;
console.log("BIo info:", Bio);

//! also using the square bracket we have to add or modified the properties of the object
Bio["address"] = "pune";
console.log("Bio....", Bio);

//! update function display  using dot notation
Bio.display = function () {
  return "update function using dot notation";
};

console.log("update function with dot notation", Bio);

//! update existing function using dot square bracket
Bio["getData"] = function () {
  return `thanks for updating data`;
};

console.log("updated function.....", Bio.getData());

// tricky question :

// if you defined object in following way you con not access using dot notation so you have to access using the bracket notation:
let my = "name";
const data = {
  "first-name": "vishal", // if you defined the object key name as first-name then you have to assign as string otherwise it show the references error
  lastName: "shinde",
  name: "vishu",
};

console.log("firstName", data.firstName); // here dot notation are not work so you have to used the bracket notation
console.log("firstName", data["first-name"]);
console.log("lastName", data.lastName);

// note  : inside the squareBracket notation you have to write your variable as well as expression
console.log("last name", data["last" + "Name"]); // this is expression and here you have to access the lastName

// also here you have to access the variable using bracket notation :
console.log(data[my]);
console.log("new data", (data.age = 28)); // by using dot notation you have to add the data in object
console.log(data);

// if you want to add the dynamic value using the bracket notation then you have to used the following way
console.log((data["last-date"] = 45));
console.log(data);



//| Object Destructuring :
//  Def : Object destructuring is a feature in JavaScript  that allows you to extract or unpack values from objects and assign them to variables in a more concise and readable way.
// (make it possible to unpack value or properties form the object in distinct variable)

const myBio = {
  name: "vishal",
  age: 30,
  degree: "BE",
};
// it is traditional way 
let age1 = myBio.age;
console.log(age1);

//! way to destructuring
let { name, age, degree } = myBio;
console.log("name:", name);
console.log("age:", age);
console.log("degree:", degree);
// also you have to rename the property
let {name:fullName,age:nawAge, degree:newDegree} =myBio
console.log(fullName, nawAge, newDegree)



//!  now we can add dynamic properties or key
//   (How to get dynamic data on object )
//? How to make object key dynamic in Given object ?
//- To make dynamic key in object you have defined the key inside the square bracket show in below example 
//- in below example we have to add the dynamic key as vishal : and it value is How are you  
let name1 = "Greet";
  
let myData = {
  [name1]: "how are you",
  [20]: "this is my age",
};
console.log(myData);

//! what is data Modeling :
// - Data modeling is the process of creating a visual representation of either a whole information system or parts of it to communicate between data points and structure
// - the Goal is to illustrate the type of data used and stored within system , the relation among these data type the way the data can be grouped and organized and its formats and attributes



//| ES8 having objects method to get property value and entries in objects

//! 1. Object.values()
// Def : Object .values() method returns an array containing all the object's own property value.

const person6 = {
  name: "vishal",
  age: 20,
};
console.log(Object.values(person6)); // return this format [ 'vishal', 20 ]




//! 1. Object.keys()
// Def : Object,keys() method returns an array containing all the object's own property (i,e return key of the object)
const keyOfObject = Object.keys(person6);
console.log("keyOfObject",keyOfObject);



//! 2. Object.entries()
// def : This method returns an array containing all the object data.
// So the object.entries()  method  returns each and every property or (key value pair) in a separate array.
console.log(Object.entries(person6)); // return [ [ 'name', 'vishal' ], [ 'age', 20 ] ]


// 3. Object.formEntries() :
// object.formEntries() expect iterable of kay value pair such as an array of array where each inner array contain tow element [key, value]
// so in previous method If you used the object.entries method it converted the object to array of array
// But if you want to convert again array or array to return objects. You have to use object.fromEntries() .

const arrayData = Object.entries(person6);
console.log(arrayData); // [ [ 'name', 'vishal' ], [ 'age', 20 ] ]
const result = Object.fromEntries(arrayData);
console.log("result", result); // result { name: 'vishal', age: 20 }


//! # How to delete the any one properly form the object ?
const user = {
  firstName: "vishal",
  lastName: "shinde",
  age: 33,
};
console.log(delete user.age); // return true
console.log("user", user);



//! what is used of the Object.seal() & Object.freeze() method in javascript ?
//* (useful when you want to control how objects are modified,)
// - Object.seal() and Object.freeze() are two methods in JavaScript that allow you to control the mutability (ability to modify) of objects.
// - They are used to restrict changes to the structure or values of an object,
// - but they do so at different levels of restriction.

//! 1. Object.seal() :
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

//! 2. Object.freeze() :
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

//! conclusion :
// Object.seal() allows modifying existing property values but prevents adding or deleting properties.
// Object.freeze() disallows all changes: no adding, no deleting, and no modifying of properties.

//------------------------

//! IN (Relational operator :)
// -  used to check if a property exists in an object (either as an own property or an inherited one).
//It returns true if the specified property is in the object, otherwise, it returns false.
// in operator checks for both own properties (properties directly present in the object) and inherited properties (properties in the object's prototype chain).
const person2 = { name: "Alice", age: 25 };
console.log("name" in person2); // true
console.log("age" in person2); // true
console.log("gender" in person2); // false

// also check in prototype chain :
const person3 = { name: "Alice" };
console.log("toString" in person3); // true, because `toString` is inherited from Object.prototype

//? # what is difference between hasOwnProperty() and IN operator in javascript ?
//! hasOwnProperty() :
// hasOwnProperty() method: Only checks if the property exists as an own (direct) property of the object, not on its prototype.
const person = { name: "Alice" };
console.log("toString" in person); // true, inherited from Object.prototype
console.log(person.hasOwnProperty("toString")); // false, because it's not an own property

// note :
//* hasOwnProperty in javascript having issue it Doesn't work for objects created using Object.create(null);
// ex 
const student1 = Object.create(null);
student1.name = 'vishal';
console.log(student1);
// and here check if the object having the property of the name 
console.log(student1.hasOwnProperty('name')) // it return false 
//* so solution for this hasOwnProperty() are updated with hasOwn() method 
console.log(Object.hasOwn(student1,"name")) // it return true

// in operator: Checks if the property exists anywhere in the object, including its prototype chain.


//| objects useful method in javascript 

//! Object.key() : return the arry containing the name all enumerable own properties of the object 
//! Object.value() : return an arry containing the value of all enumerable own properties of object 
//! Object.entries() : return the array containing array of key-value pairs for each enumerable own property of an object 
//! Object.hasOwnPopery() : Return the boolean indicating weather the object has specified property as an own object 
//! Object.seal() : allows modifying existing property values but prevents adding or deleting properties.
//! Object.freeze() :disallows all changes: no adding, no deleting, and no modifying of properties.
//! Object.assign(target,....source) : it used to create copy of the object or merge the object  (basically it create the shallow copy)
//! IN (operator) : it check if a property exists in object of not :(it check current object as well as prototype chain also)
//! object.hasOwnProperty() : it check property exist in object or not (it check only in the current object not check in the prototype chain)


//! interview question

//1
let student ={
  name:'vishal',
  age:28,
  grades:{
    math:80,
    science:85,
    history:88
  }
}

const addProperty = (student,property,grade)=>{
  // here we have to used to get key as dynamically using square bracket
  const add = student.grades[property] = grade
  console.log(add)
}

addProperty(student,"computer",90)
console.log(student)

//2
//! write a function that a compare two objects to determine if they have the same properties and values
let objA = {name:'vishal',education:'BE', age:28}
let objB = {name:'akshu',education:'BE', age:29}
let objC = {name:'vishal',education:'BE', age:28}

const objectAreEqual = (obj1,obj2) =>{
  const ob = Object.keys(obj1);
  const oa = Object.keys(obj2);
  if(ob.length !== oa.length) return 
  for(let key in obj1){
    // console.log(obj1[key])
    if(obj1[key] !== obj2[key]){
      return false
    }
  }
  return true
}
console.log(objectAreEqual(objA,objC))


// write a function that transform of an objects into an object where the key are the objects id 

let inputArray =[{
  id:1,name:'vishal'
},{
  id:2,name:'vishu'
},{
  id:3,name:'akshu'
}
]
let obj5 = {}
for(let key of inputArray){
  console.log(key.id,key)
 obj5[key.id] = key
}

console.log(obj5)
