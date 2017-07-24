var fs = require("fs");
var readline = require("readline");

var input = fs.open("test" ,"w+",function(err,output){
    var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: output
});
reader.addListener('line', function(line) {
  lines.push(line);
  console.log(line);
});
reader.on('close', function() {
  for(var i = 0; i < lines.length; i++) {
    reader.write(i + ') ' + lines[i]);
  }
});
});