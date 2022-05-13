var container = document.querySelector(".container")
const projectButton = document.querySelector(".toDoMaker")
projectButton.addEventListener("click", makeProject)
const data = {}

function newProject() {
    return { title: "", toDos: 0 }
}

function makeAToDo() {
    const toDo = document.createElement("div")
    const toDoRemoveButton = document.createElement("button")
    toDoRemoveButton.textContent = "-"
    toDoRemoveButton.classList.add("toDoRemoveButton")
    toDo.classList.add("toDo")
    toDo.textContent = "To Do: "
    toDo.appendChild(toDoRemoveButton)
    
    this.parentElement.appendChild(toDo)
}
function createAddToDoButton() {
    const addToDoButton = document.createElement("button")
    addToDoButton.classList.add("addToDoButton")
    addToDoButton.textContent = "+"
    addToDoButton.addEventListener("click", makeAToDo)
    return addToDoButton
}

function makeProject() {
    const projectBox = document.createElement("div")
    projectBox.classList.add("project")
    projectBox.appendChild(createAddToDoButton())


    container.appendChild(projectBox)
    console.log("made project")
}
