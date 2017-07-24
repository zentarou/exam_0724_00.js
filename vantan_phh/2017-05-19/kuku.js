for(var a = 1; a <= 9; a++) {
    var line ="";
    for(var b= 1;b <= 9; b++) {
        var cell =a * b;
        if(cell < 10) {
           cell = "0" + cell;
        }
    line = line + cell +" ";
    }
    console.log(line);
}
