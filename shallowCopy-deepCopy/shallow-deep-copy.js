//==========================================================================================================================================================
// # shallow copy or deep copy
//==========================================================================================================================================================
// - before that we have to understand the copy object or array
let obj11 = { name: "Alice", age: 25 };
let obj = obj1; // obj is now referencing the same object as obj1
obj.age = 26; // Modify the 'age' property of obj
console.log(obj11); // { name: "Alice", age: 26 }
console.log(obj); // { name: "Alice", age: 26 }
// The expression obj = obj1 simply means that the variable obj is being assigned the value of obj1.
//  This doesn't create a copy of obj1; instead, it makes both obj and obj1 refer to the same object in memory. 
// Therefore, any changes made to obj will also affect obj1, and vice versa, since they both point to the same reference.

// - Key Concept:
// No Copy: This is not creating a copy of obj1, but rather making obj point to the same object as obj1. 
// Both variables refer to the same memory location.
// Shared State: Any changes made through either obj or obj1 will reflect in the other, as they are referencing the same object.

// -Shallow Copy:
//  Only the top-level properties are copied, not nested objects or arrays.
// - Deep Copy:
//  Both top-level and nested properties are copied, so no references are shared between the original and the copy.

// ==========================================================================================================================================================
// # shallow copy
// ==========================================================================================================================================================
//  JavaScript, shallow copy and deep copy are two methods for copying the contents of an object or array, but they behave differently when it comes to nested structures like arrays or objects.
// - 1. Shallow Copy:
// A shallow copy means that only the first level of the object or array is copied, and nested objects or arrays still point to the same reference as the original
// - Objects: 
// When you create a shallow copy of an object, the top-level properties are copied.
// However, if any of the properties are themselves objects or arrays, their references are copied, not the actual content. Therefore, modifying a nested object in the copied object will also affect the original object.
// Arrays: In the case of arrays, a shallow copy creates a new array, but the items inside it are still references to the original objects or arrays.
// ex.
const obj111 = { a: 1, b: { c: 2 } };
// Shallow copy using Object.assign
const shallowCopyObj = Object.assign({}, obj111);
console.log("shallowCopyObj", shallowCopyObj);
shallowCopyObj.a = 10; // This will not affect obj1
shallowCopyObj.b.c = 20; // This will affect obj1 because b is a reference to the same objects

console.log(obj111); // { a: 1, b: { c: 20 } }
console.log(shallowCopyObj); // { a: 10, b: { c: 20 } }

// - Example 2: Shallow Copy with an Array
// Original array
const arr11 = [1, 2, { a: 3 }];
// Shallow copy using slice or spread operator
const shallowCopyArr = [...arr11];
shallowCopyArr[0] = 10; // Changing top-level element
shallowCopyArr[2].a = 20; // Changing nested object (this will also affect arr1)
console.log("Original Array:", arr1); // [1, 2, { a: 20 }]
console.log("Shallow Copy:", shallowCopyArr); // [10, 2, { a: 20 }]

// ==========================================================================================================================================================
// # Deep copy
// ==========================================================================================================================================================

// - 2. Deep Copy:
// A deep copy means that the object or array and all its nested objects or arrays are recursively copied.
// Therefore, the copied object or array will not share any references with the original, and changes made to the copy will not affect the original object.
// - Objects & Arrays: 
// Both objects and arrays are deeply copied, meaning each nested object or array gets a new reference
const obj22 = { a: 1, b: { c: 2 } };
// Deep copy using JSON methods (works well for plain objects)
const deepCopyObj = JSON.parse(JSON.stringify(obj22));
deepCopyObj.a = 10; // This will not affect obj2
deepCopyObj.b.c = 20; // This will not affect obj2

console.log(obj22); // { a: 1, b: { c: 2 } }
console.log(deepCopyObj); // { a: 10, b: { c: 20 } }

// - Summary:
// - Shallow copy: 
// Copies the top-level properties, but nested objects or arrays are shared by reference.
//- Deep copy: 
// Recursively copies all nested structures, so no references are shared between the original and the copy.

// - Example 2: Deep Copy with an Array
// Original array
const arr22 = [1, 2, { a: 3 }];
// Deep copy using JSON methods
const deepCopyArr = JSON.parse(JSON.stringify(arr2));
deepCopyArr[0] = 10; // Changing top-level element
deepCopyArr[2].a = 20; // Changing nested object (this will not affect arr2)
console.log("Original Array:", arr2); // [1, 2, { a: 3 }]
console.log("Deep Copy:", deepCopyArr); // [10, 2, { a: 20 }]

// - Quick Summary: Shallow Copy vs Deep Copy in JavaScript
// - Shallow Copy:
//  Definition:
//  A shallow copy creates a new object or array, but the nested structures (objects/arrays) are still shared by reference.

//- Ways to Create a Shallow Copy:
// For Objects:
// 1. Object.assign({}, obj) – Copies the properties of an object.
// For Arrays:
// 2. Array.prototype.slice() – Creates a shallow copy of an array.
// Spread operator ([...]) – Copies the elements of an array into a new array.

// -Deep Copy:
// Definition: \A deep copy recursively copies all values and nested structures, so the copy is entirely independent of the original.

// - Ways to Create a Deep Copy:
// JSON Method:
// 1. JSON.parse(JSON.stringify(obj)) – Common for objects and arrays, but can only handle JSON-safe values (no functions, undefined, or non-serializable data).
// Using Libraries:
// 2. _.cloneDeep(obj) from Lodash – Handles more complex objects (with non-JSON-safe data).

// ==========================================================================================================================================================
// # example with spread operator (...obj)
// ==========================================================================================================================================================
// - Example 1: Spread Operator with Objects (Shallow Copy)
// In this example, we'll demonstrate how the spread operator creates a shallow copy of an object.
// Original object
let obj1 = {
  name: "Alice",
  age: 25,
  address: { city: "Wonderland", zip: 12345 },
};
// Creating a shallow copy of obj1 using the spread operator
let obj2 = { ...obj1 };
// Modifying the properties of the copied object
obj2.name = "Bob"; // Changing top-level property
obj2.address.city = "New City"; // Modifying a nested object property
// Print both objects to see the effect
console.log("Original Object (obj1):", obj1); // { name: "Alice", age: 25, address: { city: "New City", zip: 12345 } }
console.log("Copied Object (obj2):", obj2); // { name: "Bob", age: 25, address: { city: "New City", zip: 12345 } }
// - Explanation:
// Top-level properties like name are copied independently. So, modifying obj2.name does not affect obj1.
// However, the nested object address is still shared between obj1 and obj2. Modifying the nested address.city in obj2 also changes it in obj1 because the reference to the same address object is shared.

// - Example 2: Spread Operator with Arrays (Shallow Copy)
// Now, let's see how the spread operator works with array
// Original array
let arr1 = [1, 2, 3, { name: "Alice" }];
// Creating a shallow copy of arr1 using the spread operator
let arr2 = [...arr1];
// Modifying the properties of the copied array
arr2[0] = 10; // Changing a primitive value
arr2[3].name = "Bob"; // Modifying a nested object
// Print both arrays to see the effect
console.log("Original Array (arr1):", arr1); // [1, 2, 3, { name: "Bob" }]
console.log("Copied Array (arr2):", arr2); // [10, 2, 3, { name: "Bob" }]

// - Explanation:
// Primitive values like arr2[0] = 10 are copied independently. Modifying arr2[0] does not affect arr1.
// However, the nested object in arr2[3] (which is { name: "Alice" }) is still a reference to the same object in arr1. So, modifying the nested name property of the object affects both arrays.

// - Summary:
// The spread operator creates a shallow copy of both objects and arrays.
// For top-level properties or elements, the copy is independent, so modifying one won't affect the other.
// For nested objects or arrays, the reference to the same object is copied, meaning that changes to the nested data will affect both the original and copied structure.
// - When to Use:
// Use the spread operator for shallow copying of objects or arrays when you don't have nested structures.
// If you need to create a deep copy (i.e., copy nested objects/arrays as well), you'll need to use a custom deep copy function or another method like JSON.parse(JSON.stringify(obj)).
// ==========================================================================================================================================================
// # Actual implementation of the deep copy
// ==========================================================================================================================================================
// ? write code to make deep copy of the give object
//  make sure does not used the inbuilt method or function to make deep copy
// 1. Function Purpose: 
// The makeDeepCopy function creates a deep copy of an object or an array, meaning it recursively copies all nested objects and arrays, ensuring that no references to the original object or array are maintained in the copied structure.
// 2. Base Case: 
// The function first checks if the input (obj) is not an object or is null. If true, it simply returns the input since primitive types (like numbers, strings, null, undefined, etc.) don't need deep copying.
// 3. Recursive Case:
//  If obj is an object or an array:
//  It initializes copiedValue as an empty array or object depending on whether obj is an array or object.
//  It retrieves all keys of the obj using Object.keys(obj).
//  It iterates through each key, recursively calling makeDeepCopy on each property of obj, and assigns the result to the corresponding key in copiedValue.
//  Return: Finally, it returns the deeply copied object or array.

let person = {
  name: {
    first: "John",
    middle: "H.",
    last: "Doe",
  },
  age: 30,
  contact: {
    email: "john.doe@example.com",
    phone: {
      home: "555-1234",
      mobile: "555-5678",
    },
  },
  address: {
    street: "123 Main St",
    city: "Anytown",
    state: "Anystate",
    postalCode: "12345",
  },
  occupation: {
    title: "Software Developer",
    company: {
      name: "Tech Solutions Inc.",
      location: {
        city: "Tech City",
        state: "Tech State",
      },
    },
  },
  hobbies: ["reading", "traveling", "coding"],
};
// this is function where we have to make deep copy
function makeDeepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }
  const copiedValue = Array.isArray(obj) ? [] : {};
  var keys = Object.keys(obj);
  // console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    copiedValue[keys[i]] = makeDeepCopy(obj[keys[i]]);
  }
  return copiedValue;
}
console.log(makeDeepCopy(person));
// - used of deep copy
// - Deep Copy:
//  This function is useful when you need a new object or array that is completely independent of the original, especially when working with complex nested structures.
// Avoid Mutations: 
// The deep copy ensures that modifications to the copied object do not affect the original one.
