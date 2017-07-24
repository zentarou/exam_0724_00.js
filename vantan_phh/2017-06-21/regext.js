// 問題
// 以下の文字列にマッチする正規表現を書きなさい。
// 1) Mr. Lorand
// 2) Mrs. Kight
// 3) Ms. Macgonagal
// 4) Sho Kusano
// 5) Mr. Jack Daniel
var names = [
  'Mr. Lorand',
  'Mrs. Kings',
  'Ms. Macgonagal',
  'Sho Kusano',
  'Mr. Jack Daniel',
]
var regexp = /(M(r|s|rs)\.)?([A-Z]*([a-z]*)?

for(var name of names) {
    console.log(name.match(regexp));
}