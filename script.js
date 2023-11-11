document.addEventListener('DOMContentLoaded', function () {
    const todos = [];

    const todoList = document.getElementById('todos');
    const todoInput = document.getElementById('todoInput');

    function renderTodos() {
        todoList.innerHTML = '';
        todos.forEach(todo => {
            const li = document.createElement('li');
            li.setAttribute('data-id', todo.id);
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
        const todoIndex = todos.findIndex(todo => todo.id === todoId);

        if (todoIndex !== -1) {
            todos.splice(todoIndex, 1);
            renderTodos();
        }
    }

    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();
        addTodo();
    });

    renderTodos();
});
