window.addEventListener('load', function(){
    var cards = [];

    for (i = 1; i <= 13; i++) {
        cards.push(i);
    }

    var current = 7; //現在のカード
    var next; //比較するカード
    var action;
    var score = 0;
    var l = document.getElementById('l')
    var r = document.getElementById('r')
    var output = document.getElementById("output");
    l.addEventListener('click',function() {
        game('l')
    });
    h.addEventListener('click',function() {
        game('h');
    });

    function setNext() {
        var candidate; //候補
        do {
            candidate = cards[Math.floor(Math.random() * 13)]
        } while (candidate === current);
        next = candidate;
    }
    function isWon() {
        switch (action) {
            case "high":
                return current < next;
            case "low":
                return current > next;
        }
    }


    function game(answer) {
        setNext();
        output.innerHTML = "";
        output.innerHTML += "<p>現在のスコア" + score + "</p>";
        output.innerHTML += "<p>現在のカード" + current + "</p>";
        switch (answer) {
            case "h":
                action = "high";
                break;
            case "l":
                action = "low";
                break;
        }

        output.innerHTML += "<p>次のカードは:" + next + "</p>";
        if (isWon()) {
            current = next;
            score += 1;
            output.innerHTML += "<p>かち！</p>";
        } else {
            current = 7;
            score = 0;
            output.innerHTML += "<p>まけ！次のカードは7です</p>";
        }
    }  
});
