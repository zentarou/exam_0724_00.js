var age = 16;
var vehicle = "car";
if(age< 20) {
    console.log("お酒は飲めない");
} else if(vehicle==="car") {
    console.log("酒飲むな");
}else {
    console.log("お酒が飲めない");
}

var subject ="国語";
var color = null;
switch(subject) {
    case "国語":
    color = "green";
    break;
    case "数学":
    color = "biue";
    break;
}
console.log(color);
