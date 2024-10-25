// TOSTRING()

// tostring() :
// toString() method used in javascript to convert and return string representation of an object 
// this toStirng() method available in build in javascript object like numbers, array, and objects
// toString() method behaviour depends on the type of the object 

// it means string represnetation of the element of array 
// Array object override the toString() method of the object
// for Koowlade prupose : om arrau
// toString() method internally call the join() method which join the array and return one string containing each array element

// example
const arr = [1,2, 'a', '1a'];
const data = arr.toString();
console.log(data); // 1,2,a,1a

// toString() method on spare array
console.log([1, ,3].toString());// 1,,3


// WHAT IS DIFFERENCES BETWEEN TOSTRING() AND TOLOCALSTRING();
// this both method are used to converting value to string

//toString() :
// convert and return the string representation of value or object
// provide the default string representation for build in object and can be overriden in custom object
// use toString() for simple conversions to string


// toLocalString()
//Converts and returns a string representation of a number or date based on locale-specific formatting rules.
// Provides detailed options for locale-specific formatting, including numbers and dates.
// toLocaleString() when you need locale-aware formatting for numbers and dates.






