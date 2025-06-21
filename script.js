const addTaskInput = document.querySelector('.add-task__input');
const addTaskButton = document.querySelector('.add-task__button');
const statusMessage = document.querySelector('.add-task__status-message');
const taskList = document.querySelector('.task-list');
const tasks = document.querySelectorAll('.task');

const addTaskEvents = (task) => {
    task.addEventListener('click', (event) => {
        const targetClassName = event.target.className;
        if (targetClassName === 'task__edit') {
            const mode = event.target.textContent;
            const input = event.target.parentNode.parentNode.querySelector('.task__title');
            if (mode === 'Edit') {
                input.disabled = false;
                input.focus();
                input.setSelectionRange(input.value.length, input.value.length); // Places cursor at the end
                event.target.textContent = 'Save';
            } else {
                input.disabled = true;
                event.target.textContent = 'Edit';
            }
        } else if (targetClassName === 'task__delete') {
            const task = event.target.parentNode.parentNode;
            task.remove();
        }
    });
}

const init = () => {
    tasks.forEach(task => {
        addTaskEvents(task);
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

init();