window.addEventListener('load', init);

let button = document.getElementById("createLink");
let url = document.getElementById('url');
let img = document.getElementById('img');
let name = document.getElementById('name');
let container = document.getElementById('container');

function init() {
    button.addEventListener("click", formSubmitHandler);
}

function formSubmitHandler(e) {
    e.preventDefault();
    let $url = url.value;
    let $img = img.value;
    let $name = name.value;

    if ($url != "" || $img !="" || $name !="") {
        let cardElement = document.createElement("div");
        cardElement.className = "card";

        let linkElement = document.createElement("a");
        linkElement.href = $url;

        let imageElement = document.createElement("img");
        imageElement.className = "linkImage image";
        imageElement.src = $img;

        let h3Element = document.createElement("h3");
        h3Element.innerHTML = $name;

        container.appendChild(cardElement);
        cardElement.appendChild(linkElement);
        linkElement.appendChild(imageElement);
        linkElement.appendChild(h3Element);
    }
    else
    {
        console.log("form is empty");
    }
}