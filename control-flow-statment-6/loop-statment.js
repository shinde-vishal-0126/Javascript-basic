// Loop statement  (we have to used loop to perform repeated action)
// Def : In programming some time we need to execute a block of code repeatedly while some condition is true.
// Loop statement used to execute a set of instructions in repeated order.
// Execution of a set of instructions depends on a particular condition.
// Used to iterate the loop
// Loop used to iterate part of program several time if the number of iteration is  then it recommended used loop

// Type of loop
// 1. While loop (loop a block based on  specific condition first check the condition and based on that run the block of code )
// 2. Do-while loop (while loop based which run atLeast once then check the condition later)
// 3. For loop (perform repeated operation in the basis of a condition )
//  4. For-in-loop (for in loop that help in looping the keys of the object )
//  5. For-of-loop (for of loop help in looping the object by value  )



// 1.# While loop statement 
// The while loop statement creates a loop (iterate ) that executes a specified statement as long as the test condition evaluates to true.
// Note :
// If the condition never become false the loop will never end and thing might crash the runtime 
// Iterate the element infinite number of time 
// It used if number of iteration not known
// It is control flow statement that execute the part of the  program repeatedly on the basis of given boolean condition 
// If the number of iteration is not fixed it is recommended to use a while loop .
// Example 
let n =0
while(n <= 10){
    console.log(n)
    n++
} //1,2,3,4,5,6,7,8,9,10
// So while loop used when the number of iteration not known



// 2.# Do-while loop 
// 1. So do while  loop statements execute at least once and then check the condition after executing at least one (condition check at the end.)
// 2. Iterate the element an infinite number of times like a while loop but code is executed at least once whether the condition is true or false.
// Example 
var num = 0
do{
    console.log(num);
    num++;
}while(num <=10)

// Basically do while loop is control flow statement that execute a part of program at least one and further execution depends upon the given boolean condition
// If the number of iteration not fixed and you must have to  execute the at least one it is recommended  to use do while



// 1.@  Differences between the while loop and do while loop ?

// The while loop and do-while loop   both are control flow structures in programming that allow you to repeat blocks of code multiple times; they have key differences in their value loop condition. 

// 1. While loop 
// - Used to repeat a section of code or block of code  an unknown number of times until the specific condition met.
// - In while loop condition check first then statement is executed
// - It might occur if the statement is executed zero time if the condition is false.
// - While loop is entry controlled loop 
// - Variable in condition is initialize before the execution of the loop


// Do-while loop 
// - This loop executes a block of code at least one time and then repeatedly executes the block or not , depending on a given boolean condition at the end of the block.
// Statement execute at least once then  after  that condition is checked
//  - It not might occur the statement is executed zero time it execute at least one time
// - do - while loop is exit controlled loop
// Variables may be initialized before or within a loop.


// Conclusion is :

// While loop test the condition before entering the loop 
// do - while loop  test the condition  after executing the loop body at least one




// #.3 For loop 
// - Repeat the specific block of code a known number of time 
// - Iterate the number of elements for a fixed number of times.
// - It should be used if the number of iterations is known.
// - for(initialization, condition, (increment or decrement) )
//  -Var num =10; num <10 ; i++   
// Example:
for(let i=1;i<=5;i++){
    console.log(i);
} // 1,2,3,4,5


// - For loop iterate the par;t of program several time if the number of iteration is fixed
// - For loop allows you to efficiently write  a loop that needs to execute a specific number of times    
// - But in the initial value  like i = 0 execute only the first time .
// I.e for loop having the  three statement initialization, condition, and  increment or decrement 
// - So the first statement executes only one second statement  check condition before the execution loop body and the third  statement executes after the loop body execution.
// - In for loop initially or first time not check iteration part of the for loop.


// # 4.For in loop 
// - If you want to loop the key of an object then you have to use the for in loop.
// - For in statement used to loop through the properties of an object 
// - It support both iterable or non iterable object 
const object = {
   vishal : 20,
   akshay:40,
   vinay : 50,
   ak :90
}
for (mark in object){
   console.log(mark);
}
// vishal
// akshay
// vinay
// ak


// #.5  For of loop 
// for of loop used to loop the value of an object 
// or for of statement loop through the value of an iterable object
// it not support to the normal object he want iterable object like string or array 
const object1 = {
   vishal : 20,
   akshay:40,
   vinay : 50,
   ak :90
}
for (mark of "vishal"){
    console.log(mark);
 }
 // It print v i s h a l


for (mark of object1){
   console.log(mark);
}
// TypeError: object is not iterable
 
// Note: 

// but if you want to get only value you have to used this approach using the Object.values() property 
for(mark of Object.values(object)){
    console.log(mark);
}//20
// 40
// 50
// 90

// also if you want ot get the kay and value ot the give non iterable object you have to used the object.entries() property Objet 
for(const [key, value] of Object.entries(object)){
    console.log(key, value)
}
//output
// vishal 20
// akshay 40
// vinay 50
// ak 90



//  2. @ what is differences between for in loop and for of loop ?
// 1.  For...in Loop:
// - Use case: The for...in loop is used to iterate over the enumerable properties (keys) of an object or the indices of an array. 
// example :
const obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
  console.log(key); // Logs: 'a', 'b', 'c'
}

const arr = [10, 20, 30];
for (let index in arr) {
  console.log(index); // Logs: '0', '1', '2'
}
// It is mainly used for iterating over object properties (keys) or the indices of an array. It does not access the values directly but instead provides the key or index.

// 2.  For...of Loop:
// Use case: The for...of loop is used to iterate over iterable objects such as arrays, strings, Maps, Sets, etc. It loops over the values of an iterable.
const arr1 = [10, 20, 30];
for (let value of arr1) {
  console.log(value); // Logs: 10, 20, 30
}

const str = "hello";
for (let char of str) {
  console.log(char); // Logs: 'h', 'e', 'l', 'l', 'o'
}
// It is specifically used for accessing the values of arrays, strings, or other iterable objects. It provides a more natural way to iterate over elements of an array or collection without worrying about the index.

// conclusion
// for...in iterates over keys (property names) in objects or indices in arrays.
// for...of iterates over values in iterable objects (arrays, strings, Sets, Maps, etc.)
// for...in is typically used for objects or cases where you need the keys or property names.
// for...of is best for iterables (like arrays, strings, Maps, Sets) when you need the actual



