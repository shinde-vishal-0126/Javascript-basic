// ARRAY.ISARRAY():

// Array.isArray() 
// static method 
// This method determine weather the passed value is an array 
// it return true if value is an array otherwise it return false
// false is always returned if the value is a TypedArray instance
// its return true if value is created using array literal or array constructor
// array.isArray() also reject the object 

console.log(Array.isArray([]));
console.log(Array.isArray([1]));
console.log(Array.isArray(new Array()));
console.log(Array.isArray(new Array("a","b","c","c")));
console.log(Array.isArray(new Array(3)));

// Little fact : Array.prototype itself is an array
console.log(Array.isArray(Array.prototype));


console.log(Array.isArray());
console.log(Array.isArray({}));
console.log(Array.isArray(null));
console.log(Array.isArray(undefined));
console.log(Array.isArray(17));
console.log(Array.isArray(true));
console.log(Array.isArray(false));
// This is not an array because it was not create using the array literal or Array constructor
console.log(Array.isArray(new Uint8Array(32)));

// instancesOf vs Array.Array.isArray();
const arm = new Array(1,2,3);
console.log(Array.isArray(arm));
console.log(arm instanceof Array);
