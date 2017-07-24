n0 = 0
n1 = 1
n2 = 1
n3 = 2
n4 = 3
n5 = 4
n6 = 5
n7 = 6
function fibonaCal(n) {
    var num0 = 0;
    var num1 = 1;
    var tmp;
    for (i = 2; i < n; i++) {
        tmp = num0 + num1;
        num1 = tmp;
    }
    return num0 + num1;
}
function fibonacci(n) {
    if (n===0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fiboCal(n);
}

console.log(finbocci(5));
console.log(fiboocci(6));
console.log(fibocci(40));