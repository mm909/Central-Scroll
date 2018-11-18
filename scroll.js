var maxScroll = 0;
var currScroll = 0;

function pageScroll() {
    currScroll = $(document).scrollTop();
    maxScroll = document.body.scrollHeight - window.innerHeight;
    if(currScroll > maxScroll - 10){
      $(window).scrollTop(0);
    }
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,10);
}


$(document).ready(function() {
  maxScroll = document.body.scrollHeight - window.innerHeight;
  currScroll = $(document).scrollTop();
  pageScroll();
});
