// First class citizen 
//*  First class citizen is a javascript term that refers to the characteristics of the programming language  or feature that treats a particular entity as equal to the another entity in terms of how it can be manipulated and used within the languange
//* first class functin measn in language where function can treated like variable or value so that function call as first class citizen
//* also function can pass into another function can be basically everything that variable and value done function also do.
//this is called as first class citizen It allows for flexible and expressive code, making it easier to write modular and reusable code.


function square(num){
    return num * num;
}
//so here we have to pass square function inside another function as like varible so we have to manipulate and return from that function 
function DisplaySquare(fun){
   console.log( fun(5))
}
DisplaySquare(square)


// first class citizen having some following properties
//1.function can be assigned to the variable (called function express);
//you can assign function to a variable just like you would with any variable or data type 
 const myFunction = function(){
    // here function assign to the variable
    console.log('done')
 }

 //2 Function can be pass as an argument to other function 👍
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

// 3.Function can return form the another function 
// function can be return another function  or function can be return from antoher function
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
// also you have function stored in data structor like array or object

// 5 javascript classes are first class citizen means that you can pass a class into function and return it from function and assign to it to a varialble
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





