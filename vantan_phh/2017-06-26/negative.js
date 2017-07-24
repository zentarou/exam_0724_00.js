let array = [-1, -2, 3, -5, -7, 12];

array = array.map(function(number) {
    console.log(number);
    return Math.abs(number) * -1; //数字を全て-にしている
})

console.log (array);