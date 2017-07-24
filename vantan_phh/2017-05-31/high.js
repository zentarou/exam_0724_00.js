var cards = [];
for (var i = 1; i <= 13; i++) {
    cards.push(i);
}
(cards);
var current = 7;
var next;
var action;
var score = 0
function setNext() {
    var candidate;
    do {
        candidate = cards[Math.floor(Math.random() * 13)];
    } while (candidate === current);
    next = candidate;
}
function isWon() {
    switch (action) {
        case "high":
            return (next > current);

        case "low":
            return (next < current);
    }
}

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function game() {

    setNext();
    console.log("現在のスコア" + score);
    console.log("現在のカード" + current);
    rl.question("行動を決めて下さい",
        function (answer) {
            console.log(answer);
            switch (answer) {
                case "h":
                    action = "higt";
                    break;
                case "l":
                    action = "low";
                    break;
            }
            consle.log("次のカードは; " + next)
            if (isWon()) {
                current = next;
                score += 1;
                console.log("かち!");
            } else {
                current = 7;
                score = 0;
                console.log("まけ!");
            }
            game();
        });
}
game();
