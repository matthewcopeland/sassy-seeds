$(document).ready(function() {

  // theme switcher
  var theme_switch = $("#theme-switcher li");
  theme_switch.click(function() {
    var stylesheet_name = $(this).attr("rel");
    var oldStyleSheet = $('link[rel=stylesheet]');
    $('body').fadeOut(500, function(){
      oldStyleSheet.delay(1000).remove();
    }).delay(500).fadeIn(500);

    $("head").after("<link rel=\"stylesheet\" type=\"text\/css\" href=\"\/stylesheets\/" + stylesheet_name + ".css\" \/>");
    $(".selected").removeClass("selected");
    $(this).addClass("selected");


  });

  // active events in mobile webkit.
  document.addEventListener("touchstart", function () {}, false);

});//end document ready