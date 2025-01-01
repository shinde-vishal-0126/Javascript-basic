//  Traversal and array (iterate an array)
//  Traversal means navigate through array

// Following are way to traversal/or iterate through the array
// 1 for loop
// 2 for in loop
// 3 for of loop
// forEach loop
// map()

// for loop (for loop in JavaScript is a control flow statement that allows you to execute a block of code repeatedly, based on a condition.)
// for loop used to repeated section of code number of time (iterate the array for given number of time)
const Names = [
    "Alice",
    "Bob",
    "Charlie",
    "Diana",
    "Edward",
    "Fiona",
    "George",
    "Hannah",
    "Ian",
    "Julia"
];
for (let i = 0; i < Names.length; i++) {
    console.log(Names[i]);
}
// output
// Alice
// Bob    
// Charlie
// Diana  
// Edward 
// Fiona  
// George 
// Hannah 
// Ian    
// Julia



//  for in loop 
//  if you used an for in loop to iterate the array it return the index number (index value) of each and every element
//  For in loop return only object properties
// for in loop is used to iterate over the properties (including indices) of an object
//  for in loop only used for iterate  enumerable properties of the object
//  for in loop only iterate over those key of an object which have their enumerable property
for (let element in Names) {
    console.log(element)
}
// output
// 0      
// 1      
// 2      
// 3      
// 4      
// 5
// 6
// 7
// 8
// 9


// example 2
const obj = { a: 1, b: 2, c: 3 }
// normal objet are enumerable object not iterable object 
for (const key in obj) {
    console.log("key", key);
}
// output
// key a
// key b
// key c



// for of loop  :
//  use to iterating of an array and it return each and every element value  of the array  
// for of loop is used to iterate over the value of an iterable object such as array, string or other iterable objects 
for (let ele of Names) {
    console.log(ele);
}
// output
// Alice
// Bob
// Charlie
// Diana
// Edward
// Fiona
// George
// Hannah
// Ian
// Julia


//example 2
//  here show the obj1 is not iterable object so here show the error
// i t is not enumerable object
const obj2 = { a: 1, b: 2, c: 3 }
for (const value of obj2) {
    console.log('value', value);

    // The error occurs because obj2 is not an iterable object. 
    // Objects in JavaScript (like obj2 in your code) are not directly iterable using the for...of loop. The for...of loop is specifically designed for iterables, such as arrays, strings, maps, and sets.
}

// fix this solution 
// If you want to iterate over the keys, values, or entries of an object like obj2, you can use Object utility methods:
const obj3 = { a: 1, b: 2, c: 3 };

for (const value of Object.values(obj3)) {
    console.log('value:', value);
}
//  Iterate Over Keys:
for (const key of Object.keys(obj2)) {
    console.log('key:', key);
}
// 3. Iterate Over Entries (Key-Value Pairs):
for (const [key, value] of Object.entries(obj2)) {
    console.log(`key: ${key}, value: ${value}`);
}






// DIFFERENCES BETWEEN FOR IN LOOP AND FOR OF LOOP

// FOR IN :
//  Iterate over the enumerable properties of an object
//  Generally used for iterating over the object properties
//  return the object key (property name of the object)
// example
const obj1 = { a: 1, b: 2, c: 3 }
for (const value in obj1) {
    console.log('value', value);
}
// output
// value a
// value b
// value c

// NOTE :
//  for in loop Generally avoided with array because it iterate over the indices and include all
//  enumerable properties


//  FOR OF :
//  iterate over the value of an iterable objects (e.g array, map, set etc);
//  Generally used for the iterating over array or another iterable object 
//  return the value of the iterable object 
// example
const num = [1,2,3];
for(const number of num){
    console.log(number);
}
// output 1,2,3

// NOTE :
//  for of loop satiable for array or array like object as it iterate over the actual value

//  for of loop not directly used on plain objects because they not iterable
//  so you can used for of with objects by iterating over their properties using method like
//  Object.key() , Objects.Value() , or Objects.entries()


// OBJECT.KEYS() :
// object.keys() return an array of a given objects own enumerable property names
// i.e Iterates over the property names (keys) of the object.
// example
const person  = {
    name:'vishal',
    age:30,
    city:'junnar'
}
for(const key of Object.keys(person)){
    console.log(key); 
    console.log(person[key]); // here return value also
};
// output
// name
//vishal
// age
//30
// city
//junnar


// Object.values();
// Object.values() return an array of a give object own enumerable property value 
// i.e : Iterates over the property values of the object.
for(const value of Object.values(person)){
    console.log(value);  // here return value
};
//output
// vishal
// 30
// junnar

//Object.entries()
//return an array of give object own enumerable popery [key, vlaue] pairs
// iterates over the [key, value] pairs of the object, 
// which is useful when you need both the property name and value together.

for(const [key, value] of Object.entries(person)){
console.log(key, value);
}
// output 
// name vishal
// age 30
// city junnar



// NOTE"
// normal object are not iterable by default  
// normal objet are enumerable by default 

// array are iterable by default also enumerable but only for the indices