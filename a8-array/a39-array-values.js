// Array.properties.VALUES()

// array.prototype.value() is default representation of ARRAY.PROTOTYPE.[@iterator];
// array.values() method return new array iterator object that contain the value for each index in the array.
// Array.values() is a method in JavaScript that returns a new Array iterator object containing the values of the array. This iterator allows you to loop through the elements of the array.
// this method useFul when you need to iterate over the value of an array without needing to access indices 
// create new arry not modified original array

//Example :

const arr = ['a', 'b', 'c'];
const iterator = arr.values();
for (let value of iterator) {
  console.log(value);
}
// Output:
// 'a'
// 'b'
// 'c'


// values() method used non-spare array
// if in array is empty slot it return undefined
for (const ele of [,'a'].values()){
  console.log(ele); // undefined , a
  a
}

// iteration using next();
// you have to used next() when return value is also an iterator so you can call next() directly

const arm = ["1",'b','c', 'd', 'w'];
const item = arm.values()
item.next() 
console.log(item.next().value); // b


// Notes:
// It returns an iterator, which is an object that provides a next() method.
// You can also convert it to an array using Array.from() if needed:

const valuesArray = Array.from(arr.values());
console.log(valuesArray);  // [10, 20, 30, 40]

// useCase():
// This method is useful when you want to explicitly iterate over the values of an array, especially when the array might contain sparse or non-contiguous values.