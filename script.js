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
        const li = document.querySelector(`li[data-id="${todoId}"]`);
        const span = li.querySelector('span');
        const updatedText = prompt('Update task:', span.textContent);
        if (updatedText !== null) {
            todos.find(todo => todo.id === todoId).text = updatedText;
            renderTodos();
        }
    }

    function deleteTodo(todoId) {
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
