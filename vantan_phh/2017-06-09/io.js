// 標準入力から入力された文字を
// そのまま標準出力へ出力するプログラムを作成しなさい
var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.addListener('line', function(line) {
  lines.push(line);
  console.log(line);
});
reader.addListener('close', function() {
  for(var i = 0; i < lines.length; i++) {
    console.log(i + ') ' + lines[i]);
  }
});