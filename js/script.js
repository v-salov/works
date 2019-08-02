$(window).load(function () {
  $(".before-after").twentytwenty({
    before_label: 'Без скинали',
    after_label: 'Со скинали',
  });
  $(".before-slider").slick({
    draggable: false,
    dots: true,
    dotsClass: 'before-slider__dots',
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right')
  });
  $('.menu-button').on('click', function() {
    $('.menu').toggleClass('menu_active')
  })
});