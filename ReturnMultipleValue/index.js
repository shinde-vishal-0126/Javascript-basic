//returning multiple value form the function

// basically javascript return single value if you want return multiple value from a function you can pack the return value as an element
// of an array or as properties as an array

// Es6 you can used destructuring assignment syntax to unpack value from an array more ittitvely 

function getName(){
    let firstName = 'vishal'
    let lastNmae ='shinde'

    // return multiple value from function you can pack the return value as an element of an array
    return [firstName, lastNmae]
}

let name = getName();
console.log('name', name);
let firstName = name[0];
let lastName = name[1]
console.log('firstName', firstName);
console.log('lastName',lastName);

// but if you have to multiple value form function in ES6 you have to used destructuring syntax
// here we have to used the array destructuring
const [fName, lName] = getName()
console.log(fName);
console.log(lName);


// @ return multiple value from a function using an object 

function dispalyName(){
    let fname = 'vishal';
    let age = 45;
    let id = 10;
// here we have to return multiple value form the function we have to used the destructuring syntax 
// here we have to used the object destructurin
    return {fname, age, id}
}
const details = dispalyName();
console.log('details', details);

const {fname, age, id} = dispalyName()
console.log(fName);
console.log(age);
console.log(id)


// @ NOTE
// javascript does not support function that return multiple value you can wrap multiple value into an array or array of object and return array or object
// used the destructuring assisment syntax to unpack from the array and properties from the  object 




