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
      status: studentText[i][4],
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

function filterStudents(x) {
  alert("Literally does nothing");
  numStudents = 0;
  $(".followWrapper").empty();
  $(".followWrapper").html("");
  console.log($(".followWrapper"));
  for (var i = 0; i < students.length; i++) {
    if (students[i].status == x || x == "All") {
      console.log(students[i].name);
      let override = "";
      if (students[i].fontSize != 40) {
        override += "smallUsername "
      }
      let student = `<div class="gitUsernameWrapper">
        <div class="gitUsername">
          <div class="top">
            <div class="pic">
              <img class="profile" src="images/` + students[i].image + `">
              <i class="fa fa-` + students[i].accountType + ` icon"></i>
            </div>
            <div class="text">
              <p>` + students[i].name + `</p>
            </div>
          </div>
          <div class="bottom">
            <div class="username  ` + override + `">
              <p>@` + students[i].tag + `</p>
            </div>
          </div>
        </div>
      </div>
      `
      $tempStudent = $(student)
      $(".followWrapper").append($tempStudent);
      numStudents++;
    }
  }
}