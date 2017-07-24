// 1 配列の長さ-1の乱数を作る
// ex 0 ~ 3の乱数を作る => 1になった
// 2 決まった乱数の番地にある要素を一番後ろの要素と入れ替える
// ary[1] => 'b'
// ary => ['a', 'b', 'c', 'd']
// 3 配列の長さ-2の乱数を作る
// 4 以降 全ての要素を移動するまで繰り返す

// 1=> let num = Math.floor(Math.random() * 3));
// 2=>
let t = ary[num];
ary[num] = ary[ary.length - 1];
ary[ary.length -1] = t;