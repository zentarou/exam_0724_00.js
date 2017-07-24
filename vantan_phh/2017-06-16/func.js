var y = 2;

function double(x) {
    x = 9;
    y++; // 副作用
    return x * 2;
}

console.log(double(3) * y);
console.log(double(3) * y);