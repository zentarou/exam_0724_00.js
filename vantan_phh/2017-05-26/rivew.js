// 変数の初期化
var a = 0;
// 変数の定義
var b;
// 変数への代入
b = 0;

// リテラル = 値、もしくはその表現方法、表記
// String / 文字列
"文字列"
'文字列'
// Number / 数値
0
0xff // 16進数
0b11 // 2進数
0o77 // 8進数
0.01 // 実数
0.07e10 // 指数表記
// Boolean / 真偽値
true
false
// 特殊型
null // 空であることを示す
undefined // 未定義であることを示す
// Array / 配列
var array = ["item", "item", "item"];
array[0] // 要素を参照
array[0] = "override" // 要素に代入
// Object / オブジェクト
var object = { 
  key: 'value' // Property / プロパティ
};
object.key // プロパティを参照
object['key'] // プロパティを参照
object.key = 'override' // プロパティに代入
object['key'] = 'override'
// Function / 関数
function funcName(arg1, arg2) {
  // statement
}
object.func = function(arg1, arg2) {
  // statement
}

1 + 1 // 足し算
2 - 1 // 引き算
3 * 3 // 掛け算
4 / 4 // 割り算
5 % 1 // 余り算

// 比較演算子
1 == 1 // 等価
1 != 2 // 非等価
1 === 1 // 同値
1 !== 2 // 非同地
1 < 2 // 左辺が右辺より小さい
1 <= 2 // 左辺が右辺以下
2 > 1 // 左辺が右辺より大きい
2 >= 1 // 左辺が右辺以上

// 論理演算子
true && true // AND
true || false // OR
!true // NOT

// 制御構文
// 条件で分岐する - 単純分岐
if(true) {
  // statement
} else {
  // statement
}
// 条件で分岐 - 多岐分岐
switch('val') {
  case 'pattern1':
    // statement
    break;
  case 'pattern2':
    // statement
    break;
}
// 繰り返し / ループ
// 条件によって繰り返し
while(false) {
}
// 条件によって繰り返す(条件の評価が後)
do {
} while(false)
// 指定回数繰り返し
for(var i = 0; i < 10; i++) {
}
// p94 〜 p97 別の for 文の書き方

/**
 * テスト範囲
 * p39 〜 p139
 * p176 〜 p185
 */