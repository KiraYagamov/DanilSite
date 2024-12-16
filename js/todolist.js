const title_input = document.getElementById("input-title");
const description_input = document.getElementById("input-description");
const add_button = document.getElementById("add-doing");

const doings = document.getElementById("doings");

let last_doing_index = 0;

add_button.onclick = () => {
    const doing_obj = {
        id: last_doing_index,
        title: title_input.value,
        description: description_input.value
    };
    doings.append(renderDoing(doing_obj));
    last_doing_index++;
}


function renderDoing(doing_obj){
    let div = document.createElement("div");
    div.setAttribute("class", "doing");
    div.setAttribute("id", "doing-"+doing_obj.id);

    let button = document.createElement("button");
    button.setAttribute("class", "doing-delete-btn");

    let img = document.createElement("img");
    img.setAttribute("src", "media/cross.gif");
    img.setAttribute("style", "width: 30px; margin-top: 5px;");
    button.append(img);

    button.onclick = () => {
        const doing = document.getElementById("doing-"+doing_obj.id);
        doing.remove();
    };
    div.append(button);

    let h1 = document.createElement("h1");
    h1.setAttribute("class", "doing-title");
    h1.innerHTML = doing_obj.title;
    div.append(h1);

    let p = document.createElement("p");
    p.setAttribute("class", "doing-description");
    p.innerHTML = doing_obj.description;
    div.append(p);

    return div;
}
