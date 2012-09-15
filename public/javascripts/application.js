$(document).ready(function() {

  $("#theme-switcher li").click(function(){
    var stylesheet_name = $(this).attr("rel");
    $("head").append("<link rel=\"stylesheet\" type=\"text\/css\" href=\"\/stylesheets\/" + stylesheet_name + ".css\" \/>" );
  });

});//end document ready