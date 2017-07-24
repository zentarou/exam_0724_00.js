// 1.クラスの人数分の配列を作る
//  => [1, 2, 3, ... 20];
// 2.作成した配列をランダムに入れ替える
// 3.結果をいい感じに出力
function shuffle(ary) {
    var n = ary.length, tmp, i;
    while (n) {
        i = Math.floor(Math.random() * n--);
        tmp = ary[n];
        ary[n] = ary[i];
        ary[i] = tmp;
    }
    return ary;
}

function outputSeat(ary) {
    var output = '';
    for (var i = 0; i < ary.length; i++) {
        console.log(i, output);
        var tmp = ary[i].toString(10);
        if(tmp.length === 1) {
            tmp = "0" + tmp;
        }
        output += tmp + ' ';
        // iが3,7,11,15,19,23,27....のとき
        if (i % 4 === 3) {
            output += '\n';
        }
    }
    return output;
}

const n = 20;
let seatList = [];
for (var i = 0; i < n; i++) {
    seatList[i] = i + 1;
}
console.log(outputSeat(shuffle(seatList)));