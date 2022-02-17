const greeting = document.getElementById("greeting")
const nameInput = document.getElementById("name-input")
const nameForm = document.getElementById("name-form")

//이름이 입력되면 폼 숨기기
function loginSubmit(event) {
    event.preventDefault();
    const username = nameInput.value;
    nameForm.classList.add("hidden")
    localStorage.setItem("username", username)
    changeGreeting(username)
}

const savedUserName = localStorage.getItem("username")

//이름 입력되면 이름반영해서 인사하기
function changeGreeting(name) {
    greeting.innerText = "Hello " + name;
    nameInput.value=""
}

if (savedUserName !== null) {
    changeGreeting(savedUserName)
} else {
    nameForm.classList.remove("hidden")
    nameForm.addEventListener("submit", loginSubmit);
}
