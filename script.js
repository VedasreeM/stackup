function addTask() {
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
    // Use prompt to get the updated task text from the user
    const updatedText = prompt('Update the task:', taskItem.firstChild.nodeValue);

    // Check if the user clicked "Cancel" in the prompt
    if (updatedText === null) {
        return;
    }

    // Update the task text
    taskItem.firstChild.nodeValue = updatedText;
}

function deleteTask(taskItem) {
    // Use confirm to ask the user for confirmation before deleting the task
    const isConfirmed = confirm('Are you sure you want to delete this task?');

    if (isConfirmed) {
        // Remove the task
        taskItem.remove();
    }
}
