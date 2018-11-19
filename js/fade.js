$(document).ready(function() {

  $(".hoverButton").hover(
  function() {
    $("#scrollingButtonGroup").css("display", "block");
  }, function() {
    $('#scrollingButtonGroup').delay(5000).hide(1000);
  })
});

function startFadeTimer(){
  $("#scrollingButtonGroup").css("display", "block");
  $('#scrollingButtonGroup').delay(5000).hide(1000);
}
