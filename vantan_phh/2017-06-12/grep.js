var fs = require('fs');

var filename = process.argv[2];
if (!filename) {
    filename = "";
}

var searchText = process.argv[3];
if (!searchText) {
    searchText = "";
};
fs.readFile(filename, function (err, data) {
    if (err) {
        console.error(err.toString());
    } else {
        var lines = data.toString().split("\n");
        for (var line of lines) {
            if (line.includes(searchText)) {
                console.log(line);
            }
        }
    }
});