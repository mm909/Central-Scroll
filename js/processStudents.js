let maxStudents = 100;
let numStudents = 0;
jQuery(document).ready(function() {
  if (numStudents < maxStudents) processStudents();
});

function processStudents() {
  numStudents += students.length
  for (var i = 0; i < students.length; i++) {
    // console.log(students[i].name);
    let override = "";
    if (students[i].fontSize != 40) {
      override += "smallUsername "
    }
    let srcImage = "";
    if (students[i].image.toLowerCase().indexOf("http://") >= 0 || students[i].image.toLowerCase().indexOf("https://") >= 0) {
      srcImage = students[i].image;
    } else {
      srcImage = "images/" + students[i].image;
    }
    let student = `<div class="gitUsernameWrapper">
      <div class="gitUsername">
        <div class="top">
          <div class="pic">
            <img class="profile" src="` + srcImage + `">
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
  }
}