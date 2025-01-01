const input = document.getElementById("myInput");
console.log(input);
const main = document.getElementById("section");
console.log(main);

document.getElementById("but").addEventListener("click", (e) => {
  AddToDo(e);
});

const getDataFormLocalStorage = () => {
  return JSON.parse(localStorage.getItem("data"));
};

const showData = () => {
  console.log("Hi", toLocalData);
  toLocalData.forEach((ele) => {
    console.log(ele);
    addDynamicElement(ele);
  });
};

const addDynamicElement = (ele) => {
  // create new element as div
  const divELe = document.createElement("div");
  // add the class to created element
  divELe.classList.add("main-div");
  // if you want to add content into the main div you have used innerHTML, innerText, and textContent
  // but you here you have to add li you you have to used innerHTML
  divELe.innerHTML = `<li>${ele}</li><button class="deleteBtn">deleteBtn</button>`;
  main.append(divELe);
};

const addtwoListLocalStorage =(toLocalData) =>{
    localStorage.setItem('data',JSON.stringify(toLocalData))
}

// const removeTodo = (e) => {
//     e.preventDefault()
//   const todoRemoveElement = e.target;
//   let removeTodo = todoRemoveElement.previousElementSibling.innerText;
//   const filedata =toLocalData.filter((ele)=>{
//    return ele !== removeTodo.toLowerCase();
//   })
//  console.log(filedata)
//  addtwoListLocalStorage(filedata)
// };
// Remove a todo item
const removeTodo = (e) => {
    if (e.target.classList.contains("deleteBtn")) {
      const todoItem = e.target.previousElementSibling.innerText; // Get the text of the item to delete
      toLocalData = toLocalData.filter((ele) => ele !== todoItem); // Remove the item from the array
      addtwoListLocalStorage(toLocalData); // Update localStorage
      e.target.parentElement.remove(); // Remove the DOM element
    }
  };



// let toLocalData = [];
let toLocalData = getDataFormLocalStorage() || [];

const AddToDo = (e) => {
  e.preventDefault();
  // get input value
  const listData = input.value.trim();
  console.log("input value", listData);
  input.value = "";
  if (listData !== "" && !toLocalData.includes(listData)) {
    // push value into array of toLocal data
    toLocalData.push(listData);
    console.log(toLocalData);
    // store unique value by toLocal data;
    toLocalData = [...new Set(toLocalData)];
    console.log(toLocalData);
    localStorage.setItem("data", JSON.stringify(toLocalData));

    // create new element as div
    const divELe = document.createElement("div");
    // add the class to created element
    divELe.classList.add("main-div");
    // if you want to add content into the main div you have used innerHTML, innerText, and textContent
    // but you here you have to add li you you have to used innerHTML
    divELe.innerHTML = `<li>${listData}</li><button class="deleteBtn">deleteBtn</button>`;
    main.append(divELe);
  }
};

main.addEventListener("click", (e) => {
  e.preventDefault();
//   console.log("e",e.target)

  removeTodo(e);
});
showData();
