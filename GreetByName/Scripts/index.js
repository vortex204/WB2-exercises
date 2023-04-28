window.onload = init;

function init() {
    const greetBtn = document.getElementById("greetBtn");
    greetBtn.onclick = onGreetUserBtnClicked;
}

function onGreetUserBtnClicked() {
    alert("Hi there!");
}

 