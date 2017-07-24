var fs = require("fs");

var filename = process.argv[2];
if (!filename) {
    filename = "";
}
fs.readFile(filename, function (err, data) {
    if (err) {
        console.error(err.toString());
    } else {
        var string = data.toString();
        console.log(string);
        //ファイルの読み込みは行数単語数を表示する可能ならバイト数を表示
        var lines = string.split('\n').length - 1;
        console.log("行数" + lines);
        var words = string.replace(/\n/g, ' ').split(' ').length - 1;
        console.log("単語数" + words);
        var bytes = Buffer.byteLength(string);
        console.log("バイト数" + bytes);
        //console.lgoバイト数bytes//可能ならば
    }
});