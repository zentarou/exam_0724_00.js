var a =2; 
var b =4;
var an =4;
var bn =2;
for(var i = 0; i < 100; i++) {
  if(i % 2 === 0) {
    console.log(a);
    a = a + an;
    an++;
  } else {
    console.log(b);
    b = b + bn;
    bn++;
  }
}