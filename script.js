const addTaskInput = document.querySelector('.add-task__input');
const addTaskButton = document.querySelector('.add-task__add');
const tasks = document.querySelectorAll('.tasks');
const errorMessage = document.querySelector('.add-task__error');

const validateInput = (input) => {
    if (input.length > 4) {
        errorMessage.style.display = 'none';
        return true;
    } else {
        errorMessage.style.display = 'block';
        return false;
    }
};

const addTaskEvent = (task) => {
    task.addEventListener
};

addTaskButton.addEventListener('click', (event) => {
    const inputText = addTaskInput.value;
    const validation = validateInput(inputText);
    if (validation) {
        const task = document.createElement('div');
        task.className = 'task';
        task.innerHTML = `
            <div class="task__title">${addTaskInput.value}</div>
            <button class="task__complete">V</button>
    `;
        tasks.appendChild(task);
    };
})




