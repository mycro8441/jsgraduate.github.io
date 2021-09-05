const loginForm = document.querySelector("form#loginForm");
const loginInput = document.querySelector(".loginInput");
const userText = document.querySelector("h2#userText");

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    userText.innerText = `Hello, ${username}!`;
    userText.classList.remove("hidden");
    localStorage.setItem("username", username);
}

if (localStorage.getItem("username") != null) {
    const username = localStorage.getItem("username");
    loginForm.classList.add("hidden");
    userText.innerText = `Hello, ${username}!`;
    userText.classList.remove("hidden");
}
else {
    loginForm.classList.remove("hidden");
    userText.classList.add("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
}


