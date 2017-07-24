var table = [];
for(var i = 0; i < 5; i++) {
    var line = [];
    for(var j =0; j < 5; j++) {
        line.push(0);
    }
    table.push(line);
}

var x = 0;
var y = 5;
for(var i = 0; i < 25; i++) {
    table[y] [x] = i + 1;
    x++;
    y++;
    
    
    console.log(x, y, i);
}
console.log(table);