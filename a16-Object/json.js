//| json (javascript object notation)

// json is data interchange format derived form javascript objects:
// object can be easily converted to json and vice versa


//? what is differences between json object and javascript object 
// json objet : all key and value are display in double inverted commas (value are depends on the data type but all key are in double inverted commas)
// javascript object only value are display in double inverted commas (value depends on the data type)


const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "Male",
    email: "johndoe@example.com",
    phone: "+1234567890",
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zipCode: "10001"
    },
    isMarried: false,
    hobbies: ["reading", "travelling", "coding"],
    profession: "Software Developer",
    company: "Tech Corp",
    salary: 80000,
    birthDate: "1994-01-01",
    isActive: true,
    lastLogin: "2024-12-12T10:00:00Z"
  };
  

  console.log("Normal javascript object :",person);

  //? How to covert object into json object ?
  const jsonObj = JSON.stringify(person);
  console.log(jsonObj); // it return in json format 

  //? how to convert json object into normal javascript object ?
  const normalObj = JSON.parse(jsonObj);
  console.log(normalObj);
  