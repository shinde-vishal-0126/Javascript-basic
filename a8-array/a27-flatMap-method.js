// FLATMAP()
//The flatMap() method in JavaScript is a powerful array method that combines the functionality of map() and flat() (with a depth of 1). 
// flatMap() is new array instances method that combine flat() and map() it useful when calling function that return an array in the map  callback but you want to your resulted array to be flat
//It allows you to first apply a mapping function to each element of an array and then flatten the result into a single array.
// Flatmap() meted return new array formed by applying a give callback function to each element of the array 
// - and flattering the result of array by one level
// i.e return new array with each element being the result of callback function and flatten by a depth of 1
// flatMap() method is iterative method
// flatMap() method identical to map(callback(ele,value, array)) and followed by flat(1) for each element 
// (so flatmap() method combine the functionality of map() and flat() if first applied mapping function to each element in the array and then flattern the result by one lever)

// original array does not change 
// flatmap() map are non mutating method


//Example: 1
const arr = [1,2,1];
const res = arr.flatMap((num)=>{
    return num == 2 ? [2,2,3] : 1
}) 
console.log(res); // [ 1, 2, 2, 3, 1 ]

// Example: 2
const arr1 = [1,2,3,4];
const res1 = arr1.flatMap((ele)=>{
    return [ele * 2]
})
console.log(res1);// [ 2, 4, 6, 8 ]


//Example: 3
// lets Generate list of word form list of sentences
const arry19 = [" it,s sunny in","","california"];
const sp = arry19.map((ele)=>{
    return ele.split(' ');
})
const array2 = arry19.flatMap((ele)=>{
    return ele.split(' ')
})
console.log(array2);
console.log(sp);


// Example 4
// we want to remove all the negative numbers
// and split the odd numbers into an even numbers and 1

const all = [5,4,-3,20,17,-33,-4,18];
const result = all.flatMap((n)=>{
    if(n< 0){
        return []
    }
    return n % 2 === 0 ? [n] : [n-1, 1];
})
console.log(result)


// using flatMap() on spare array
console.log([1,2, ,4,5].flatMap((x)=>{
  return   [x,x*2]
}))



// WHAT IS DIFFERENCE BETWEEN FLAT() AND FLATMAP()


// FLAT(depth) :
// FLAT() method flattern nested array into single array  
// create new array with all sub-array element concatenated with specified depth
// flattern nested array upto specified depth
// does not modified original array instead return new array
// flattern an array by  concatenating the element of sub array into the parent array up the specified depth
// flat() method used when you have deeply nested array and need to flattern it to a certain depth
//  in flat() method allow you to specify the depth of flattering



//FLATMAP() :
// Flatmap method first map each element using the mapping function and then flattern by result one level
// it combination of flat() and map();
// first applied the mapping function to each element of the array 
// flattern the resulting array by one level
// does not alter the original array , instead that return new array
// when you want to map and flattern in single step 
// in flatMap() method automatically flattern the result by one lever after mapping



// Key Features:
// Combines map() and flat(1): Avoids the need to chain these two methods manually.
// Single-Level Flattening: Flattens only one level deep, even if the mapping function returns nested arrays.