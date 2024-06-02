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
    $(".right").click(function () {
      owl.trigger("next.owl.carousel");
    });
    $(".left").click(function () {
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
    $(".right2").click(function () {
      owl2.trigger("next.owl.carousel");
    });
    $(".left2").click(function () {
      owl2.trigger("prev.owl.carousel", [300]);
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
