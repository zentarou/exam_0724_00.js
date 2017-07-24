// ttt.js
class TickTackToe {
  constructor() {
    this.board = [
      [ undefined, undefined, undefined ],
      [ undefined, undefined, undefined ],
      [ undefined, undefined, undefined ]
    ];
  }

  // マスを選んでチェックを入れる
  select(player, place) {
    var point = this.numberToPlace(place);
    this.board[point[0]][point[1]] = player;
  }

  // 勝敗判定
  judge()  {
    return this.judgeX() || this.judgeY() || this.judgeDiagonal();
  }

  judgeX() {
    for(var line of this.board) {
      var result = line.reduce(function(prev, current) {
        if(prev == current) {
          return current;
        }
        return undefined;
      });
      if(result !== undefined) {
        return result;
      }
    }
    return undefined;
  }

  judgeY() {
    for(var x = 0; x < 3; x++) {
      var result = this.board.reduce(function(prev, current) {
        if(prev[x] === current[x]) {
          return current;
        }
        return [];
      });
      if(result.length === 3) {
        return result[x];
      }
    }
    return undefined;
  }

  judgeDiagonal() {
    // 左上から右下
    var prev = undefined;
    for(var index = 0; index < 3; index++){
      if(index === 0) {
        prev = this.board[index][index];
        continue;
      }
      if(prev !== this.board[index][index]) {
        prev = undefined;
      }
    }
    if(prev !== undefined) {
      return prev;
    }
    // 右上から左下
    for(var y = 0; y < 3; y++) {
      var x = 2 - y;
      if(y === 0) {
        prev = this.board[y][x];
        continue;
      }
      if(prev !== this.board[y][x]) {
        prev = undefined;
      }
    }
    return prev;
  }

  // 0 ~ 8 までの数字を [ y, x ] の座標の配列にして
  // 返す関数
  numberToPlace(number) {
    var place = number.toString(3);
    if(place.length < 2) {
      place = "0" + place;
    }
    return [parseInt(place[0]), parseInt(place[1])];
  }
}

var game = new TickTackToe();

var playing = "79538246";
var winner = undefined;
for(var i = 0; i < playing.length; i++) {
  var player = i % 2 === 0 ? 'o' : 'x';
  var place = parseInt(playing[i]) - 1;
  game.select(player, place);
  winner = game.judge();
  if(winner !== undefined) {
    console.log(winner + " is won.");
    break;
  }
}
if(winner === undefined) {
  console.log("Draw game.");
}