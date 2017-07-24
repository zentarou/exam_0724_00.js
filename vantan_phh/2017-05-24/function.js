function zerofill(n, digit) {
   var val = n .toString();
   while(val.length < digit) {
       val ="0" + val;
   }
   return val;
}

console.log(zerofill(5,4));