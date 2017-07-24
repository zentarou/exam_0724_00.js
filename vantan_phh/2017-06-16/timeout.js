var id = setTimeout(function() {
    console.log("hello!");
}, 1000);
// ms = ミリ秒
clearTimeout(id);


var i = 0;
var interval = setInterval(function() {
    console.log("Repeatable!!");
    i++;
    if(i > 10) {
        clearInterval(interval);
    }
},1000);