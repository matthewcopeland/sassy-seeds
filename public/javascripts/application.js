$(document).ready(function() {
  // theme switcher
  checkCookieSetStyle();
  var theme_switch = $("#theme-switcher li");
  theme_switch.click(function() {
	var stylesheet_name = $(this).attr("rel");
	$(".selected").removeClass("selected");
	$(this).addClass("selected");
	setStyleCookie("style_name", stylesheet_name, 1);
	$('html').fadeOut(300, function(){
      $("link").attr("href", "/stylesheets/" + stylesheet_name + ".css");
    }).fadeIn(150);
  });
  // active events in mobile webkit.
  document.addEventListener("touchstart", function () {}, false);
});

// cookies
function setStyleCookie(c_name,value,exdays){
  var exdate=new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
  document.cookie=c_name + "=" + c_value;
 }
function checkCookieSetStyle(){
  var style_name=getStyleCookie("style_name");
    if (style_name!=null && style_name!="")
    {
	  $("link").attr("href", "/stylesheets/" + style_name + ".css");
	  $(".selected").removeClass("selected");
	  $('#theme-switcher li[rel='+ style_name + ']').addClass("selected");	
    }
	else 
	{
		$('#theme-switcher li:first').addClass("selected");
	}
  }
function getStyleCookie(c_name){
  var i,x,y,ARRcookies=document.cookie.split(";");
  for (i=0;i<ARRcookies.length;i++)
  {
    x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
    y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
    x=x.replace(/^\s+|\s+$/g,"");
    if (x==c_name)
      {
      return unescape(y);
      }
    }
  }
//end document ready