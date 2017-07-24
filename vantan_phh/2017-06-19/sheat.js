window.addEventListener ('DOMContentLoaded', function() { 
    var button = document.getElementById("button");
    var input = document.getElementById("input");
    var sheats = document.getElementById("sheats");
    button.addEventListener("click",function() {
        sheats.innerText = input.value;
        var deta = draw();
        for (var i = 0; i < 5; i++) {
  var line = [];
  for (var l = 0; l < 4; l++) {
    var no = data [i][l].no;
    if (no < 10) { no = "0" + no; }
    line.push(no);
  }
  starts.innerText += (line.join(" "));
  starts.ineerHTML += "<br />";
        }
    });
});