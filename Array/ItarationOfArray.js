//  Traversal and array (iterate an array)
//  Traversal means nevigate through array
// Following are way to traversal
// 1 for loop
// 2 for in loop
// 3 for of loop

// for loop
// for loop used to repeated section of code number of time
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
//  if you used an for in loop to iterate the array it return the index number (index value) of
//  each and erery element


//  For in loop return only object properties
//  for in loop only used for iterate properties of the object
//  for in loop only iterate only over those key of an object which have their enumerable propery
for (let elemnt in Names) {
    console.log(elemnt)
}
// ouptut
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
for (const key in obj) {
    console.log("key", key);
}
// output
// key a
// key b
// key c


// for of loop 
//  use to iterating of an array and it return each and every element of the array  
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
// const obj1 = { a: 1, b: 2, c: 3 }
// for (const value of obj1) {
//     console.log('value', value);
// }


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
//  Generally used for the iterationg over array or another iterable object 
//  return the value of the iterable object 
// example
const num = [1,2,3];
for(const number of num){
    console.log(number);
}
// output 1,2,3

// NOTE :
//  for of loop sutaible for array as it iterate over the actual value

//  for of loop not directely used on plain objects because they not iterable
//  so you can used for of with objectes by iterationg over their properties using mthod like
//  Object.key() , Objectes.Value() , or Objects.entries()


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
    console.log(person[key]);
};
// output
// name
//vishal
// age
//30
// city
//junnar


// Object.values();
// Object.vlaues() return an array of a give object own enumerable property value 
// i.e : Iterates over the property values of the object.
for(const value of Object.values(person)){
    console.log(value); 
};
//output
// vishal
// 30
// junnar

//Object.vlaues()
//return an array of give object own enumerable propery [key, vlaue] pairs
// iterates over the [key, value] pairs of the object, 
// which is useful when you need both the property name and value together.

for(const [key, vlaue] of Object.entries(person)){
console.log(key, vlaue);
}
// output 
// name vishal
// age 30
// city junnar