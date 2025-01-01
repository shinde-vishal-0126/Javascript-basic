//| bind()
// bind() method create new function with specified this value and optionally prefilled argument, it does not invoke the function immediately but return new function which is can be call later.
// instead of calling the function immediately it provides another reusable function which we can call later on to execute give task related to function
// 

const person ={
    firstName:'vishal',
    lastName:'shinde'
};

function fullName( getting, message){
console.log(`${getting}, ${message}, ${this.firstName} ${this.lastName}`)
}

const newFunction = fullName.bind(person, 'hi');
console.log(newFunction) // this is function return copy of the fullName function which an be invoked later
newFunction("!")