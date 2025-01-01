
let button1 = document.getElementById('myButton');
console.log(button1);
let button2 = document.getElementById('myButton2');
console.log(button2)
let section = document.getElementById('section');
console.log(section)
copy = document.querySelector('.copyCode');
console.log(copy)
let rgb = ''
let rgb2 = ''
const  hexCode = () =>{
    let hex = '0123456789abcdef';
    let color ='#';
    
    for(let i=0;i<6;i++){
        // console.log(i);
        // console.log(hex[i])
        const data = hex[Math.floor(Math.random()*16)];
        // console.log(data);
        color = color+data
        rgb = color
    }
    return color
}




const changeCode = ()=>{
     rgb = hexCode()
    console.log('rgb',rgb)
    button1.style.backgroundColor = rgb; 
    copy.innerHTML = rgb; // This works
    copy.style.backgroundColor= rgb


}
const changeCode1 = ()=>{
    let rgb2 = hexCode()
    console.log('rgb',rgb2)
    button2.style.backgroundColor = rgb2; 
    section.style.backgroundColor = rgb2; 
}





button1.addEventListener('click',changeCode);
button2.addEventListener('click', changeCode1);
// when you click on copy value then you have to copy the element
copy.addEventListener('click', () =>{
    navigator.clipboard.writeText(copy.innerHTML=rgb);
})





