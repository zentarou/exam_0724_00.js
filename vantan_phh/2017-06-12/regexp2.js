var example = "電話番号は0120-06-9873です。携帯は090-9294-8479です。";
var regexp = /\d{3,4}-\d{2,4}-\d{4}/g;
///\d/ = 数字;
// g = global;

console.log(example.match(regexp));

var address = "zentaro150@gmail.com";
var mailRegexp = /{a-z}+@{a-z}+/g;
var mailaderess = /[0-9a-z][0-9a-z_]+\?\*@[0-9a-z\-]+(\.[0-9a-z\-]+)+)/gi;
console.log(address.match(mailRegtexp));