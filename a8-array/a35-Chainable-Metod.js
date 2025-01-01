// WHAT IS CHAINABLE METHOD ?
// Method chaining is a programming technique in which multiple methods are called on the same object or value in a single line of code, 
// with each method call performing an operation and returning the same object or a modified version of it.

// Chainable method is nothing but allow us to run multiple methods on the same element within a single segment
// map(), filer(), and reduce() method allow the chaining (so we can chain another function in-front of this function)


var student = [
    { mark: 99 },
    { mark: 65 },
    { mark: 23 },
    { mark: 21 },
    { mark: 89 },
    { mark: 90 },
    { mark: 98 }
];
const total = student
    .map((ele) => {
        if (ele.mark < 90) {
            console.log("ele.mark..", ele.mark)
            ele.mark = ele.mark + 20;
            console.log(ele.mark)
        }
        return ele;
    })
    .filter((ele) => {
        console.log(ele)
        return ele.mark > 100;
          })  .reduce((acc, curr) => {
            return acc + curr.mark;
         }, 0);
     console.log(total);
     

//  If you perform different operation in single array and produced the expected result you have to used chaining concept 
// So basically map function used for chaining the different methods and produced the required result.


// Array all chaining method:\
// map(): Transforms each element in the array.
// filter(): Filters elements based on a condition.
// reduce(): Reduces the array to a single value.
// concat(): Combines multiple arrays or values into one.
// sort(): Sorts the array elements.
// forEach(): Executes a function on each element (does not return the array but can still chain with other methods).



// String chainable method:
// toLowerCase(): Converts a string to lowercase.
// toUpperCase(): Converts a string to uppercase.
// trim(): Removes whitespace from both ends of a string.
// replace(): Replaces part of the string.
// substring(): Extracts a part of a string.



// Benefits of Method Chaining:
// Concise Code: Makes the code more readable by reducing the need for intermediate variables.
// Improved Readability: It expresses the intent in a more fluid and natural way, often resembling English phrases.
// Flexibility: It allows operations to be performed in a sequence, reducing clutter in the code.