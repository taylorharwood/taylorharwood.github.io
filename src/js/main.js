$(window).on('load', function() {
  $(".hero").interactive_bg({
    strength: 20,
    scale: 1.05,
    animationSpeed: "100ms",
    contain: true,
    wrapContent: false
  });

  $(window).resize(function() {
    $(".hero > .ibg-bg").css({
      width: $(window).outerWidth(),
      height: $(window).outerHeight()
    });
  });

  setTimeout(function() {
    $('.hero__title').css('visibility', 'visible').addClass('fadeInDown');
    $('.hero__subtitle').css('visibility', 'visible').addClass('fadeInUp');
    $('.hero__footer').css('visibility', 'visible').addClass('fadeInUp');
  }, 200);
});