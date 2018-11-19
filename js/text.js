var textType = "JS";
var textSpeed = "Medium"

$(document).ready(function() {
  popluateText();
});

function setTextSpeed(s) {
  textSpeed = s;
  $("#speedButton").html(textSpeed);
  $("#speedButton2").html(textSpeed);
}

function setTextType(t,s) {
  textType = t;
  $("#langButton").html(textType)
  $("#langButton2").html(textType)
  setPrettyPrintClass();
  if(s){
    $("#codeScroll").html(escape($("#codeInput").val()))
    $('.prettyprinted').removeClass('prettyprinted');
    prettyPrint();
  }
}

function goText() {
  setTextSpeed(textSpeed)
  if ($("#codeInput").val() == "") {
    if (textType == "JS") {
      $("#codeInput").val(defaultCodeJS);
    } else if (textType == "HTML") {
      $("#codeInput").val(defaultCodeHTML);
    } else if (textType == "CSS") {
      $("#codeInput").val(defaultCodeCSS);
    }
  }
  $("#codeScroll").html(escape($("#codeInput").val()));
  $(".wrapper").css("display", "block");
  $(".startScreen").css("display", "none");
  setPrettyPrintClass();
  $('.prettyprinted').removeClass('prettyprinted');
  prettyPrint();
}

function backText(){
  $(".wrapper").css("display", "none");

  $(".startScreen").css("display", "block");

}

function popluateText() {
  $("#codeScroll").html($("#codeInput").val());
}

function clearText() {
  $("#codeInput").val("")
}

function resetText() {
  if (textType == "JS") {
    $("#codeInput").val(defaultCodeJS);
  } else if (textType == "HTML") {
    $("#codeInput").val(defaultCodeHTML);
  } else if (textType == "CSS") {
    $("#codeInput").val(defaultCodeCSS);
  }
}

function setPrettyPrintClass() {
  let temp = textType.toLowerCase();
  $("#codeScroll").removeClass("lang-" + 'js')
  $("#codeScroll").removeClass("lang-" + 'html')
  $("#codeScroll").removeClass("lang-" + 'css')
  $("#codeScroll").addClass("lang-" + temp)
}

function escape(str) {
  str = str.replace(/</g, "&lt;");
  str = str.replace(/>/g, "&gt;");
  return str;
}
