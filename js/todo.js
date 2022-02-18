const todoList = document.querySelector("#todoListForm");
const todoInput = document.querySelector("#todoListInput")
const ul = document.querySelector("#todoListDisplay")

let todos = [];

function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo) {
    const li = document.createElement("li")
    li.id = newTodo.id;
    const span = document.createElement("span")
    span.innerText = newTodo.text
    const button = document.createElement("button")
    button.innerText = "🙅"
    button.addEventListener("click",deleteTodo)
    li.appendChild(span)
    li.appendChild(button)
    ul.appendChild(li)
}

function submitTodo(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoobj = {
        text: newTodo,
        id: Date.now()
    }
    todos.push(newTodoobj)
    paintTodo(newTodoobj)
    saveTodos(); // 이거 틀렸을 수도 있음
}


todoList.addEventListener("submit", submitTodo)

const savedTodos = localStorage.getItem("todos");

if (savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}
