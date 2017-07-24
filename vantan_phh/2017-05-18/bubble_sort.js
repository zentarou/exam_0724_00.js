var array =[1, 3, 10, -1, 0.5];

for(var i = 0 ; i < array.length; i++) {
　　for(var j = array.length - 1; j > i; j--) {
        console.log("i; " + i + " , j: " + j)
        if(array[j-1]  > array[j]) {
           //temporary

           var tmp = array[j-1];
           array[j-1] = array[j];
           array[j] = tmp;
        }
    }
}
console.log(array);