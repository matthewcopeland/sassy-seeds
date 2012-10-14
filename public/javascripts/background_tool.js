$(document).ready(function(){
  //-----------------------------------------
  // background changer thingy

  $("#gradient-submit").click(function(){
    var gAngle = $("#gradient-angle").val();
    var gs1 = $("#gradient-stop-1").val();
    var gs2 = $("#gradient-stop-2").val();
    $("body").css("background-color", "transparent" );
    $("html").css("background", "-webkit-linear-gradient(" + gAngle + ", " + gs1 + ", " + gs2 + ")" );
  });

  $("#solid-bg-submit").click(function(){
    var solidColor = $("#solid-bg-color").val();
    $("body").css("background-color", solidColor );
  });

  // Dave Ackerman's base64 encoder
  // https://github.com/dmackerman/base64-encoder
  var holder = document.getElementById('holder'),
      string = document.getElementById('base64string'),
      state = document.getElementById('status');
      bodyv = document.getElementById('thebody');
  if (typeof window.FileReader === 'undefined') {
      state.className = 'fail';
  } else {
      state.className = 'success';
      state.innerHTML = 'Drag-and-drop an image here.';
  }
  holder.ondragover = function () {
      this.className = 'hover';
      return false;
  };
  holder.ondragend = function () {
      this.className = '';
      return false;
  };
  holder.ondrop = function (e) {
      this.className = '';
      e.preventDefault();
      var file = e.dataTransfer.files[0],
          reader = new FileReader();
      reader.onload = function (event) {
          $('body').css('background-image', 'url(' + event.target.result + ')');
          $('#base64string').fadeIn().html(event.target.result);
      };
      reader.readAsDataURL(file);
      return false;
  };
});
