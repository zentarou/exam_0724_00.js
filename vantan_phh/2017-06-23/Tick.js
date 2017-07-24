let board, stack;

function startGame(moves) {
    // 文字列に変換
    move = moves.toString();
    console.log(moves);
    // 盤面管理のため長さ9の配列を作っておく
    board = new Array(9);

    for(var i = 0; i < moves,length; i++) {
        stack.push(moves[i] - 1);
    }
}