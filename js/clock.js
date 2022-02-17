const clock = document.querySelector("#clock");

function getClock() {
    const time = new Date();

    const hour = String(time.getHours()).padStart(2,"0");
    const minute = String(time.getMinutes()).padStart(2,"0");
    const second = String(time.getSeconds()).padStart(2,"0");

    clock.innerText = `${hour}:${minute}:${second}`
}

getClock()
setInterval(getClock, 1000);