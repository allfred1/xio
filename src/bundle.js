var smoothScrollStatus = true;

var smoothTransition = `
$('a').on('click', function(event) {
  event.preventDefault();
  
  var targetPage = $(this).attr('href');
  
  $('html, body').animate({
    opacity: 0
  }, 500, function() {
    window.location.href = targetPage;
  });
});
`;
     
function smoothScroll(smoothScrollStatus) {
  switch (smoothScrollStatus) {
    case true:
      var htmlElement = document.documentElement;
      htmlElement.style.scrollBehavior = "smooth";
      console.log("smoothScroll called with true value");
      break;

    case false:
      console.log("smoothScroll called with false value");
      break;
  }
}
smoothScroll(smoothScrollStatus);