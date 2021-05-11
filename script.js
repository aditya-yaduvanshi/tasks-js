const task = document.getElementById("task");

function newtask(){
  if (task){
    document.getElementById("task-list").innerHTML += document.createElement('li', task);
  }
  else {
    document.getElementById("task-list").innerHTML = "No Task";
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector("form").onsubmit = newtask;
});