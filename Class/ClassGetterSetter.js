// Class is blueprint for creating the object 
// Class encapsulate data and function that manipulate data
// javascript class are synthetic sugar over the prototypal inheritances.
// IN ES6 javascript class are special function
// Prior to es6 javascript had no concept classes to mimic a class you often used the constructor and prototype pattern 

// Here we have to defined  class the constructor phototype pattern 
// this person is constructor function that contain property as name
function person(name){
    this.name = name

}
person.prototype.getName = function(){
    //getName() function assigned to prototype so that it can show all the instances of the person type.
    return this.name
}

var name1 = new person("Vishal shinde");
//it return the object with give information
console.log(name1);


// ES6 class declaration 
class Person1{
    constructor(name){
        this.name = name
    }
    getName(){
     return this.name   
    }

}
let per = new Person1('vishal shinde');
console.log(per);
const name2 = per.getName();
console.log(name2);



// javascript Getter and setter method 

class emp{
    constructor(empName){
        this.empName = empName
    }
}

let emp1 = new emp('abc');
//emp1 have property name and constructor initialize the name property
const name = emp1.empName;
console.log('name', name);

// instead of directly access the property we have to pair the name properly 

class Person2{
    constructor(name){
        this.name = name
    }
    // return the value of the name property 
    getName(){
    return this.name
    }
    //assign argument as to the name property
    // setName method used to initialize the name property 
    setName(newName){
        newName = newName.trim();
        if(newName === ""){
            throw "then name can not be empty";
        }
        this.name = newName
    }
}
// ny using getName() or getter method you have to get the name
let nam = new Person2('vishal');
console.log(nam);
let name3 = new Person2();
name3.setName("data");
console.log(name3.getName())

// get and set name are the getter and setter method in the programming langue 
// but in Es6 specific syntax for the defining the get and set method in javascript 


// NOTE
// use the get and set keyword to defined the javascript getter and setter for a class or an object 
//get keyword bind an object Property to a method that will be invoked when that property looked up
// set keyword bind and object Property to a method that will be invoked went that property assigned 



// example using getter in object literal

let meeting = {
    attends : [],
    add(attends){
        console.log(`${attends} join the meting` )
        this.attends.push(attends)
        return this
    },
    getAttendances(){
        let count = this.attends.length;
        count === 0 ? undefined: this.attends[count-1]

    }
}
meeting.add('vishal').add('abc').add('def');
console.log(`latest attendees ${meeting.getAttendances()}`)