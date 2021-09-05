const dateText = document.querySelector("h2#date");
const timeText = document.querySelector("h1#clock");

const date = new Date();
const year = String(date.getFullYear());
const month = String(date.getMonth()).padStart(2, "0");
const day = String(date.getDate()).padStart(2, "0");
dateText.innerText = `${year}-${month}-${day}`;

function getTime() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    timeText.innerText = `${hour}:${minute}:${seconds}`;
}

setInterval(getTime, 1000);
