
//| Differences between call(), apply() and bind() method
//! call():
// execute function immediately
// Accept argument individually

//! apply():
// execute function immediately
// accept argument an an array or array like object 

//! bind():
// return new function that can be call later
//  Accept argument individually but does not invoked function immediately
 


//| output based question
// !ex
const person = {
    name:'vishal',
   
}
function sayHi(age){
    console.log(`${this.name} is ${age} `)
}
console.log(sayHi.call(person, 28))
console.log(sayHi.bind(person,29)); // it return function which we can call later (return following function)
// function sayHi(age){
//     console.log(`${this.name} is ${age} `)
// }

//! call with function inside object 
const age = 10;
var person1 = {
    name:'vishal',
    age:20,
    getAge : function(){
        return this.age
    }
}
var person2 = {
    age:28
}
console.log(person1.getAge.call(person2))


//! call printAnimals such that it print all animals in object 

const animal = [
    {species: 'lion',name: 'king'},
    {species:'whale', name:'Queen'}
];

function PrintAnimal(i) {
    this.print = function() {
        console.log("#" + i + " " + this.name + ":" + this.species)
    }
    this.print();
}
// here we need to loop through the data and pass index as argument to printAnimal function
for(let i=0;i<animal.length;i++){
    PrintAnimal.call(animal[i], i)
}

//? how to append an array to another array using apply method with push
 let array = [1,2,3];
 let array2 = [4,5,6,7]
//  array.push(array2); // it create new array inside the array  like [1,2,3,array(4)]
//   console.log(array)
 // by using apply method 
 array.push.apply(array,array2)
 console.log(array)
 

 // using apply method enhances the built in function like Math.max
 let arr = [10,20,30,40,50];

 console.log(Math.max(arr)) ; // it return NaN because Max method require individual element not array of element
//  like
console.log(Math.max(...arr))

// so using the apply method we have to enhance the built in method 
console.log(Math.max.apply(null, arr))


//! bound function 
function f(){
    console.log(this) // context is hard fix like window object 
}
let user = {
    g:f.bind(null)
};
user.g()
//  return to the window object 



// ! bind chaining
function f() {
    console.log(this.name)
}
f = f.bind({name:'vishal'}).bind({name:'akshu'})

f(); // return vishal
// once function is bind to the perticular object it always bound to that perticular object  so bind() chaining does not exists


//| how to do call(), apply() and bind() method with arrow function:
// we can not manipulate the the context of the arrow function  with the help of call() apply() and bind() method 
// because arrow function does not have its own  this context it refers to the widow object 
