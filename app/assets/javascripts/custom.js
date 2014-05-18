// Sets main backgrounds to change color on hovers
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

// Sets panels at bottom to change color based on hovers
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

// ZeroClipboard - couldn't get this to work
// $(document).ready(
//   $('.text-center').change(function() {
//     var client = new ZeroClipboard( $('.clip_button') );
//       client.on( 'copy', function(event) {
//         event.clipboardData.setData('text/plain', event.target.closest('a'));
//       } );

// }));