let optShowing = false;

jQuery(document).ready(() => {
  $(".optionShadowBox").click(() => {
    toggleOptions()
  })
  $(".optionsBox").click(() => {
    toggleOptions()
  })
});

function toggleOptions() {
  optShowing ? $(".optionShadowBox").css("display", "none") : $(".optionShadowBox").css("display", "block")
  optShowing = !optShowing;
}