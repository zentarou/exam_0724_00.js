"use strict";

// 再帰で実装された fib 関数(recursive fib)
function rfib(n) { // rfibを宣言して()の中の引数を呼び出している
  if(n <= 2) { return 1; } // nが2以下の場合1を必ず返す

  return rfib(n - 2) + rfib(n - 1); // n - 2  n - 1を繰り返している
}

// ループで実装された fib 関数(loop fib)
function lfib(n) { // rfibを宣言して()の中の引数を呼び出している
  var x = 1, y = 1; // x yに1を代入している
  for(var i = 2; i < n; i++) { // iを宣言
    [x, y] = [y, x + y]; 
  }

  return y; // yを繰り返している
}

// メモ化した再帰での fib 関数(memoize fib) 
function mfib(n) {　// mfibを宣言して()の中の引数を呼び出している
  if(n <= 2) { return 1; }

  if(mfib.memo[n] !== undefined) { return mfib.memo[n]; }

  mfib.memo[n] = mfib(n - 2) + mfib(n - 1);

  return mfib.memo[n];
}
mfib.memo = [];

for(var i = 1; i < 51; i++) {　
   // console.log(rfib(i))
   //console.log(lfib(i))
  // console.log(mfib(i));
}