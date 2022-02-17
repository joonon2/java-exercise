const greeting = document.getElementById("greeting")
const nameInput = document.getElementById("name-input")
const nameForm = document.getElementById("name-form")

function changeGreeting(event) {
    event.preventDefault();
    const username = nameInput.value;
    greeting.innerText = "Hello" + username;
}


nameForm.addEventListener("submit",changeGreeting)