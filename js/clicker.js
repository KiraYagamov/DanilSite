const text = document.getElementById("text");
const button = document.getElementById("button");

let total_clicks = 0;

button.onclick = () => {
    let count = 0;
    let interval = setInterval(() => {
        total_clicks++;
        text.innerHTML = total_clicks;
        count++;
        if (count >= 100)
            clearInterval(interval);
    }, 10);
}
