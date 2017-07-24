//自分自身を呼び出す関数


//階乗
// 6! = 6 * 5 * 4 * 3 * 2 * 1 * = 720

 function factorial(n) {
     var m = 1;
     for(var i = 2; i<=n; i++) {
         m *= i;
     }
     return m;
 }
 //console.log(factorialB(6));
 function factorialB(n) {
     return n <=1 ? 1 : n * factorialB(n - 1);
 }

// //高階関数
// //関数を引数とったり、あるいは関数を戻り値とする関数

function curry(f,arg) {
    return function(...args) {
        return f(arg,...args);
    }
}

var fact6 = curry(factorial,6);
console.log(fact6());
//A(1)
//A(1,2,3,4,5);

//無名関数 / ラムダ / \
//名前のない関数
var lambda = function() {
    cosole.log("Im john doe");
}
lambda();