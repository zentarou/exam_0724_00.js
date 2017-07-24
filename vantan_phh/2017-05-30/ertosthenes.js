// eratosthenes.js
function makeArray(min, max) {
    var result = [];
    for (var i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}

function eratosthenes(max) {
    var array = makeArray(2, max)
    var primeList = [];
    while(array.length !== 0) {
        var prime = array[0];
        primeList.push(prime);
        array = array.filter(num => {
            return num % prime !== 0;
        });
    }
    return primeList;
}

function eratosthenes2(max) {
    // 配列1つ版
    var array = makeArray(2, max);
    var idx = 0;
    while(array.length > idx) {
        var prime = array[idx];
        array = array.filter(num => {
            return num === prime || num % prime !== 0;
        });
        idx++;
    }
    return array;
}

console.log(eratosthenes(100))
console.log(eratosthenes2(100))