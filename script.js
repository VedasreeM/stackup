document.getElementById('addTaskForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get task input value
    let taskInput = document.getElementById('task');
    let taskText = taskInput.value;

    // Check if the task is not empty
    if (taskText.trim() !== "") {
        // Create a new task item
        let taskList = document.getElementById('taskList');
        let newTask = document.createElement('li');
        newTask.textContent = taskText;

        // Add buttons for updating and deleting tasks
        let updateButton = document.createElement('button');
        updateButton.textContent = 'Update';
        updateButton.addEventListener('click', function() {
            // Make the task editable
            let taskText = newTask.textContent;
            newTask.innerHTML = '<input type="text" value="' + taskText + '">';

            // Add a save button for updating the task
            let saveButton = document.createElement('button');
            saveButton.textContent = 'Save';
            saveButton.addEventListener('click', function() {
                // Save the updated task text
                let updatedTaskText = newTask.querySelector('input').value;
                newTask.innerHTML = updatedTaskText + ' ';

                // Add buttons again for updating and deleting tasks
                newTask.appendChild(updateButton);
                newTask.appendChild(deleteButton);
            });

            newTask.appendChild(saveButton);
        });

        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            // Implement delete task functionality
            taskList.removeChild(newTask);
        });

        newTask.appendChild(updateButton);
        newTask.appendChild(deleteButton);

        // Add the new task to the list
        taskList.appendChild(newTask);

        // Clear the input field
        taskInput.value = "";
    }
});
