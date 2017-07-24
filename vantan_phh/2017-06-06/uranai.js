function uranai(name1, name2) {
    var sum = 0;
    for(var i=0; i<name1.length;i++) {
        sum += name1.charCodeAt(i);
    }
    for(var i=0; i<name2.length;i++) {
       sum += name2.charCodeAt(i);
    }
    var result= sum % 100;
    return result;
}
console.log(uranai('那須泰斗','なちょす') + '%');