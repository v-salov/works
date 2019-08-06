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

  //Настройка select
  $('.select__checked').on('click', function() {
    $('.select__dropdown').toggleClass('select__dropdown_open')
  })
  $('.select__option').on('click', function() {
    let value = $(this).attr('data-value');
    $('#select-type').val(value);
    $('.select__checked').text(value);
    $('.select__dropdown').toggleClass('select__dropdown_open');
  })

  $("a[href^='#']").on('click', function() {
    let _href = $(this).attr('href');
    $('html, body').animate({scrollTop: $(_href).offset().top - 120 + 'px'});
    return false;
  })
  $('[type="tel"]').mask("+7 (999) 999-99-99");

  //Показывать карту, только после того, как докрутили до нее
  let reviews = $('.reviews');
  let reviewsTop = reviews.offset().top;
  $(window).bind('scroll', function() {
    let windowTop = $(this).scrollTop();
    if (windowTop > reviewsTop) {
      $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A62ab53726a2b22ffd2ed2483d7adad7bfaa5dcfe2eaea19e2cc7252406d4fbfe&amp;width=100%25&amp;height=400&amp;lang=ru_UA&amp;scroll=false"></script>');
      $(window).unbind('scroll');
    }
  })
});