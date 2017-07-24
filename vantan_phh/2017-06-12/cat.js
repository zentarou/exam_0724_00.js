var fs = require('fs');

var filename = process.argv[2];
if(!filename) {
    filename = "";
}
fs.readFile(filename, function(err,data) {
    if(err) {
        console.error(err.toString());
    }else{
    console.log(data.toString());
    }
});