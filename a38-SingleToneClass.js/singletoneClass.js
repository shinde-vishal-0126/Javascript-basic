// ? what is singletonClass in javascript?
// Basically singleton design pattern 
// A Singleton class in JavaScript is a design pattern that ensures a class has only one instance and provides a global point of access to that instance.

// that limit the instantiation of class to a single instances 

// it insure that only one instance of class create throughout the system 

// class expression used to create singleton by calling the class constructor immediately 

// to do that used the new operator with a class expression and include the parenthesis at the end of the class declaration 


//! Characteristics of a Singleton Class:
// Single Instance: Ensures only one instance of the class exists.
// Global Access: Provides a way to access this instance globally.
// Controlled Instantiation: The instance is created when first accessed (lazy initialization) or immediately upon class definition (eager initialization).


// new operator with the class expression and include the parenthesis at the end of the class declaration 
// class expression can used to create singleton object 
let app = new class {
    constructor(name){
        this.name = name
    }
    start() {
        console.log(`starting ${this.name}`)
    }
    //only one instance created throughout the system 
    //class expression create singleton by calling the class constructor immediately 
}('vishal shinde')
app.start();

// HOW TO WORK 
// class has constructor that accept argument it also has method like start()
// the class expression evaluate a class therefore you can call it constructor immediately by placing parenthesis after the expression 
// the expression return the instances of class expression which is assigned to the app 


// another example with function
const singleton = (function(){
    let instance ;
    function createInstances(){
        const object = new Object("Hi, vishal shinde")
        return object
    }
    return {
        getInstances: function(){
            if(!instance){
                instance = createInstances()
            }
            return instance
        }
    }
})();

const singleton1 = singleton.getInstances();
const singleton2 = singleton.getInstances();
console.log(singleton1);
console.log(singleton2)
console.log(singleton == singleton2)