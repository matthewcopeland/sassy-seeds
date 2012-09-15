$(document).ready(function() {

  $("#theme-switcher li").click(function(){
    var stylesheet_name = $(this).attr("rel");
    $("head").append("<link rel=\"stylesheet\" type=\"text\/css\" href=\"\/stylesheets\/" + stylesheet_name + ".css\" \/>" );
  });

  // active events in mobile webkit.
  document.addEventListener("touchstart", function () {}, false);

});//end document ready