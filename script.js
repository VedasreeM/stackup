function addTask() {
    // Get the task input value
    const taskInput = document.getElementById('taskInput').value;

    // Create a new list item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(taskInput));

    // Create buttons for updating and deleting tasks
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

    // Append buttons to the list item
    li.appendChild(updateButton);
    li.appendChild(deleteButton);

    // Append the list item to the task list
    document.getElementById('taskList').appendChild(li);

    // Clear the task input field
    document.getElementById('taskInput').value = '';
}

function updateTask(taskItem) {
    // Implement logic to update the task (e.g., change text, mark as completed)
    // You can use prompt, alert, or other UI elements for user input
}

function deleteTask(taskItem) {
    // Implement logic to delete the task
    taskItem.remove();
}
