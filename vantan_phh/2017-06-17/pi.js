var str ="Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics.";
// 1. str をスペース(半角空白)で分割し、単語の配列にしなさい
// 2. その配列の要素を先頭から最後まで、 for 文で処理し、各要素の文字列オブジェクトの文字数を標準出力に表示しなさい。
// 文字列の文字数は "hoge".length のように文字列オブジェクトの length プロパティに格納されている。

var words = str.split(/.?/);
console.log(words);
for(var item of words) {
    console.log(item.length);
}