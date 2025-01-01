// map polyfill

// map having call back function with 3 argument first is currentEle, index and third one is array 
// map((ele,index, arr)=>{
    // console.log() 
// })

Array.prototype.myMap = function(callback){
    // mep method return new array to store resulting element then create empty arry 
    let temp = [];
    for(let i=0;i<this.length;i++){
        temp.push(callback(this[i], i , this))
    }
    return temp;
}

const num  = [1,2,3,4,5,6]
const mul = num.myMap ((ele, index, arr)=>{
    return ele * ele
})
console.log(mul)




// what is differences between the mep() and filter
// map () :
// map return each and every value and modified according to Given callback condition ( i.e it is transform and array based on the given test function)

// filter() : 
// filter method only those value which satisfied the given condition (or give test function ) of the callback function not each and every element (i.e return only those element that satisfied the given condition)