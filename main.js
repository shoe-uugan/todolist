// main
const mainContainer=document.getElementById("main")
mainContainer.className="main"

// header
const text=document.createElement("p")
const note= document.createTextNode("To Do list")
text.appendChild(note)
text.className="header_title"
document.getElementById("main").appendChild(text)

// input container
const inputContainer= document.createElement("div")
inputContainer.className= "input_container"
mainContainer.appendChild(inputContainer)

// input
const input = document.createElement("input")
inputContainer.appendChild(input)
input.className="input"

// add button
const addButton = document.createElement("div")
const buttontext = document.createTextNode("Add")
addButton.appendChild(buttontext)
inputContainer.appendChild(addButton)

addButton.className= "add_button"


const onClick= ()=>{
    console.log("clicked")
    const item = document.createElement("div") 
    item.innerHTML= "hello"
    mainContainer.appendChild(item)
}

addButton.addEventListener("click", onClick)
