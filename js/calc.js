const result_text = document.getElementById("result");
const operation_text = document.getElementById("operation_text");
const number_one = document.getElementById("number_one");
const number_two = document.getElementById("number_two");
const calc_btn = document.getElementById("calc");
const switch_left = document.getElementById("switch_left");
const switch_right = document.getElementById("switch_right");

let operation = "+";
let operations = ["+", "-", "*", "/"];
let position = 0;

calc_btn.onclick = () => {
    const num_1 = Number(number_one.value);
    const num_2 = Number(number_two.value);
    switch(operation){
        case "+":
            result_text.innerHTML = num_1 + num_2;
            break;
        case "-":
            result_text.innerHTML = num_1 - num_2;
            break;
        case "*":
            result_text.innerHTML = num_1 * num_2;
            break;
        case "/":
            result_text.innerHTML = num_1 / num_2;
            break;
    }
    
}

switch_left.onclick = () => {
    if (position > 0)
        position--;
    operation = operations[position];
    operation_text.innerHTML = operation;
}

switch_right.onclick = () => {
    if (position < 3)
        position++;
    operation = operations[position];
    operation_text.innerHTML = operation;
}
