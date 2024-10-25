//Array.prototype.at(index);

// at() method take an integer value and return the item at that index.
// also positive and negative integers (-ve integers count back from the last item in the array)

//example1 :
const array = [5,6,7,8,13];
// Here at method return item of the given index
// if  the give index is not match  it return undefined
const findItem = array.at(5);
console.log('findeItem',findItem);

//example
const find = array.at(-2); // count back from element
console.log(find);

// example 
// return the last value of the array
const cart = ['apple','banana','pear'];
function lastElement(arr){
    return cart.at(-1)
}


// comparing method
const colors = ['red','green','blue'];
const last = colors[colors.length -1];
console.log(last);

//  calling at() method on not array object 
const obj ={
    length : 2,
    0:'a',
    1:'b',
    2:'c'
}
console.log(Array.prototype.at.call(obj,0));