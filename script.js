function addTask() {
    // Get the task input element
    var taskInput = document.getElementById('newTask');

    // Get the task list element
    var taskList = document.getElementById('taskList');
document.addEventListener('DOMContentLoaded', function () {
    const todos = []; // Replace with actual data from your database

    const todoList = document.getElementById('todos');
    const todoInput = document.getElementById('todoInput');

    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${todo.text}</span>
                <button onclick="updateTodo(${todo.id})">Update</button>
                <button onclick="deleteTodo(${todo.id})">Delete</button>
            `;
            todoList.appendChild(li);
        });
    }

    function addTodo() {
        const newTodo = {
            id: todos.length + 1,
            text: todoInput.value,
            completed: false,
        };
        todos.push(newTodo);
        todoInput.value = '';
        renderTodos();
    }

    function updateTodo(todoId) {
        // Add logic to update the todo based on its ID
        console.log(`Update todo with ID ${todoId}`);
    }

    function deleteTodo(todoId) {
        // Add logic to delete the todo based on its ID
        console.log(`Delete todo with ID ${todoId}`);
    }

    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        addTodo();
    });

    renderTodos();
});

    // Create a new list item element
    var listItem = document.createElement('li');

    // Create a text node with the task input value
    var taskText = document.createTextNode(taskInput.value);

    // Create a "Mark as Complete" button element
    var completeButton = document.createElement('button');
    completeButton.appendChild(document.createTextNode('Mark'));
    completeButton.className = 'complete-button';
    // Add an event listener to mark the task as complete when the button is clicked
    completeButton.addEventListener('click', function () {
        listItem.classList.toggle('completed');
    });


    var deleteButton = document.createElement('button');
    deleteButton.appendChild(document.createTextNode('Delete'));

    deleteButton.className = 'delete-button';
    deleteButton.addEventListener('click', function () {
        taskList.removeChild(listItem);
    });

    // Append taskText and completeButton to the list item
    
    listItem.appendChild(completeButton);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
    // Append the list item to the task list
    taskList.appendChild(listItem);

    // Clear the task input field
    taskInput.value = '';
}

function clearAllTasks() {
    var taskList = document.getElementById('taskList');
    taskList.innerHTML = ''; // Remove all tasks
}

