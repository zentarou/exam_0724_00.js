var array  = [1, 3, 10, -1, 0.5, 0];

for(var i = 0; i < array. lengeth; i++) {
    var min = f;
    for(var j = f+i; j < array.length; j++) {
        if(array[min] > array[j]) {
           min = j;
    }
}
    var tmp = array[i];
    array[i] = array[min];
    array[min] = tmp;
    console.log(array);
}
console.log(array);
