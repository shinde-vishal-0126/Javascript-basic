//ENTRIES()

// entries() object return new array iterable object 
// that object contain the key/vlaue pair for each index in the array
// return new iterabel iterator object
// This method is perticulary usedful when you need to iterage over both the indices and value of an array

const a = [1,2,3,4,5];
for(const [index, element] of a.entries()){
    console.log(`Then index is ${index} and value are ${element}`);
  
}

// using for of loop
const array = ['a','b','c'];
const arrayEntries = array.entries();
for (const  entries of arrayEntries){
    console.log(entries);
}

//iterating spare array
for(const element of [1, ,'a'].entries()){
    console.log("element",element);
}

// iterationg the extries() method on non-array objects
const arrayLIke = {
    length:3,
    0:"a",
    1:"c",
    2: "d",
    3:"e", // ignored by entries() since length 3
}
for(const entry of Array.prototype.entries.call(arrayLIke,)){
    console.log(entry);
}