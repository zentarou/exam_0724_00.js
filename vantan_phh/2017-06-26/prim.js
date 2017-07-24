function isPrime(n) {
    if(n < 2　|| Math.round(n) !==n) {
        return false;
    }
    for(var m = 2; m < n; m++) {
        if(n % m === 0) {
           return false;
        }
    }
    return true;
}
console.log(isPrime(3));

var count = 0; // 0で初期化している
var n = 2; // 変数名nに2を代入している
while(count < 100) { // countが100より小さい時繰り返す
    if(isPrime(n)) {　// 関数ismPrimeを実行している
        count++;　// 素数を1ずつ増やしている
        console.log(n); // nをconsole.logで出力している
    }
    n++; // nをインクリメントしている
}