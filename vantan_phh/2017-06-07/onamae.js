window.onload=function () {
    var button = document.getElementById("button");
    button.addEventListener("click", function() {
        console.log("クリックされたよ!");
        var input = document.getElementById("input");
        var div = document.getElementById("name");

        div.innerText = input.value;
    })
    button.addEventListener("click", function() {
        console.log("text");
    });
};