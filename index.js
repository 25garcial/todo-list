var container = document.querySelector(".container")
const projectButton = document.querySelector(".toDoMaker")
projectButton.addEventListener("click", makeProject)
let projectCount = 0
let data = {}

function Project() {
  return {
    title: "New Project",
    toDos: 0
  }
}


function makeAToDo(parent) {
  const toDo = document.createElement("div")
  const toDoRemoveButton = document.createElement("button")
  toDoRemoveButton.textContent = "-"

  toDoRemoveButton.classList.add("toDoRemoveButton")
  toDoRemoveButton.id = projectCount-1
  toDo.classList.add("toDo")
  toDo.textContent = "To Do: "

  toDoRemoveButton.addEventListener("click", function() {
    this.parentElement.remove();
    data[`project${this.id}`].toDos -= 1;
    if ( data[`project${this.id}`].toDos==0){
    data[`project${this.id}`].htmlElement.remove()
    }
  })

  toDo.appendChild(toDoRemoveButton)

  parent.appendChild(toDo)
}

function createAddToDoButton() {
  const addToDoButton = document.createElement("button")
  addToDoButton.classList.add("addToDoButton")
  addToDoButton.textContent = "+"
  addToDoButton.id=projectCount
  addToDoButton.addEventListener("click", function() {
    makeAToDo(this.parentElement);

    data[`project${this.id}`].toDos += 1;
    console.log(data);
  })
  return addToDoButton

}

function makeProject() {
  const projectBox = document.createElement("div")
  data[`project${projectCount}`] = new Project()
  data[`project${projectCount}`].htmlElement=projectBox
  let title = document.createElement("span")
  projectBox.id = data[`project${projectCount}`].title
  title.textContent = projectBox.id
  projectBox.appendChild(title)

  projectBox.classList.add("project")
  projectBox.appendChild(createAddToDoButton())

  container.appendChild(projectBox)
  console.log(data)
  projectCount += 1
}
