function f() {
    var x =0;
    return function() {//無名関数
        x++;
        return x;
    }
}
var a=f();
console.log (a());
console.log (a());
console.log (a());
var b=f();
console.log (b());
console.log (b());
console.log (b());