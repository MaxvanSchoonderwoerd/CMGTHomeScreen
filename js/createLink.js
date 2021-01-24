function updateVar() {
    let url = document.getElementById('url').value;
    let img = document.getElementById('img').value;
    let name = document.getElementById('name').value;
    alert(url);

    let place = document.getElementById('test');

    place.insertAdjacentHTML('beforeend', ' <div class="card">\n' +
        '                <a href="' + url + '">\n' +
        '                    <img src="' + img + '" alt=" "\n' +
    '                         class="linkImage image">\n' +
    '                    <h3>' + url + '</h3>\n' +
    '                </a>\n' +
    '            </div>'
)
    ;
}


document.getElementById("createLink").addEventListener("click", function () {
    updateVar();
});
