//! apply()
// apply() method invoke the function with specified this value and provide argument as an arry or like like object 
// function.apply(thisArg, [arguments])
const person = {
    firstName:'vishal',
    lastName:'shinde'
}
function fullName( getting, message){
console.log(`fullName is ${getting} ${message} ${this.firstName} ${this.lastName}`)
}
fullName.apply(person,['hello', 'how are you']) // here return an argument as an array 