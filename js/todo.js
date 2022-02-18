const todoList = document.querySelector("#todoListForm");
const todoInput = document.querySelector("#todoListInput")

const todos =[]

function saveTodos(event) {
    console.log("hi")
}

function paintTodo(newTodo) {
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.innerText = newTodo
    document.body.appendChild(li)
    li.appendChild(span)
}

function submitTodo(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todos.push(newTodo)
    localStorage.setItem("todos", todos)
    paintTodo(newTodo)
}


todoList.addEventListener("submit", submitTodo)
