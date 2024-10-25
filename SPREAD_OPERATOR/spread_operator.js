// SPREAD OPERATOR:
// It's written as three dots (...),

// * The spread operator used used to expand or "spread" elements of an iterable object (such as an array, string, or object literal) into individual elements or properties. ( split an array or an iterable (like string and another array) into individual elements )

// it is used:                                                                                                                      1.It allows for a concise way to create copies of arrays or objects, ( split an array or an iterable (like string and another array) into individual elements )                                                                                                   2. merge multiple arrays or objects, (Primarily used for creating copies of arrays or combining multiple arrays or iterative)                                                                                                                        3. and pass elements as function arguments.

//example 
// spread operator allow us to quickly copy all the part of the array or array like object into another array or object
const color = ['red', 'green','blue','white'];
const new_color = ['red', 'green','blue','black'];
const myFavColor = [...color,'yello', 'black'];
console.log('myFavColor',myFavColor)

// Note:                                                                                                                               1. The spread operator does not create a reference to the original array                                                         2.  This is because the new array is a separate instance with its own values, copied at the time of creation.
color.push('mango');
console.log(color);
console.log('myFavColor after pushing new array',myFavColor)


// **  Spread operator also used with objects literals

const vehicle = {
    brand: 'food',
    model: 'mustang',
    color:'red'
}
const feature ={
    year:2021,
    type:'car',
    color:'yellow'
}

const new_feature = {
    ...vehicle, ...feature
}
console.log(new_feature)

// Overwriting in the context of merging objects with the spread operator happens when two objects have properties with the same key. The value of the property from the last object spread into the new object will replace the value from any earlier objects with the same key.


// Spread Operator spread into function call 
// In function call the spread operator is used to spread the element of an array (or any iterable) as an individual argument to function
function sum(a,b,c){
    return a + b+c
}
const number = [1,2,3,4,5,6,8]
const result = sum(...number)
console.log(result)


// *  spread operator with string
//When a spread operator is used with the string the spread operator treats the string as an iterable and spreads its characters into an array or other context where iterable elements are expected.
const str = 'vishal'
console.log(...str);
console.log([...str])