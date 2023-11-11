function addTask(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const taskInput = document.getElementById('taskInput').value;
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(taskInput));

    const updateButton = document.createElement('button');
    updateButton.innerHTML = 'Update';
    updateButton.onclick = function() {
        updateTask(li);
    };

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.onclick = function() {
        deleteTask(li);
    };

    li.appendChild(updateButton);
    li.appendChild(deleteButton);

    document.getElementById('taskList').appendChild(li);

    document.getElementById('taskInput').value = '';
}

function updateTask(taskItem) {
    const updatedText = prompt('Update the task:', taskItem.firstChild.nodeValue);

    if (updatedText === null) {
        return;
    }

    taskItem.firstChild.nodeValue = updatedText;
}

function deleteTask(taskItem) {
    const isConfirmed = confirm('Are you sure you want to delete this task?');

    if (isConfirmed) {
        taskItem.remove();
    }
}

document.getElementById('addTaskForm').addEventListener('submit', addTask);
