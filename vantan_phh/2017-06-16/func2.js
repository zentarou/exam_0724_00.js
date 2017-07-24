var a = 10;
function b() {
    a = 70;
    var a;
}
b();
console.log(a);//?

var x = 20;
function y (x) {
    console.log(x);
}
y();

var z = 10;
function f1() {
    let z = 20;
    function f2() {
        console.log(z);
    }
    return f2;
}
f1()();