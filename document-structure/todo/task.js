const tasksList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');
const tasksForm = document.getElementById('tasks__form');
const addButton = document.querySelector('.tasks__add');

function createTask(text) {
    tasksList.insertAdjacentHTML('afterbegin', `
        <div class="task">
            <div class="task__title">
                ${text}
            </div>
            <a href="#" class="task__remove">&times;</a>
        </div>
    `);

    const newTask = tasksList.querySelector('.task');
    const removeBtn = newTask.querySelector('.task__remove');

    removeBtn.addEventListener('click', function (event) {
        event.preventDefault();
        newTask.remove();
    });
}

tasksForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        createTask(taskText);
        taskInput.value = '';
    }
});

addButton.addEventListener('click', function (event) {
    event.preventDefault();
    
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        createTask(taskText);
        taskInput.value = '';
    }
});
