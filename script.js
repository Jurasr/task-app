const addTaskInput = document.querySelector('.add-task__input');
const addTaskButton = document.querySelector('.add-task__button');
const statusMessage = document.querySelector('.add-task__status-message');

addTaskButton.addEventListener('click', () => {
    if (addTaskInput.value.length > 3) {
        statusMessage.textContent = "Task created successfully";
        statusMessage.style.display = 'block';
        statusMessage.style.opacity = '1';
        statusMessage.style.color = "#28ac2e";
        setTimeout(() => {
            statusMessage.style.display = 'none';
        }, 1000);
    } else {
        statusMessage.textContent = "Task should be longer than 3 characters";
        statusMessage.style.color = "red";
        statusMessage.style.display = 'block';
    }
})