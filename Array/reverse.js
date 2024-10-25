// REVERSE()

// reverse() method in javascript is used to reverse the element of an array in place
// reverse() method chane the origon array
// reverse() method return the refrences to the same array with its elements reverse.
// note array revrse in place and no copy created (origional array change and having with the same refrences)


// example 
const words = ['apple', 'banana', 'cherry'];
const reversedWords = words.reverse();
console.log(reversedWords); // Output: ['cherry', 'banana', 'apple']
console.log(words); // Output: ['cherry', 'banana', 'apple'] (The original array is also reversed) (also return refrences to the same array) 
// also return the refrences to the origonal array


// Example 
const objects = [{ id: 1 }, { id: 2 }, { id: 3 }];
const reversedObjects = objects.reverse();
console.log(reversedObjects); // Output: [{ id: 3 }, { id: 2 }, { id: 1 }]
console.log(objects); // Output: [{ id: 3 }, { id: 2 }, { id: 1 }] (The original array is also reversed)

//usign reverse in spare array
// spare array always safe after calling the reverse method;
// empty slot copind over their respective new indices as empty slot
console.log([1,2, , 3].reverse());
