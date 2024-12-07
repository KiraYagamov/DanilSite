let emailInput = document.getElementById("emailInput");
let passInput = document.getElementById("passInput");
let confPassInput = document.getElementById("confPassInput");

function register(){
    if (passInput.value === confPassInput.value){
        console.log(emailInput.value);
        console.log(passInput.value);
        console.log(confPassInput.value);
    }
    else{
        alert("Пароли не совпадают!");
    }
}
