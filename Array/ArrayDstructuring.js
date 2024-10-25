//ARRAY DESTRUCTRING

//array destructuring  is a featue in javascript 
// that allow you to extract or  unpack value form array or properties from object and assign them to variable in a more concise and readable way

// if followg way varaible assignment that enable you to easily access individual element of an array and work them

// const [variable1, varialbe2, ... rest] = array
// destructuring assignment syntax is a javascript expression that makes it possible to unpack value from an array or properties form objects into distnct variable

// WITHOUT ARRAY DESTRCTURING 
// following are lengthy process you defiend each and every element in variable

const info = ['vishal','shinde', 4];
let fName = info[0];
let myLastName = info[1];
let myage = info[2];
console.log(myage);
// insted of that you have to used the arraydestructuring (array divided into different variable);

let [firstName, LastName, age] = info;
console.log(firstName);
console.log(LastName);
console.log(age);

// NOTE :
// if you defied array destructuring it work serial not randomly  (i.e array destructuring always matter Positon)
// By uisng destructuring you have to used variable as array element

// also by using array  destructuring you have to add the element in the array

// add the degree element into the array
let [first, last, year, degree='BE'] = info;
console.log(first);
console.log(last);
console.log(year);
console.log(degree)
console.log(info)

// 1.  BASIC ARRAY DESTRUCTURING
// You can assign value form array to individual variable
const fruit = ['apple','banana', 'cherry'];
const [firstFruit, secondFruit] = fruit;
console.log(firstFruit);
console.log(secondFruit);


// 2.  using rest operator (...rest) in array destructuring
// using rest operator(...) allow you to collect the remaining elements into new array
const [fruits, ...remainingfruit] = fruit
console.log(fruits);
console.log(remainingfruit);


// 3. Skipping Element 
// you can skip element in the array by leaving empty slot in the destructuring pattern 

const color = ['red','green', 'blue'];
const [ , , thiredColor ] = color
console.log(thiredColor);

// 4. Default Value
// you can provide the defalut valeu for variable in case the corresponding array element is undefined

const numbers = [1,2];
const [firstNumber, secondNumber, ThirdNumber=3] = numbers;
console.log(firstNumber);
console.log(secondNumber);
console.log(ThirdNumber) // default value

// 5 swapping variable:
// Array destructuring can be used to easily swap the value of two variables without the need for temporary variable

let a= 5;
let b = 10;
[a,b] = [b,a];
console.log(a);
console.log(b);

// 6 Nested array destructuring 
// you also destructue the element from nested arrays 
const nestedArry = [1,[2,3]];
const [firstValue, [secondValue, thirdValue]] = nestedArry
console.log(firstValue);
console.log(secondValue);
console.log(thirdValue);


// CONCLUSION
// array destructuring is a powerful feature in javascript that simplifies the working 
// with the array and enhance the readability and provide a consious way to extract and work wigh the array element.