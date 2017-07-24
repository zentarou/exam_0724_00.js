window.addEventListener("load", function () {
    var start = document.querySelector('#start');
    var stop = document.querySelector('#stop');

    function spin() {
        var slot1 = document.querySelector('#slot1');
        var slot2 = document.querySelector('#slot2');
        var slot3 = document.querySelector('#slot3');
        slot1.innerText = Math.floor(Math.random() * 5);
        slot2.innerText = Math.floor(Math.random() * 5);
        slot3.innerText = Math.floor(Math.random() * 5);
    }
    var intervalID;
    start.addEventListener('click',function() {
        if(intervalID) {
            return;
        }
        intervalID = window.setInterval(spin, 100);
    });
    stop.addEventListener('click', function () {
        window,clearInterval(intervalID);
        intervalID = null;
        var slot1 = document.querySelector('#slot1');
        var slot2 = document.querySelector('#slot2');
        var slot3 = document.querySelector('#slot3');
        if(slot1.innerText === slot2.innerText&&
           slot2.innerText === slot3.innerText) {
               result.innerText = "当たり!!!!!";
           }else{
               result.innerText = "";
           }
    });
});
