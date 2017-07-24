var message = "JAVASCRIPT";
var out_message = "";
for(var i=0; i<message.length; i++) {
    var char = message.charCodeAt(i);
    if('A'.charCodeAt() <= char &&  char <= 'M'.charCodeAt()) {
        out_message += String.fromCharCode(char + 13);
    }else if('N'.charCodeAt() <= char && char <=
    'Z'.charCodeAt()) {
        out_message += String.fromCharCode(char - 13);
    } else {
        out_message += String.fromCharCode(char);
    }
}
console.log(out_message); // => WniFpvcg