var message = "hoge hoge";
var begin, end;
for(var i=0; i<message.length; i++) {
    if(message[i] !=="") {
        begin = i;
        break;
    }
}
for(var i=message.length-1; i>=0; i--) {
    if(message[i] !==" ") {
        end = 1
        break;
    }
}
console.log(message.slive(begin.end+1));