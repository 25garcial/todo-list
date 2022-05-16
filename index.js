var container = document.querySelector(".container")
const projectButton = document.querySelector(".toDoMaker")
projectButton.addEventListener("click", makeProject)
projectCount=0
const data = {} 
function Project() {
     return { title: "New Project", toDos: 1 }
     }


function makeAToDo() {
    const toDo = document.createElement("div")
    const toDoRemoveButton = document.createElement("button")
    toDoRemoveButton.textContent = "-"
    toDoRemoveButton.classList.add("toDoRemoveButton")
    toDo.classList.add("toDo")
    toDo.textContent = "To Do: "
    toDo.appendChild(toDoRemoveButton)
    toDoRemoveButton.addEventListener("click", function(){
        this.parentElement.remove()
        
        })
    this.parentElement.appendChild(toDo)
}
function createAddToDoButton() {
    const addToDoButton = document.createElement("button")
    addToDoButton.classList.add("addToDoButton")
    addToDoButton.textContent = "+"
    addToDoButton.addEventListener("click", function(){
        makeAToDo();
        data[`project${projectCount}`].toDos+=1
        console.log(data)
    })
    return addToDoButton
}

function makeProject() {
    const projectBox = document.createElement("div")
    data[`project${projectCount}`]=new Project()
    let title=document.createElement("span")
    projectBox.id=data[`project${projectCount}`].title
    title.textContent=projectBox.id
    projectBox.appendChild(title)

  
    projectBox.classList.add("project")
    projectBox.appendChild(createAddToDoButton())
  
    container.appendChild(projectBox)
    console.log(data)
    projectCount+=1
}
