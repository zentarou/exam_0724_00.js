var array = [];
for (var i = 0; i < 20; i++) {
  array.push(Math.floor(Math.random() * 100));
}
console.log(array);

var newArray = [];
for (var i = 0; i < array.length; i++) {
  (function (n) {
    setTimeout(function () {
      newArray.push(n);
    }, n);
  })(array[i]);
}

setTimeout(function() {
  console.log(newArray);
}, 200);