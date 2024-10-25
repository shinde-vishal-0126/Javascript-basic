// # Logical Operator : 

// 1. Def : logical operators are typically used with boolean (logical value) when they return a Boolean value.
// 2. logical operator used with boolean  value like true or false

// type of logical operator
// 1. logical AND(&&) --> called as conjunction
// 2.logical OR (||)  --> called as disjunction 
// 3.logical NOT (!) --> call as Negation



// 1. Logical  AND (&& ) operator : 

// AND
//  0 -> 0 = 0
//  0 -> 1 = 0
//  1 -> 0 = 0
//  1 -> 1 = 1

// Logical && operator is called logical conjunction
// The logical And operator (logical conjunction) for a set of operands is true if and only if all operands are true.
// Both operands are true if  both operands are true.
Example 
var a = 30;
var b = 10;
console.log(a > b) //true
console.log(a > b && b < a);//true


// 2. Logical (||) OR Operator : 

// OR
//  0 -> 0 = 0
//  0 -> 1 = 1
//  1 -> 0 = 1
//  1 -> 1 = 1


// 1. The logical or (||)  called ad (logical disjunction) for 
// 2. a set of operands is true if any only if one or more of its operands is true.
// 3. When used with boolean value  return true if either one of operands is true if both are false then return false.
Example: 
var a = 30;
var b = 10;
console.log(a > b) //true
console.log(a > b || b > a);//true

// 3 .Logical Not Operator 
//  0 -> 1 = 0
//  1 -> 0 = 0


// 1. The Logical ( ! ) operator is called as logical complement, negation .
// 2. Negation means truth to falsity and vice-Versa.
Example 
var a = 30;
var b = 10;
console.log (!(a > b))  // it return  true but negation it return the false
console.log( !(a < b) || b < a);  // it return false but negative return true

// if you have to perform logical operation with  and , or  logical operator with string if string is false then it return false sting if the string true then it return the true string.






