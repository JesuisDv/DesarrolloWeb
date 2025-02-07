const timeElement = document.getElementById('time');
const taskInput = document.getElementById('task');

function addZero(number) {
  return number < 10 ? `0${number}` : number;
}

function uptadeTime() {
  const now = new Date();

  const hours = addZero(now.getHours());
  const minutes = addZero(now.getMinutes());
  const seconds = addZero(now.getSeconds());

  const Time = `${hours}:${minutes}:${seconds}`;
  timeElement.textContent = Time;
}

setInterval(uptadeTime, 1000);
uptadeTime();

let task = [];
let conteo = 0

document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      document.getElementById("add").click();
  }
});

document.getElementById('add').addEventListener('click', () => {
  const taskHTML = taskInput.value;
  if (taskHTML !== '') {
    const taskId = `lista${conteo++}`;
    const taskText = `<div id="tarea">
      <input id="checkbox${taskId}" type="checkbox" onchange="toggleTask('${taskId}')">
      <li id="${taskId}">${taskHTML}</li>
      <button id="delete" onclick="DeleteTask(this)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
          <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z"></path>
          <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z"></path>
        </svg>
      </button>
    </div>`;

    task.push(taskText);
    taskList.innerHTML = '';
    taskInput.value = '';
    renderTask();
  }
});

function toggleTask(taskId) {
  const taskItem = document.getElementById(taskId);
  if (taskItem) {
    taskItem.classList.toggle('completed');
  }
}

function renderTask() {
  for (let i = 0; i < task.length; i++) {
    document.getElementById('taskList').innerHTML += task[i];
  }
}

const deleteButton = document.getElementById("delete");
if (deleteButton) {
  deleteButton.addEventListener("click", () => {
    const taskList = document.getElementById("taskList");
    if (taskList.lastElementChild) {
      taskList.lastElementChild.remove();
    }
  });
}

function DeleteTask(button) {
  const taskItem = button.parentElement;
  taskItem.remove();
  
}

