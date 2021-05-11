const task = document.getElementById("task");
document.querySelector("#task-list").innerHTML = "No Task";
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