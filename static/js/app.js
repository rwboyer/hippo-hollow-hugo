$(function(){
  $('#menu-switch').change(function(){
    if ($(this).is(":checked")) {
      $('#menu').addClass("menu-show");
      $('#page-wrap').addClass("move-page");
    }
    else{
      $('#menu').removeClass("menu-show");
      $('#page-wrap').removeClass("move-page");
    }
  });
});