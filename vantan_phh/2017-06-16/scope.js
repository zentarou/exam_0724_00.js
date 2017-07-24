var x = 5;

function funcA() {
    let x = 10;
}

function funcB() {
    var x = 10;
}

function funcC() {
    x = 10;
}

function funcD() {
    console.log(x);
    var x = 10;
    console.log(x);
}

// funcA();
// funcB();
// funcC();
//console.log(x + 5);
funcD();
