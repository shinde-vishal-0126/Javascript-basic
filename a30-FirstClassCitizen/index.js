
//! First Class function :

//? what is first call function in javascript
// JavaScript, a first-class citizen (also known as a first-class object or first-class function)
// refers to entities that can be treated as values in the same way as other types like numbers, strings, and objects. 
//n particular, functions are considered first-class citizens in JavaScript. This means that functions can:
//1 Be assigned to variables
//2 Be passed as arguments to other functions:
//3 Be returned from other functions:
//4 Be stored in data structures like arrays or objects:
//* in language function can be treated as variable  in this cases function can pass argument to another function and manipulate and return those functions when ever variable can do everything function can do.
//Def:
//! the first call function means  that function can be treated as value, assigned to variable and passed around as arguments.( First-class functions when functions in that language are treated like any other value

//! key point of first class function :
//1. First class function is just concept or language feature where function are treated and first-class-citizens
//2. function can be assigned to variable (call as function expression);
function sayHello(){
    console.log('welcome')
}
const result1 = sayHello(); // here function assigned to the variable
//3. function pass as an argument to other function (it is call back function)
//4. a function return form another function 
//5. First class citizen is a javascript term that refers to the characteristics of the programming language or feature that treats a particular entity as equal to the another entity in terms of how it can be manipulated and used within the language
//6. first class function means in language where function can treated like variable or value so that function call as first class citizen
//7. also function can pass into another function can be basically everything that variable and value done function also do.
//this is called as first class citizen It allows for flexible and expressive code, making it easier to write modular and reusable code.

// ex
function square(num){
    return num * num;
}
//so here we have to pass square function inside another function as like variable so we have to manipulate and return from that function 
function DisplaySquare(fun){
   console.log( fun(5))
}
DisplaySquare(square)

//! first class citizen having some following properties
//1.function can be assigned to the variable (called function express);
//you can assign function to a variable just like you would with any variable or data type 
 const myFunction = function(){
    // here function assign to the variable
    console.log('done')
 }
 //2 Function can be pass as an argument to other function 
//You can pass function as an argument to another function 
//that allowing for the creation of the higher order function that take function as input 
function Operation(add,x,y){
    return add(x,y)
}
function add(x,y){
    return x* y
}
const result = Operation(add,5,5);
console.log(result);

//4.Function can return form the another function 
// function can be return another function  or function can be return from another function
let number = 10;
function multiply(factor){
    // here we have to create multiply function and it return another function
    return function(number){
        const result = number * factor
        console.log('result', result);
    }
}
multiply(2)(4);
// 4 function can be stored in data structure
// also you have function stored in data structure like array or object

// 5 javascript classes are first class citizen means that you can pass a class into function and return it from function and assign to it to a variable
//First defined a factory function that take a class expression as an argument and return the instances of class
function factory(aClass){
    return new aClass();
}

//Second pass unnamed class expression to the factory function and assign return to greeting variable 
let greeting = factory(class{
    sayHi(){
        console.log('hi')
    }
})
//The class expression have method called  sayHi()  and the greeting variable is an instances of the class expression
//Third call the sayHi() method on the greeting object 
greeting.sayHi()





