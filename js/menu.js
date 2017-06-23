  $(function() {
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 50) {
        $(".navbar-fixed-top").addClass("navbar-custom");
      } else {
        $(".navbar-fixed-top").removeClass("navbar-custom");
      }
    });
  });