(function ($) {
  $(document).ready(function () {
    // Scroll to Top
    jQuery(".scrolltotop").click(function () {
      jQuery("html").animate({ scrollTop: "0px" }, 400);
      return false;
    });

    jQuery(window).scroll(function () {
      var upto = jQuery(window).scrollTop();
      if (upto > 500) {
        jQuery(".scrolltotop").fadeIn();
      } else {
        jQuery(".scrolltotop").fadeOut();
      }
    });

    $(".products-slider").owlCarousel({
      loop: true,
      margin: 0,
      center: true,
      nav: false,
      dots: true,
      autoplay: false,
      autoplayTimeout: 2000,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 3,
        },
        960: {
          items: 2,
        },
        1200: {
          items: 3,
        },
        1920: {
          items: 3,
        },
      },
    });

    var owl = $(".products-slider");
    owl.owlCarousel();
    $(".controlar1 .right").click(function () {
      owl.trigger("next.owl.carousel");
    });
    $(".controlar1 .left").click(function () {
      owl.trigger("prev.owl.carousel", [300]);
    });

    $(".products-slider2").owlCarousel({
      loop: true,
      margin: 0,
      center: true,
      nav: false,
      dots: true,
      autoplay: false,
      autoplayTimeout: 2000,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 3,
        },
        960: {
          items: 2,
        },
        1200: {
          items: 3,
        },
        1920: {
          items: 3,
        },
      },
    });

    var owl2 = $(".products-slider2");
    owl2.owlCarousel();
    $(".controlar2 .right2").click(function () {
      owl2.trigger("next.owl.carousel");
    });
    $(".controlar2 .left2").click(function () {
      owl2.trigger("prev.owl.carousel", [300]);
    });

    $(".products-slider3").owlCarousel({
      loop: true,
      margin: 0,
      center: true,
      nav: false,
      dots: true,
      autoplay: false,
      autoplayTimeout: 2000,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 3,
        },
        960: {
          items: 2,
        },
        1200: {
          items: 3,
        },
        1920: {
          items: 3,
        },
      },
    });

    var owlx = $(".products-slider3");
    owlx.owlCarousel();
    $(".controlar3 .right").click(function () {
      owlx.trigger("next.owl.carousel");
    });
    $(".controlar3 .left").click(function () {
      owlx.trigger("prev.owl.carousel", [300]);
    });

    $(".products-sliderz").owlCarousel({
      loop: true,
      margin: 0,
      center: true,
      nav: false,
      dots: true,
      autoplay: false,
      autoplayTimeout: 2000,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 3,
        },
        960: {
          items: 2,
        },
        1200: {
          items: 3,
        },
        1920: {
          items: 3,
        },
      },
    });

    var owlz = $(".products-sliderz");
    owlz.owlCarousel();
    $(".controlarz .right2").click(function () {
      owlz.trigger("next.owl.carousel");
    });
    $(".controlarz .left2").click(function () {
      owlz.trigger("prev.owl.carousel", [300]);
    });

    $(".ps-slider").owlCarousel({
      loop: true,
      margin: 0,
      center: true,
      nav: false,
      dots: true,
      autoplay: false,
      autoplayTimeout: 2000,
      responsiveClass: true,
      responsiveRefreshRate: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        960: {
          items: 1,
        },
        1200: {
          items: 1,
        },
        1920: {
          items: 1,
        },
      },
    });

    var owl3 = $(".ps-slider");
    owl3.owlCarousel();
    $("#rightarrow").click(function () {
      owl3.trigger("next.owl.carousel");
    });
    $("#leftarrow").click(function () {
      owl3.trigger("prev.owl.carousel", [300]);
    });
  });
})(jQuery);
