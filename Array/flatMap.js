// FLATMAP()

// Flatmap() metod return new array formed by appling a give callback function to each element of the array 
// - and flattering the result of array by one level
// i.e return new array with each element being the result of callback function and flatten by a depth of 1
// flatMap() method is itrative method
// flatMap() method identical to map(callback(ele,value, array)) and followed by flat(1) for each element 
// (so flatmap() method combine the functionality of map() and flat() if first applied mapping function to each element in the array and then flatens the result by one lever)

// origional array does not change 
//

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
// and split the oadd numbers into an even numbers and 1

const all = [5,4,-3,20,17,-33,-4,18];
const result = all.flatMap((n)=>{
    if(n< 0){
        return []
    }
    return n % 2 === 0 ? [n] : [n-1, 1];
})
console.log(result)


// usign flatMap() on spare array
console.log([1,2, ,4,5].flatMap((x)=>{
  return   [x,x*2]
}))



// WHAT IS DIFFERENCE BETWEEN FLAT() AND FLATMAP()


// FLAT(depth) :
// FLAT() method flattern nestd array into single array  
// create new array with all sub-array elemeent concatenated with specified depth
// flattern nested array upto specified depth
// does not modified origonal array insted return new array
// flattern an array by  concatenating the elelment of sub array into the parent array up the specified depth
// flat() method used when you have deeply nested array and need to flatern it to a certain depth
//  in flat() method allow you to specifiy the detpth of flattering



//FLATMAP() :
// Flatmap method first map each element using the mapping function and then flattern by result one level
// it combination of flat() and map();
// first applied the mapping function to each element of the array 
// flatern the resulting array by one leverl
// does not alter the origional array , insted that return new array
// when you want to map and flattern in single step 
// in flatMap() method automatically flattern the result by one lever after mapping