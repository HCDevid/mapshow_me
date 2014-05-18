$(document).ready(
  function() {
    $('.container-full').on('mouseenter', function() {
      $(this).addClass('brighten')
      $(this).parent().removeClass('mainchange')
      
    });
    $('.container-full').on('mouseleave', function() {
      $(this).removeClass('brighten')
      $(this).parent().addClass('mainchange')
    });
});

$(document).ready(
  function() {
    $('.panel-default').on('mouseenter', function() {
      $(this).addClass('hovertext');
      $(this).find('.panel-heading').addClass('hovertext')
    });
    $('.panel-default').on('mouseleave', function() {
      $(this).removeClass('hovertext');
      $(this).find('.panel-heading').removeClass('hovertext')
    });
});