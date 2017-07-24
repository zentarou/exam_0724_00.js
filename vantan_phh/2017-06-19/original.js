class Student {
  constructor(no, eyesight) {
    this.no = no;
    this.eyesight = eyesight;
    this.nears = [];
  }
}

var students = [
  new Student(1, 1.0),
  new Student(2, 1.0),
  new Student(3, 1.0),
  new Student(4, 0.5),
  new Student(5, 1.0),
  new Student(6, 1.5),
  new Student(7, 1.0),
  new Student(8, 2.0),
  new Student(9, 0.7),
  new Student(10, 0.6),
  new Student(11, 1.0),
  new Student(12, 1.0),
  new Student(13, 0.5),
  new Student(14, 1.8),
  new Student(15, 0.5),
  new Student(16, 1.0),
  new Student(17, 1.0),
  new Student(18, 0.1),
  new Student(19, 1.0),
  new Student(20, 0.7)
];

var currently = [
  [18, 7, 4, 6, 11],
  [15, 3, 16, 2, 1],
  [9, 8, 5, 19, 17],
  [12, 14, 10, 13, 20]
];

for (var y = 0; y < 4; y++) {
  for (var x = 0; x < 5; x++) {
    var index = currently[y][x] - 1;
    var student = students[index];
    if (currently[y - 1] && currently[y - 1][x]) {
      student.nears.push(students[currently[y - 1][x] - 1]);
    }
    if (currently[y + 1] && currently[y + 1][x]) {
      student.nears.push(students[currently[y + 1][x] - 1]);
    }
    if (currently[y][x - 1]) {
      student.nears.push(students[currently[y][x - 1] - 1]);
    }
    if (currently[y][x + 1]) {
      student.nears.push(students[currently[y][x + 1] - 1]);
    }
  }
}

var weak = [];
var strong = [];

for (var s of students) {
  if (s.eyesight <= 0.5) {
    weak.push(s);
  } else {
    strong.push(s);
  }
}

function sample(array) {
  var index = Math.floor(Math.random() * array.length);
  return array.splice(index, 1)[0];
}

function draw() {
  var sheats = [];
  for (var i = 0; i < 5; i++) {
    var line = [];
    for (var l = 0; l < 4; l++) {
      var student = null;
      if (i < 2) {
        student = sample(weak);
      }
      if (!student) {
        student = sample(strong);
      }
      line.push(student);
    }
    sheats.push(line);
  }
  return sheats;
}

/*
// 出力
console.log("   <T V>");
var sheats = draw();
for (var i = 0; i < 5; i++) {
  var line = [];
  for (var l = 0; l < 4; l++) {
    var no = sheats[i][l].no;
    if (no < 10) { no = "0" + no; }
    line.push(no);
  }
  console.log(line.join(" "));
}
*/

/**
 * 結果決まった座席
 *    <T V>
 * 15 04 18 13
 * 10 05 14 02
 * 03 19 09 16
 * 20 07 12 11
 * 06 17 01 08
 */