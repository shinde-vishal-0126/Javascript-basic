// ARRAY.KEYS();

// array.keys();
// the array.keys() method return a new array, iterator object that contains the key for each index in the array
// it return new  array iterable objects that contain key (indices) for each element in the array
// this method perticularly used when you need to iterate over the indices of an array rather then the element themselves

// keys() method does not ignore empty slots in spare array 
// it return the key(indices) for all slots including empty onec 

// Example 
const array = ['a', 'b', 'c'];
const iterator = array.keys();
for (const key of iterator) {
  console.log(key); // Output: 0, 1, 2
}

for(concat in array){
    console.log("concat",concat);
}

// using Array.keys() with for of loop
const array1 = [10, 20, 30];
const keys = array1.keys();
for (const key of keys) {
  console.log(key); // Output: 0, 1, 2
}


// Example 
const array2 = ['x', 'y', 'z'];
const keys1 = Array.from(array1.keys());
console.log(keys1); // Output: [0, 1, 2]

// example 
const array4 = [10, , 20, , 30];
const keys4 = array4.keys();
// The keys() method does not ignore empty slots in sparse arrays. 
// It returns the keys (indices) for all slots, including empty ones.

for (const key of keys4) {
  console.log(key); // Output: 0, 1, 2, 3, 4
}
4