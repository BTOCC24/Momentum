const loginInput = document.querySelector("#login-form input");
const loginButton =  document.querySelector("#login-form button");

function onLoginBtnClick(){
    console.log(loginInput.value);
}

loginButton.addEventListener("click", onLoginBtnClick);

localStorage.setItem("username", "dongdong");
localStorage.getItem("username");
console.log(localStorage);
localStorage.removeItem("username");



function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(getClock, 1000);