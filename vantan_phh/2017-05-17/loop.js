var n = 0;
while(n < 10) {
    console.log(n);
    n = n + 1;
}

do {
    console.log(n);
    n =n -1;
} while (n > 10)

for(var i = 0 ; i < 10; i++) {
    console.log("for: " +i);
}

var obj = {
    name:'sasaki zentarou',
    age: 15,
    school: 'n'
};

for(key in obj) {
if(key==='age'){
    break
}
console.log(key);
console.log(obj[key]);
}