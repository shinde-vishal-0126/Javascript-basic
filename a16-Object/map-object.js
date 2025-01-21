// # Map()
// ? what is map object ?
// is a collection of key-value pairs where both keys and values can be of any data type
// Map objects maintain the order of their entries, which means that when you iterate over the Map, entries are returned in the order in which they were added.

// - Key Characteristics of Map:
// Unique Keys: Keys in a Map are unique.
// Preserves Order: Entries are iterated in the order of their insertion.
// Any Data Type for Keys: Unlike objects, where keys are always strings or symbols, Map allows keys to be of any data type (including objects, functions, and primitives).
// Size Property: Map objects have a size property that returns the number of key-value pairs in the Map

// - create Map
const map = new Map();

// - adding value in map
map.set("name", "vishal");
map.set("age", "29");
map.set("isStudent", false);

// - accessing the value in map
map.get("name");
map.get("isStudent");

// - has()
// The has() method checks if a specific key exists in the Map.
console.log(map.has("age")); // Output: true
console.log(map.has("address")); // Output: false

// - Removing Key-Value Pairs:
// The delete() method removes a key-value pair by its key.
map.delete("isStudent");
console.log(map.has("isStudent")); // Output: false

// - Clearing the Map:
// The clear() method removes all key-value pairs.
map.clear();
console.log(map.size); // Output: 0

// - Iterating Over a Map:
// You can iterate over the entries of a Map using for...of, or methods like forEach(), keys(), values(), and entries

// - for of loop
const map = new Map([
  ["name", "Bob"],
  ["age", 25],
  ["city", "Los Angeles"],
]);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: Bob
// age: 25
// city: Los Angeles

// - iterate using for-each
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// - Converting Map to Array:
// You can convert a Map to an array using Array.from() or the spread operator (...)
const entriesArray = Array.from(map);
console.log(entriesArray);
// Output: [['name', 'Alice'], ['age', 30]]

// Using spread operator
const spreadArray = [...map];
console.log(spreadArray);
// Output: [['name', 'Alice'], ['age', 30]]

// - In a Map object, the methods keys(), values(), and entries() are used to interact with the map's keys, values, and key-value pairs, respectively. Here's how each of them works:
// 1. keys() Method:
// Returns an iterator object containing all the keys in the Map.

const myMap = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

const keysIterator = myMap.keys();
console.log(keysIterator.next().value); // Output: 'a'
console.log(keysIterator.next().value); // Output: 'b'
console.log(keysIterator.next().value); // Output: 'c'

// - values() Method:
// Returns an iterator object containing all the values in the  object Map.
const myMap = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

const valuesIterator = myMap.values();
console.log(valuesIterator.next().value); // Output: 1
console.log(valuesIterator.next().value); // Output: 2
console.log(valuesIterator.next().value); // Output: 3

//  - entries() Method:
//   Returns an iterator object containing all the key-value pairs in the Map object as arrays, where each pair is a two-element array [key, value].
const myMap = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

const entriesIterator = myMap.entries();
console.log(entriesIterator.next().value); // Output: ['a', 1]
console.log(entriesIterator.next().value); // Output: ['b', 2]
console.log(entriesIterator.next().value); // Output: ['c', 3]

//   Summary:
//   set(key, value): Adds or updates a key-value pair.
//   get(key): Retrieves the value associated with the key.
//   has(key): Checks if the Map contains the specified key.
//   delete(key): Removes a key-value pair.
//   clear(): Clears all key-value pairs in the Map.
//   size: Returns the number of key-value pairs.
//   forEach(callback): Executes a callback for each key-value pair in the Map.
//   toString(): Returns a string representation of the Map.
//  key() : return key of the give map object
//  value() : return the value of the give map object
//  entries() : return the key value pair of the map object

// example :
const myMap = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

// Using `keys()`
for (const key of myMap.keys()) {
  console.log(key); // Output: 'a', 'b', 'c'
}

// Using `values()`
for (const value of myMap.values()) {
  console.log(value); // Output: 1, 2, 3
}

// Using `entries()`
for (const [key, value] of myMap.entries()) {
  console.log(`${key}: ${value}`); // Output: 'a: 1', 'b: 2', 'c: 3'
}

//? what is differences between Set() and Map() object in javascript
// Here are the key differences between Set and Map in JavaScript

// * set
// - Purpose:
// A collection of unique values.
// Used when you need to store distinct items without duplicates.
//Stores only values.
// Each value must be unique.
// Each entry in a Set is a unique value.

// - useCae
// Removing duplicates from an array.
// Checking if an item exists in a collection.

// - initialize :
const set = new Set([1, 2, 3, 4]);

// - Methods:
// add(value): Adds a value to the Set.
// delete(value): Removes a value.
// has(value): Checks if a value exists.
// clear(): Removes all values.
// size: Returns the number of values.
// Each entry in a Map consists of a unique key and an associated value.

// Iterates over values.
for (const value of set) {
  console.log(value);
}

// * Map:
// A collection of key-value pairs.
// Used when you need to associate values with unique keys.
// Stores key-value pairs.
// Each key must be unique, but values can be duplicated.

// useCase :
// Associating values with unique keys.
// Storing configuration settings, metadata, or other key-value data

// - initialize
const map = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);

// - method
// set(key, value): Adds or updates a key-value pair.
// get(key): Retrieves the value associated with a key.
// delete(key): Removes a key-value pair.
// has(key): Checks if a key exists.
// clear(): Removes all key-value pairs.
// size: Returns the number of key-value pairs.

// Iterates over key-value pairs.
for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

// - performance

// Set: Optimized for quick lookups, especially when checking if a value exists.
//  Use a Set when you need a collection of unique values.

// Use a Map when you need to store key-value pairs and ensure unique keys.
// Map: Optimized for key-based retrievals and maintaining the order of key-value pairs.
