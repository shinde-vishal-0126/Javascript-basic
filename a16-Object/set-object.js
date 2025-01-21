// # set
// ? what is set in javascript

// A Set object in JavaScript is a collection of unique values.
//  Unlike arrays, Set objects do not allow duplicate values.
//  The values can be of any data type, including primitive values or object references.

//-Key Characteristics of Set:
// Unique Values: Each value must be unique; no duplicates are allowed.
// Order of Insertion: Elements are iterated in the order they were added.
// Any Data Type: Values can be of any type, including objects and primitives.

// 1 Creating a Set:
// const set = new Set();

// You can also initialize a Set with an iterable (e.g., an array):
const set = new Set([1, 2, 3, 4, 4, 5]);
console.log(set); // Output: Set(5) { 1, 2, 3, 4, 5 }

// - Adding Values:
// Use the add() method to add values to a Set.
set.add(10);
set.add(20);
set.add(10); // Duplicate values are ignored
console.log(set); // Output: Set(2) { 10, 20 }

// - Checking for Values:
// The has() method checks if a value is present in the Set.
console.log(set.has(10)); // Output: true
console.log(set.has(30)); // Output: false

// - Removing Values:
// The delete() method removes a specific value.
set.delete(10);
console.log(set.has(10)); // Output: false

// - Clearing the Set:
// The clear() method removes all values from the Set.
set.clear();
console.log(set.size); // Output: 0

// - Iterating Over a Set:
// You can iterate over the values of a Set using for...of or the forEach() method
const set = new Set(["apple", "banana", "cherry"]);
for (const value of set) {
  console.log(value);
}
// Output:
// apple
// banana
// cherry

// - using forEach
set.forEach((value) => {
  console.log(value);
});

// -  Converting a Set to an Array:
//   You can convert a Set to an array using
// Array.from() or
const set = new Set([1, 2, 3]);
const array = Array.from(set);
console.log(array); // Output: [1, 2, 3]

// the spread operator (...).
// Using spread operator
const spreadArray = [...set];
console.log(spreadArray); // Output: [1, 2, 3]

// - Using the values() Method: (in each iterator you have to used the next() method then get the value)
// The values() method returns an iterator of all the values in the Set.
const mySet = new Set([true, false]);
const iterator = mySet.values();
console.log(iterator.next().value); // Output: true
console.log(iterator.next().value); // Output: false

// - In a Set, the keys() method is available, but it behaves the same as the values() method. This is because a Set only contains values (without keys), and both keys() and values() return an iterator over the values.
// const mySet = new Set([1, 2, 3]);
// const keysIterator = mySet.keys();
// console.log(keysIterator.next().value); // Output: 1
// console.log(keysIterator.next().value); // Output: 2
// console.log(keysIterator.next().value); // Output: 3

// - Summary of Methods:
// add(value): Adds a new value to the Set.
// delete(value): Removes a value from the Set.
// has(value): Checks if a value exists in the Set.
// clear(): Removes all values from the Set.
// size: Gets the number of elements in the Set.
// forEach(callback): Executes a callback function for each value in the Set.
// values(): Returns an iterator object of values in the Set.
// keys(): Returns an iterator object of keys in the Set (same as values() in Set).
// entries(): Returns an iterator object of [value, value] pairs.
// [Symbol.iterator](): Allows iteration over the Set using a for...of loop.
