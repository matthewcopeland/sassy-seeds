$(document).ready(function() {

  // theme switcher
  var theme_switch = $("#theme-switcher li");
  theme_switch.click(function(){
    var stylesheet_name = $(this).attr("rel");
    $("head").append("<link rel=\"stylesheet\" type=\"text\/css\" href=\"\/stylesheets\/" + stylesheet_name + ".css\" \/>" );
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
  });

  // active events in mobile webkit.
  document.addEventListener("touchstart", function () {}, false);

});//end document ready