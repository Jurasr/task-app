const addTaskInput = document.querySelector('.add-task__input');
const addTaskButton = document.querySelector('.add-task__button');
const statusMessage = document.querySelector('.add-task__status-message');
const taskList = document.querySelector('.task-list');

const addTaskEvents = (task) => {
    task.addEventListener('click', (event) => {
        const targetClassName = event.target.className;
        if (targetClassName === 'task__edit') {
            console.log('edit');
        } else if (targetClassName === 'task__delete') {
            console.log('delete');
        }
    });
}

const createTask = (taskTitle) => {
    const task = document.createElement('li');
    task.classList.add('task')
    task.innerHTML = `
        <input type="text" class="task__title" value="${taskTitle}" disabled>
        <div>
            <span class="task__edit">Edit</span>
            <span class="task__delete">Delete</span>
        </div>
    `;
    addTaskEvents(task);
    return task;
}

const updateStatusMessage = (textContent, color) => {
    statusMessage.textContent = textContent;
    statusMessage.style.color = color;
    statusMessage.style.display = 'block';
    statusMessage.style.opacity = '1';
}

const disappearStatusMessage = () => {
    setTimeout(() => {
        statusMessage.style.opacity = 0;
    }, 1000);
    setTimeout(() => {
        statusMessage.style.display = 'none';
    }, 2000)
}

addTaskButton.addEventListener('click', () => {

    const inputText = addTaskInput.value;

    if (inputText.length > 3) {
        taskList.appendChild(createTask(inputText));
        updateStatusMessage('Task created successfully', '#28ac2e');
        disappearStatusMessage();
        addTaskInput.value = '';
    } else {
        updateStatusMessage('Task should be longer than 3 characters', 'red')
        disappearStatusMessage();
    }
})