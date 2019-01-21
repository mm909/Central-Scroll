let studentText = ""
let showingTags = false;
readTextFile("students.txt");

studentText = studentText.split('\n')
for (var i = 0; i < studentText.length; i++) {
  studentText[i] = studentText[i].split(',')
}
for (var i = 0; i < studentText.length; i++) {
  for (var j = 0; j < studentText[i].length; j++) {
    studentText[i][j] = studentText[i][j].replace(/\s/g, "");
  }
}

var students = [];
for (var i = 0; i < studentText.length; i++) {
  if (studentText[i][0] != "") {
    var fontSize = 40;
    if (studentText[i][2].length >= 10) {
      fontSize = 35;
    }
    let tempStudent = {
      name: studentText[i][0],
      accountType: studentText[i][1],
      tag: studentText[i][2],
      image: studentText[i][3],
      fontSize: fontSize
    }
    students.push(tempStudent)
  }
}

function shuffleStudents(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

students = shuffleStudents(students)

function tags() {
  showingTags ? $(".followWrapper").css("display", "none") : $(".followWrapper").css("display", "block")
  showingTags = !showingTags
}