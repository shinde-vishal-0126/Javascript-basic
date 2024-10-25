// THIS OBJECT

// -  This object is that it contains the current context.
// - This object can have different values depending on where it is placed 

console.log(this); 
// - in node environment this refers to the empty object 
// - but in Browser it refers to the window object


var myName = 'vishal'
function MyName(){
    console.log(this.myName)
}
MyName()


const obj = {
    myAge : 27,
    myName (){
        console.log(this)
    }
}
obj.myName()


// This function not work with the arrow function 
// In traditional functions (function keyword): The value of this is determined by how the function is called, i.e., the calling context (e.g., an object or event handler).

// In arrow functions: Arrow functions do not bind their own this. Instead, they inherit this from the surrounding lexical context (the scope in which they were defined).

const obj1 = {
    name: 'Alice',
    greet: () => {
      console.log(this.name);  // 'this' refers to the surrounding scope, not 'obj'
    }
  };
  
  obj1.greet();  // Output: undefined (or window object in a browser)
  // the arrow function inherits this from its lexical scope, which is the global scope in this case (or outer function if there is one). Since there is no name property in the global scope, this.name is undefined.


  function chai(){
    let username ='vishal'
    console.log(this.username);
    // if you defined this inside any function it return object with function information 
    // this object are work with object (this object not work inside the function) // this return the undefined 
  }
  chai()

  const chai1 = function (){
    let username = 'vishal'
    console.log(this.username)
  }
  chai1()