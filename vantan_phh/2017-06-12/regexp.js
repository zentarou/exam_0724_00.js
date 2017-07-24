var example = "the quick brown fox jumps over the lazy dog."
var example2 = "i jump to heaven";

var regexp = new RegExp("jumps?", "i");

var result = example.match(regexp);
console.log(result);
var result = example2.match(regexp);
console.log(result);