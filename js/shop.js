const buttons = document.getElementsByClassName("buy-button");

for(let i = 0; i < buttons.length; i++){
    buttons[i].onclick = () => {
        console.log("Куплено!");
    };
}
