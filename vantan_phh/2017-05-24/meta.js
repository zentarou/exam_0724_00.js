// eval ("var A =1;");
// console.log(a)
// var f = new Function("n", "return n*n");
// console.log(f(9));

function fact(n) {
    var operands =[];
    for(var i =0; i < n; i++) {
        operands.push('m');
    }
    console.log(operands);
    var calc = operands.join('*');
    return new Function("m","return "+calc)
}

var f10 = fact(3);
console.log(f10(10));
 
var f2 = (n) => {
    return n * 2;
};
console.log(f2(3));