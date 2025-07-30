debugger
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

// task list container
const taskcontainer= document.createElement("div")
mainContainer.appendChild(taskcontainer)
taskcontainer.className= "task_container"

// Total count
let totalTaskCount=0
let completedTaskCount=0

const Totalcontainer=document.createElement("div")
const TotalText= document.createTextNode(`${completedTaskCount} of ${totalTaskCount} tasks completed`)
Totalcontainer.appendChild(TotalText)
mainContainer.appendChild(Totalcontainer)


const onClick= ()=>{
  const value = input.value;
  const item = document.createElement("div");
  item.className = "item_container";

  //  const parent= document.createElement("div")
  //     parent.className="parent"
  //     item.parentNode.insertBefore(parent, item)
  //     parent.appendChild(item)

  const taskText = document.createElement("div");

  //  complete
  const completeMark = document.createElement("div");
  const completeIcon = document.createTextNode("✅");
  taskText.className = "tasktext";
  completeMark.appendChild(completeIcon);
  item.appendChild(completeMark);

  // after completed
  let number = 0;
  completeMark.addEventListener("click", () => {
    taskText.style.textDecorationLine = "Line-through";
    if (number === 1) {
      taskText.style.textDecoration = "none";
      number = 0;
      completedTaskCount = completedTaskCount - 1;
      Totalcontainer.innerText = `${completedTaskCount} of ${totalTaskCount} task completed`;
      return;
    }
    number = 1;
    completedTaskCount = number + completedTaskCount;
    Totalcontainer.innerText = `${completedTaskCount} of ${totalTaskCount} task completed`;
  });

  // add list item
  const title = document.createTextNode(value);
  taskText.appendChild(title);
  item.appendChild(taskText);
  taskcontainer.appendChild(item);

  // delete
  const deleteMark = document.createElement("div");
  const deleteIcon = document.createTextNode("❌");
  deleteMark.appendChild(deleteIcon);
  item.appendChild(deleteMark);
  // after delete
  deleteMark.addEventListener("click", () => {
    taskcontainer.removeChild(item);

    completedTaskCount = completedTaskCount - number;
    uhg();
  });

  // remove input value
  input.value = "";
  // total count

  const uhg = () => {
    totalTaskCount = taskcontainer.childNodes.length;

    Totalcontainer.innerText = `${completedTaskCount} of ${totalTaskCount} task completed`;
  };

  uhg();
}

// when button clicked
addButton.addEventListener("click", onClick)

// delete all complete
const deleteAllComplete = document.createElement("div")
const deleteAllText = document.createTextNode("Delete")
deleteAllComplete.appendChild(deleteAllText)
mainContainer.appendChild(deleteAllComplete)
deleteAllComplete.className="delete_all"
deleteAllComplete.addEventListener("click", ()=>{
    const items = document.querySelectorAll(".item_container");
    items.forEach(item => {
        const taskText = item.querySelector(".tasktext");
        if (taskText.style.textDecorationLine === "line-through") {
            taskcontainer.removeChild(item);
            completedTaskCount--;
        }
    });
    totalTaskCount = taskcontainer.childNodes.length;
    Totalcontainer.innerText = `${completedTaskCount} of ${totalTaskCount} tasks completed`;
})





