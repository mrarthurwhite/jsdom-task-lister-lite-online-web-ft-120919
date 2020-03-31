document.addEventListener("DOMContentLoaded", init);

function init(){
  // target the form
  const newTaskForm = document.getElementById("create-task-form")
  // add a listener for the form to submit!
  newTaskForm.addEventListener("submit", addTaskToDOM)
}

function addTaskToDOM(event) {
  event.preventDefault()
  const taskInput = document.getElementById("new-task-description")
  const task = taskInput.value
  const tasksList = document.getElementById("tasks")
    tasksList.innerHTML += `<li>${task}</li>`
  taskInput.value =""
}