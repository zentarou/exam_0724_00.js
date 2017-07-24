var fs = require('fs');
var filename = process.argv[2];
var patern = /colou?r/;
if(!filename) {
  filename = "";
}
fs.readFile(filename, function (err, data) {
  if (err) {
    console.error(err.toString());
  } else {
    var lines = data.toString().split('\n');
    for(var i=0;i<lines.length;i++) {
      if(lines[i].match(patern)) {
        console.log(lines[i])
      }
    }
  }
});