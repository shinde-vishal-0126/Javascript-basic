//|returning multiple value form the function

// basically javascript return single value if you want return multiple value from a function you can pack the return value as an element
// of an array or as properties as an array
// Es6 you can used destructuring assignment syntax to unpack value from an array more intuitively 

function getName(){
    let firstName = 'vishal'
    let lastName ='shinde'

    // return multiple value from function you can pack the return value as an element of an array
    return [firstName, lastName]
}

let value = getName();
console.log('name', value);
let firstName = value[0];
let lastName = value[1]
console.log('firstName', firstName);
console.log('lastName',lastName);

// but if you have to multiple value form function in ES6 you have to used destructuring syntax
// here we have to used the array destructuring
const [fName, lName] = getName()
console.log("fName",fName);
console.log(lName,lName);

//! return multiple value from a function using an object 

function displayName(){
    let fname = 'vishal';
    let age = 45;
    let id = 10;
// here we have to return multiple value form the function we have to used the destructuring syntax 
// here we have to used the object destructuring
    return {fname, age, id}
}
const details = displayName();
console.log('details', details);

const {fname, age, id} = displayName()
console.log(fName);
console.log(age);
console.log(id)


// @ NOTE
// javascript does not support function that return multiple value you can wrap multiple value into an array or array of object and return array or object
// used the destructuring assessment syntax to unpack from the array and properties from the  object 

//! object properties : modern javascript
const name = 'vishal'
const neaAge = 25
// traditional way 
// const person = {
//     fullName : name,
//     age:neaAge
// }
// console.log(person)

// using shortHand notation for object properties
const person ={name, neaAge};
console.log(person)

// instead of specifying fullName:name and neaAge:age, you can simply used nama and age you can simply nama and age directly with the object literal 
