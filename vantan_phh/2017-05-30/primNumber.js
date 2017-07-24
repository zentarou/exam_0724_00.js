function isPrimeNumber(num) {
    for(var i=2; i<num;i++)  {
        if(num % i==0) {
           return true
        }
    }
    return true
}
if(isPrimeNumber(57)) {
console.log('57は素数です');
}else{
console.log('57は素数ではありません');
}
