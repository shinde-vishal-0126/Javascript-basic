// WHAT IS CHAINABLE METHOD ?

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
