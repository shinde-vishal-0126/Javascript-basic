
//  # Increment Operator and Decrement Operator : 

// Two type of Increment and Decrement operator
// 1. Post-Increment  (x++)   or pre-increment (++X);)
// 2. Post-Decrement  (X–)   or pre-Decrement :; or (--x)

// #. Increment : 
// 1.Increment operator means add once to its operand and run the value before or after the increment depending upon where the operator place like post or pre
// Post-Increment or postFix  : 
// 1.Def : if used postFix or post increment  ( with operator after operand  for : ex.   x ++ 
// 1.PostIncremented  operator  increment and return the value Before incremented.
Example 
//post increment 
let num =10;
let num2 = num++;
//here we have to use an operator after the operand is called as post-increment.
console.log(num);//11
//in post increment operator expression value executed first by using the original value.
console.log(num2) // 10
// Postfix or post increment operator means the expression value evaluated first using the original value of the variable and then the variable increment value ( increased.)
Example:
let num4 = 30
let num21 = num4 ++;
console.log(num21);//30 -> here expression executed first(before incrementing the value) with original value
console.log(num4); // 31 -> increment the original value by one after execution the given expression

let val1 = 50
let val21 = val1 ++ + 5;
console.log(val21); // 55 -> here expression execute with original value
console.log(val1); // then increment original value by one.


// 2.pre-Increment or PreFix operator : 
// 1. If you used Prefix operator ( operator Before operand : ex. ++x);
// 2. The pre increment operator  first increment and then return the value after incrementing
Example 
let num3 = 30
let num23 = ++num;
console.log(num23);//31 -> here expression executed after(after incrementing the value) with incremented new value
console.log(num3); // 31 -> increment the original value by one after execution the given expression

let val = 50
let val2 = ++val  + 5;
console.log(val2); //56-> here expression execute with incremented value
console.log(val); // then increment original value by one. 51;

 let no11 = 10;
 let no1 = ++no;
 console.log(no);//11
 console.log(no11) //11

// Prefix or pre-increment operator men's variable value is incremented first and then the expression is evaluated using the new value.

// # Decrement  : 
// The decrement(--) operator decrement (subtract one from  ) its operand and return the value before or after the decrement so its depends on where the operator is placed 

// 1. Prefix or preIncrement operator :  
//  Postfix or postIncrement operator : 

//  Prefix or preIncrement operator :
// 1.In prefix or pre increment  decrement operator  before its operands(--x)
//  The prefix or pre-decremented  operator decremented value and  return value after decrement.
Example 

//decremented 
//pre-decrement (first value decremented by one then the evaluate expression)
let x1 = 3
//in pre-increment operator defined before the operand
let y1 = --x; // here decrement the value by one first 
console.log(x1);//2
console.log(y1);//2 // decremented value first then execute the given expression

let x21 = 3n
let y21 = --x2 + 1n
console.log(x21) // 2n
console.log(y21) // 3n decremented first then execute the expression

let no111 = 50
let no211 = --no + 5;
console.log(no111); // 49
console.log(no211);// 54

// In the Prefix Decrement or preDecrement  operator means the variable value is decremented first and then the expression is evaluated using the new value of the variable.

//  Postfix or post decremented : 

//  2. postFix Decrement or Post-Decrement  : 
// 1. In postFix decrement operator  after operand (x – - );
// 2. The post decrement operator Decrement  but return value before decremented.

Example : 
//decremented 
//post-decrement ( expression execute with original value then return the decrement value)
let x = 3
//in pre-increment operator defined before the operand
let y = x--; // here decrement the value by one first 
console.log(x);//2
console.log(y);// 3 expression executed with original value then return the post decrement value

let x2 = 3n
let y2 = x2-- + 1n
console.log(x2) // 2n
console.log(y2) // 4n  function expression execute with original value then decremented the value

let no = 50
let no2 = no-- + 5;
console.log(no); // 49
console.log(no2);//55

// In Postfix Decrement operator expression is evaluated first using the original value of the variable and then the value of the variable is Decrement (Decrement)

