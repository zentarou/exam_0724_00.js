//var regexp1 = new RegExp('colou?r', 'gi');
//var regexp2 = /colou?r/gi;
//console.log(regexp1);
//console.log(regexp2);

var text ="2016年の世界献血者データテーマは Blood connects us all である";
var p = /[a-zA-Z0-9]+/g;

var result = text.match(p);
console.log(result);

var p2 = /hogehoge/g;
var result2 = text.match(p2);
console.log(result2);