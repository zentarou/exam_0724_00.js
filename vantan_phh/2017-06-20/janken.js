window.addEventListener('load', function () {
    var button = document.getElementById('button');
    button.addEventListener('click', function() {
        var result = document.getElementById('result');
        var select = document.getElementById('select');
        result.innerHTML = select.value;
    });
});