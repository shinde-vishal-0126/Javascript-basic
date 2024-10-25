// MAP()

// MAP() method having the call back function
// map(callback(currentElemnt, indes, array) thisArg)
// call a defined callback function on each element of an array and return an array that contain the result 
// map() method return new array populated with the result of calling a provided function on every element of array
// map() method is itarative method
// (i.e call provided function once to each and every elemnt in an array and construct new array form the result)
// map() method are not a mutating method (becaues it is not modified the origonal array);
// map() method return new resulting array based on the given conditon (oR return new array with transform element)

// EXAMPLE
const RANDOM_NUMBERS = [42, 7, 15, 89, 23, 56, 3, 91, 64, 37];
const data = RANDOM_NUMBERS.map((ele, index)=>{
return ele > 20
})
console.log('Random numbers origional array', RANDOM_NUMBERS);
// above map function return new array wigh return like true
console.log('data',data);
// output
// data [
//     true,  false, false,
//     true,  true,  true,
//     false, true,  true,
//     true
//   ]

//NOTE:
// So in map function if you give any condition regarding expression so map function return new array with based on condtion result like true and false


// Example
const numbers2 = [2,4,9];
const root = numbers2.map((ele)=>{
    return Math.sqrt(ele);
})
console.log(root);


// Example
const KvArray = [
    {key:1, value:10},
    {key: 2, value:20},
    {key:3 , value: 30}
]

const reformatObject = KvArray.map(({key, value})=>{
    return ({[key] : value});
})
console.log('refomatOBject', reformatObject);
console.log(KvArray);


// call map() method on non-array objects
// ?


// Example
// used map() on spare array
// spare array remains spare after map();
console.log([1, , 3].map((x)=>{
    return  x * 2
}));
// in map() method you have perform any condition with empty then it return empty 
// [ 2, <1 empty item>, 6 ]


// using ParseInt() with map()
console.log(["1","2","3"].map(parseInt)); ////output [ 1, NaN, NaN ]
console.log(["1","2","3"].map((str)=>{
    return parseInt(str);
}))

// WHAT IS DIFFERCNCE BETWEEN THE FOREACH() AND MAP() METHOD
// foreach() and map() method are loop through item of the array


// FOREACH() :

//ForEcah() method used to iterate over an array in performing an action on each element of the array
// forEach() method execute the provided function once for each array element
// does not create new array
// forEach does not create a new array and does not inherently modify the original array, --
// although the callback function can modify the elements of the original array.
// forEach() method are return undefined
// forEach() method are not chainable becaues as you might gess it return undefiedn
// (not chainable means that something you can not do with forEach)
// used when you need to perform an action for each ement of an arry but not need a new array

const numbers = [1, 2, 3, 4];
const data3 = numbers.forEach(num => {
  console.log(num * 2);
});
// Output:
// 2
// 4
// 6
// 8
console.log(numbers); 
console.log(data3)


// MAP() :

// map() method used to iterating over an array and transforming each element into new array
// it create new array by applying a provided function to each elemnt (or return new array with transform element)
// Map() method are chainable method (i.e you can attached reduce(), sort(), filter() after performing a map method on an array)
// Map are not mutating metod (does not change the origonal array)
// map method used when you need to transform each element of an array and create new array form the result
const numbers3 = [1, 2, 3, 4];
const doubled = numbers2.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
console.log(numbers); // Output: [1, 2, 3, 4] (original array remains unchanged)