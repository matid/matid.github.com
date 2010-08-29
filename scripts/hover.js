$(document).ready(function(){
  $('dl.hover dd').hover(function(){
    $(this).prev().addClass('hover')
  }, function(){
    $(this).prev().removeClass('hover')
  })
})