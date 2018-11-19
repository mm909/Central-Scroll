$(document).ready(function() {
  $("#hideShow").hover(
  function() {
    $("#hideShow").css("background-color", "#3f4650");
  }, function() {
    $("#hideShow").css("background-color", "transparent");
  })
});



let hideShowVar = "HIDE";
function hideShow(){
  if (hideShowVar == "HIDE") {
    $("#hideShowButtons").css("display", "none");
    $("#hideShow").html("Show");
    hideShowVar = "SHOW";
  } else {
    $("#hideShowButtons").css("display", "");
    $("#hideShow").html("Hide");
    hideShowVar = "HIDE";
  }
}
