// 文字列を逆さまにする関数 reverse
// 期待する挙動:
//
//   reverse("hoge") => egoh
var str = "hoge"; // reverseを表示

function reverse(original) {
  var reversed = []; // reversに[]を代入している
  for(var i = 0; i < original.length; i++) { // 変数iを代入している　
    reversed.unshift(original[i]);　
  }
  return reversed.join(''); // return
}

console.log(reverse(str)); // console.logでreturnを実行している