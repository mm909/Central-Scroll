$(document).ready(function() {
  $(".hoverButton").hover(
  function() {
    $('#scrollingButtonGroup').animate({
      right: "10px"
    }, 500);
    $('.hoverButton').hide(500);
  }, function() {
  })

  $("#scrollingButtonGroup").hover(
  function() {
  }, function() {
    $('#scrollingButtonGroup').delay(10000).animate({
      right: "-500px"
    }, 2000);
    $('.hoverButton').delay(10000).show(1000);
  })
});

function startFadeTimer(){
  $("#scrollingButtonGroup").css("display", "block");
  $(".hoverButton").css("display", "none");
  $('#scrollingButtonGroup').delay(10000).animate({
    right: "-500px"
  }, 2000);
  $('.hoverButton').delay(10000).show(1000);

}
