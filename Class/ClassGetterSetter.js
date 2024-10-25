// Class is blueprint for creating the object 
// Class encapsulate data and function that manipulate data
// javascript class are synthatic sugar over the prototypal inheritances.
// IN ES6 javascript class are special function
// Prior to es6 javascript had no concept classes to mimic a class you often used the constructor and prototype pattern 

// Here we have to defined  class the constructor ptototyple pattern 
// this person is constructor function that contain proprty as name
function person(name){
    this.name = name

}
person.prototype.getName = function(){
    //getName() function assigned to prototype so that it can show all the instances of the person type.
    return this.name
}

var name1 = new person("Vishal shinde");
//it retur the object with give information
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
    constructor(empname){
        this.empname = empname
    }
}

let emp1 = new emp('abc');
//emp1 have property name and construcotr initialze the name property
const name = emp1.empname;
console.log('name', name);

// insted of directely access the propery we have to pair the name propery 

class Person2{
    constructor(name){
        this.name = name
    }
    // return the vlaue of the name property 
    getName(){
    return this.name
    }
    //assign argument as to the name peropery
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
// but in Es6 specific syntax for the defining the get and set method in javascirpt 


// NOTE
// use the get and set keyword to defined the javascript getter and setter for a clas or an object 
//get keyword bind an object proepry to a method that will be invocked when that propery looked up
// set keyword bind and object proeorty to a method that will be invoked whent that prooery assigned 



// example usig getter in object literal

let meeting = {
    attendes : [],
    add(attendes){
        console.log(`${attendes} joind the metting` )
        this.attendes.push(attendes)
        return this
    },
    getAttendences(){
        let count = this.attendes.length;
        count === 0 ? undefined: this.attendes[count-1]

    }
}
meeting.add('vishal').add('abc').add('def');
console.log(`latest attendencs ${meeting.getAttendences()}`)