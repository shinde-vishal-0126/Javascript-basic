// EVERY() :

// every((ele, index, array));
// every() having callback function
// every() method test weather all element in an array pass to provided function 
// it return boolean value True and false
// every() are iterative metod
// every() does not modified the origonal array
// if the predicated function return ture for evary array element and false otherwise

// Example :
const isBelow = ((currentValue)=>{
    return currentValue > 40
});
const b = [100,340,56,400,290,45];
const value = b.every(isBelow);
// it return true if and only if all the value satisfied the condition if one of the value not
// satisfied condition then it return false
console.log(value);


// Example : 2
// check array is the subset of another array
const subset = [1,2,3,4,5,6,7,] 
const subset1 = [5,6,7];
const isSubset = ((subset, subset1)=>{
  return  subset1.every((element)=>{
     return   subset.includes(element)
    })
})
// here it return ture because all the element of subset1 presnet in the subset
console.log(isSubset(subset, subset1))


// Example :3
console.log([1, ,2].every((element)=>{
    return element !== undefined
})) // true


// Example : 4
console.log([2, ,2].every((ele)=>{
    return ele === 2;
}))// true