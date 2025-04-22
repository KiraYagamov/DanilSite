let step = 0;
let virtual_field = [];


let cells = [];
for(let i = 1; i < 10; i++){
    cells.push(document.getElementById("cell-" + i));
    virtual_field.push("");
}

for(let i = 0; i < cells.length; i++){
    cells[i].onclick = () => {
        if (cells[i].innerHTML === ""){
            if (step % 2 == 0){
                let img = document.createElement("img");
                img.setAttribute("src", "./media/cross.png");
                img.setAttribute("class", "cell-image");
                cells[i].append(img);
                virtual_field[i] = "X";
            }
            else{
                let img = document.createElement("img");
                img.setAttribute("src", "./media/round.png");
                img.setAttribute("class", "cell-image");
                cells[i].append(img);
                virtual_field[i] = "O";
            }
            step++;
            if (CheckWin() !== ""){
                let div = document.createElement("div");
                div.setAttribute("class", "end-screen");
                let text = document.createElement("h1");
                text.setAttribute("class", "end-text");
                text.innerText = "Winner: " + CheckWin();
                div.append(text);
                document.getElementById("body").append(div);
            }
            else if (IsFull()){
                let div = document.createElement("div");
                div.setAttribute("class", "end-screen");
                let text = document.createElement("h1");
                text.setAttribute("class", "end-text");
                text.innerText = "Draw!";
                div.append(text);
                document.getElementById("body").append(div);
            }
        }
    }
}

function CheckWin(){
    if (virtual_field[0] !== "" && virtual_field[0] === virtual_field[1] && virtual_field[1] == virtual_field[2]){
        return virtual_field[0];
    }
    else if (virtual_field[3] !== "" && virtual_field[3] === virtual_field[4] && virtual_field[4] == virtual_field[5]){
        return virtual_field[3];
    }
    else if (virtual_field[6] !== "" && virtual_field[6] === virtual_field[7] && virtual_field[7] == virtual_field[8]){
        return virtual_field[6];
    }
    else if (virtual_field[0] !== "" && virtual_field[0] === virtual_field[3] && virtual_field[3] == virtual_field[6]){
        return virtual_field[0];
    }
    else if (virtual_field[1] !== "" && virtual_field[1] === virtual_field[4] && virtual_field[4] == virtual_field[7]){
        return virtual_field[1];
    }
    else if (virtual_field[2] !== "" && virtual_field[2] === virtual_field[5] && virtual_field[5] == virtual_field[8]){
        return virtual_field[2];
    }
    else if (virtual_field[0] !== "" && virtual_field[0] === virtual_field[4] && virtual_field[4] == virtual_field[8]){
        return virtual_field[0];
    }
    else if (virtual_field[2] !== "" && virtual_field[2] === virtual_field[4] && virtual_field[4] == virtual_field[6]){
        return virtual_field[2];
    }
    else{
        return "";
    }
}

function IsFull(){
    for(let i = 0; i < virtual_field.length; i++){
        if (virtual_field[i] === "") return false;
    }
    return true;
}
