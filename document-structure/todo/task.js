const tasksList = document.getElementById('tasks__list');
const taskInput = document.getElementById('task__input');

function createTask(text) {
    const task = document.createElement('div');
    task.className = 'task';
    
    const taskTitle = document.createElement('div');
    taskTitle.className = 'task__title';
    taskTitle.textContent = text;
    
    const taskRemove = document.createElement('a');
    taskRemove.href = '#';
    taskRemove.className = 'task__remove';
    taskRemove.innerHTML = '&times;';
    
    taskRemove.addEventListener('click', function(event) {
        event.preventDefault();
        task.remove();
    });
    
    task.appendChild(taskTitle);
    task.appendChild(taskRemove);
    
    return task;
}

taskInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && taskInput.value.trim() !== '') {
        const newTask = createTask(taskInput.value.trim());
        
        tasksList.appendChild(newTask);
        
        taskInput.value = '';
        
        event.preventDefault();
    }
});