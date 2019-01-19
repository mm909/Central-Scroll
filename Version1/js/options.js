jQuery(document).ready(function() {
  $(".optionShadowBox").click(function() {
    optShowing ? $(".optionShadowBox").css("display", "none") : $(".optionShadowBox").css("display", "block")
    optShowing = !optShowing;
  })
  $(".optionsBox").click(function() {
    optShowing ? $(".optionShadowBox").css("display", "none") : $(".optionShadowBox").css("display", "block")
    optShowing = !optShowing;
  })
});

let optShowing = false;

function showOptions() {
  optShowing ? $(".optionShadowBox").css("display", "none") : $(".optionShadowBox").css("display", "block")
  optShowing = !optShowing;
}