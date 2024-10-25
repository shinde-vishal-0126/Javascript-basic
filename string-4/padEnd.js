// PADEND():

// # padEnd(targetLength [, padString])

// 1.The padEnd() method in JavaScript is used to pad the end of a string with another string (or characters) until the resulting string reaches a specified length.(repeated if needed)
//  2.  so resulting string reaches a give length (Return a String of specified targetLength with the padString  applied at the end of the current str.)
// 3. padding is applied form the end (right ) of the current string
// 4. if padding value is less then the current string's length  then current string is returned as is
// 5. padding default value is single space
// 6. Padding is added at the end of the string to meet the desired targetLength.

// Example 1 of basic padding
const str = 'Hello';
console.log(str.padEnd(10));         // "Hello     "
console.log(str.padEnd(10, '!'));    // "Hello!!!!!"


//  example 2padding with specific string
const str1 = '123';
console.log((str1.padEnd(8,0)));
console.log(str1.padEnd(8, 'abc'));

// if the target length is less the string length
const str2 = 'Hello, World!';
console.log(str2.padEnd(5));   // return as it is  "Hello, World!"


const items = [
    { name: 'apple', price: 1.25 },
    { name: 'banana', price: 0.75 },
    { name: 'cherry', price: 2.50 }
  ];
  
  for (const item of items) {
    const name = item.name.padEnd(10, ' ');
    const price = item.price.toFixed(2).padEnd(5, ' ');
    console.log(`${name} ${price}`);
  }
  