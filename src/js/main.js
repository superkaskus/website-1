// Show Menu on Book

$(window).bind('scroll', function () {
  var navHeight = $('#js-header').height() - 600;
  if ($(window).scrollTop() > navHeight) {
    $('.navbar-custom').addClass('activo');
  } else {
    $('navbar-custom').removeClass('activo');
  }
});
