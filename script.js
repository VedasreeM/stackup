document.addEventListener('DOMContentLoaded', function () {
    const todos = [];

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
        const updatedTodos = todos.filter(todo => todo.id !== todoId);
        todos.length = 0; // Clear the existing array
        Array.prototype.push.apply(todos, updatedTodos); // Push updated todos back
        renderTodos();
    }

    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        addTodo();
    });

    renderTodos();
});
