jQuery(document).ready(function($) {
  $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      dots: false,
      nav:true,
      rewindNav : true,
      responsive:{
          0:{
              items:2,
              nav:false,
              margin:6
          },
          400:{
              items:3,
              nav:false
          },
          900:{
              items:3
          },
          1301:{
              items:4
          }
      }
  });

  $('.site-content__arrow, .site-content__wrap h3').click(function(event) {
    $('.site-content').removeClass('site-content--active');
    $(this).parent().parent().toggleClass('site-content--active');
  });
});
