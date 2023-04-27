window.onload = init;

function init() {
    const greetBtn = document.getElementById(greetBtn);
    greetBtn.onclick = onGreetUserBtnClicked;
}

function onGreetBtnClicked() {
    alert("Hi there!");
}