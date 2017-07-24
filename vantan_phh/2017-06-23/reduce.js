var ary = [1, 2, 3, 4, 5, 6, 7];

var sum = ary.reduce(function(prev, current) {
    console.log(prev);
    console.log(current);
    console.log("-----");
    return prev + current;
})
console.log(sum);