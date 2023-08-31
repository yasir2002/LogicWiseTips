const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        ${taskText}
        <button class="deleteButton"><i class="fa-solid fa-trash"></i></button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';

    taskItem.querySelector('.deleteButton').addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });
}