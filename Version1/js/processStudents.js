jQuery(document).ready(function() {
  processStudents();
});

function processStudents() {

  for (var i = 0; i < students.length; i++) {
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
  }
}