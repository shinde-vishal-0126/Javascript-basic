//  #Comparison Operator : 

// 1.Comparison operator compares its operands and returns a logical value Based on whether the comparison is true or false. (logical value is nothing but true or False.
// 2 Operands can be numerical, string,local or object value
// 3 String are compared based on standard lexicographical ordering. Using unicode values. 

//  Type of comparison operator  :
// 1. Equal (==); ==> it does implicit automatically conversion form string to number

// 2. notEqual(!=);
// 3. StrictEqual(===); (strict equality) need to explicitly conversion form string to number (manually using + operator or parseInt)
// 4. Strict Not Equal(!==);
// 5. Greater Than (>)
// 6. Greater than or equal (>=);
// 7. Less than (<)
// 8.Less than or equal (<=)

Examples  : 
//comparison operator 
let a = 10;
let b= 20;
console.log('comparison operator return boolean value true or false')
console.log('equal : ', a == b); // false
console.log("not equal :", a!=b) //true
console.log("Strict  Equal :", a === b); // false
console.log( "Not Strict Equal :",a !== b) // true
console.log('Grater:', a > b); //false
console.log('less :', a < b) // true
console.log('Greater than or equal :', a >= b); // false
console.log('less than or equal :' , a <= b) //true

