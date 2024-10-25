// Basically singletone desing pattern 
// that limit the instantiation of class to a single instances 
// it insure that only one instance of class create throughout the sytem 
// class expression used to create singleton by calling the class constructor immediately 
// to do that used the new operator with a class expression and include the parenthesis at the end of the class declaration 


// new operator with the class expression and include the parenthesis at the end of the class declaration 
// class expression can used to create singleton object 
let app = new class {
    constructor(name){
        this.name = name
    }
    strt() {
        console.log(`starting ${this.name}`)
    }
    //only one instance created thorougout the system 
    //class expression create singloten by calling the clss constructor immidiately 
}('vishal shidne')
app.strt();

// HOW TO WORK 
// class has constructor that accespt argument it also has method like start()
// the class expression evaluate a class therefore you can call it constructor immediately by placing parenthesis after the expression 
// the expression return the instances of class expression which is assigned to the app 


// another example with function

const singleton = (function(){
    let isntance ;
    function createInstances(){
        const object = new Object("Hi, vishal shinde")
        return object
    }
    return {
        getInstances: function(){
            if(!isntance){
                isntance = createInstances()
            }
            return isntance
        }
    }
})();

const signleton1 = singleton.getInstances();
const singleton2 = singleton.getInstances();
console.log(signleton1);
console.log(singleton2)
console.log(singleton == singleton2)