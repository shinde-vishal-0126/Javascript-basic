//! local storage

//? what is local storage ?
// The local storage is object allow you to save key-value pair in the users browser.
// Local Storage in JavaScript provides a way to store key-value pairs in a user's browser persistently. 
// Data stored in localStorage does not expire (i.s data does not have expiration data)
//  and remains available even after the browser is closed and reopened. (i.e not data is deleted when browser is closed available for feature);

//? local storage method 
//1. localStorage.setItem(key, value)
//2. localStorage.getItem(key)
//3. localStorage.removeItem(key)
//4. localStorage.clear() ==> clearing all data

// what we will cover ?
//1. how to add/store data in local Storage ?
    //window object provide property of local Storage and this property having some method based on that method we have to store. get and remove the data form local storage
    let data = localStorage.setItem('key',"localData");
 
    // console.log('local storage ',data);// undefined
//2. How to get data form local Storage ?
    let getData =localStorage.getItem('key')
    console.log('get data:', getData);//localData

//3. How to remove data from Local Storage ?
    // localStorage.removeItem('key')


//* Local storage can only store string,
//*  when you want to store complex data structure like an array, or an object you need to convert it ot a string using JSON.stringify();
//? JSON.Stringify() : convert javascript object into a json string.
    // useful when you want to send data to server or store it into a text file as JSON is common data interchange format
    // below object are normal javascript object but i want to it in the form of JSON object then you have to used JSON.stringify()
    const newData = {
        name:'vishal',
        age:34,
        gender:'M'
    }
    const jsonString = JSON.stringify(newData) // it convert json object data into json string
    console.log('jsonString', jsonString)

//? JSON.parse() : used to convert json string into the the JSON object
    // useful when you receive JSON data form the server or read it in the form of file and you want to work it as javascript object 
    // below object are json object and i want to convert it into the normal javascript object then used JSON.parse
   const jsonString1 = '{"name":"vishal","age":34,"gender":"M"}' 
   const obj = JSON.parse(jsonString1);
   console.log("obj",obj)


//? what is JSON.stringify() and JSON.parse() in javascript ();
//  JavaScript methods for working with JSON (JavaScript Object Notation), which is a lightweight data format used for data exchange
//* JSON.stringify(value, replacer, space)
  //* Converts a JavaScript object, array, or other value to a JSON string.
  //Sending data to a server (convert an object to a JSON string).
  // Storing data in localStorage or sessionStorage.
  // Use JSON.stringify() to serialize JavaScript data into a JSON string.
//* JSON.parse()
  //* Parses a JSON string and converts it back to a JavaScript object or array.
  // Receiving and using JSON data from a server.
  // Retrieving data from localStorage or sessionStorage.
  // Use JSON.parse() to deserialize a JSON string back into JavaScript data.




  // Project example

  // this is sample object and i want to stored the data in local storage
  const sampleObject = {
    name: "John Doe",
    age: 30,
    isActive: true,
    skills: ["JavaScript", "React", "Node.js"],
    address: {
      street: "123 Main St",
      city: "Springfield",
      postalCode: "12345"
    },
    projects: [
      { id: 1, title: "Portfolio Website", completed: true },
      { id: 2, title: "E-commerce App", completed: false }
    ],
    lastLogin: new Date()
  };

const addToData = () =>{
    // if you try to set this data on local storage it return undefined so we need to convert it into the json string
        // const data = localStorage.setItem('user', sampleObject);
        // so we convert using the JSON.stringify()
        console.log(localStorage.setItem('user',JSON.stringify(sampleObject))) // if data insert it return the undefined       
}
const getBioData = () =>{
    // get the data form the local storage 
    const data = JSON.parse(localStorage.getItem('user')); 
    console.log(data); // it return data if found data based on key if not found it return null
    console.log('data',typeof data) // here type of data is string so i want data into javascript object so you have to used the JSON.parse() to convert into javascript object

}
 const removeToData = () =>{
    console.log(localStorage.removeItem('user'));// if you remove data it return undefined 
 }

  

  const btn1 = document.getElementById('btn1').addEventListener('click', addToData);
  const btn2 = document.getElementById('btn2').addEventListener('click', getBioData);
  const btn3 = document.getElementById('btn3').addEventListener('click',removeToData);


