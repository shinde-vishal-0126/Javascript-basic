// TOLOCALSTRING(LOCAL, OPTION)

// toLocalString() :
// method return  a string representation the element of array
// return string representation of the aray

// toLocalString( [local], options);
// convert a number and date to string based on the local  and formatting option 
// This method provides way to format numbers and data in a way that is sensitive to the cultural noms of a specific local
// The toLocaleString() method is a powerful tool for creating locale-sensitive string representations of numbers and dates

const array = [1, 'a',new Date('21 Dec 1917 14:12:00 UTC')];
const toLocal = array.toLocaleString('en',{timeZone: 'UTC'});
console.log(toLocal);


// Object of configuration properties

// Number.prototype.toLocaleString();
// Date.prototype.toLocaleString()
// Object.prototype.toLocaleString();

// NOte:
// if the element is undefined so null is converted to an empty string insted of string null or undefiend

const arr = [1, , undefined];
const data = arr.toLocaleString('en',{timeZone:'UTC'});
console.log(data);

// example 
console.log([1, ,3].toLocaleString());