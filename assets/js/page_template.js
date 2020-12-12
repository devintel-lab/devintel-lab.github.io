$('document').ready(function () {
  // when window scrolled down, adjust the size of the navigation bar
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 80 && $(window).width() > 720) {
      $(".navbar").css("padding", "10px 10px");
      $(".navbar a").css("font-size", "16px");
      $(".lab_logo_text").css("font-size", "larger");
      $(".lab_logo_text").css("margin-top", "5px");
    } else if ($(window).width() > 720) {
      $(".navbar").css("padding", "30px 10px");
      $(".navbar a").css("font-size", "18px");
      $(".lab_logo_text").css("font-size", "large");
      $(".lab_logo_text").css("margin-top", "20px");
    } else {
      $(".navbar").css("padding", "0px");
      if ($(window).scrollTop() > 80) {
        $(".lab_logo_text").css("visibility", "hidden");
      } else {
        $(".lab_logo_text").css("visibility", "visible");
      }
    }
  });

  var prev_window_size = $(window).width();

  $(window).on("resize", function () {
    if (prev_window_size != $(window).width()){
    // $(".lab_member_grid div img").css("height", $(".lab_member_grid div img").css("width"))
    if ($(window).width() > 720) {
      $(".lab_logo_text").css("visibility", "visible");
      $(".navbar").css("width", "100%");
      $(".navbar").css("margin-left", "0px");
      $(".logo_placeholder").attr("onclick", "return true")
      $(".overlay").css("visibility", "hidden")
      if ($(window).scrollTop() > 80) {
        $(".navbar").css("padding", "10px 10px");
        $(".navbar a").css("font-size", "16px");
        $(".lab_logo_text").css("font-size", "larger");
        $(".lab_logo_text").css("margin-top", "5px");
      } else {
        $(".navbar").css("padding", "30px 10px");
        $(".navbar a").css("font-size", "18px");
        $(".lab_logo_text").css("font-size", "large");
        $(".lab_logo_text").css("margin-top", "20px");
      }
    } else {
      $(".slideshow_container").css("top", "88px");
      $(".navbar").css("width", "0px");
      $(".homepage").css("margin-left", "0px");
      $(".lab_logo").css("margin-left", "0px");
      $(".navbar").css("padding", "0px");
      $(".logo_placeholder").attr("onclick", "return false")
      $(".overlay").css("visibility", "visible")
      if ($(window).scrollTop() > 80) {
        $(".lab_logo_text").css("visibility", "hidden");
      } else {
        $(".lab_logo_text").css("visibility", "visible");
      }
    }
  }});

  var acc = $(".accordion");
  for (var i = 0; i < acc.length; i++) {
    $(acc[i]).on("click", function () {
      $(this).toggleClass("activate");
      var panel = $(this).next();
      if (!($(panel).css("max-height") === "0px")) {
        $(panel).css("max-height", "0px");
      } else {
        $(panel).css("max-height", $(panel).prop("scrollHeight"));
      }
    })
  }
  var acc = $(".accordion");
  for (var i = 0; i < acc.length; i++) {
    if ($(acc[i]).hasClass("activate")) {
      var panel = $(acc[i]).next();
      $(panel).css("max-height", "min-content");
      }
    }

  if ($(window).width() > 720) {
    $(".lab_logo_text").css("font-size", "large");
    $(".lab_logo_text").css("margin-top", "20px");
    $(".navbar").css("width", "100%");
    $(".navbar").css("margin-left", "0px");
    $(".logo_placeholder").attr("onclick", "return true")
    $(".overlay").css("visibility", "hidden")
    if ($(window).scrollTop() > 80) {
      $(".lab_logo_text").css("font-size", "larger");
      $(".lab_logo_text").css("margin-top", "5px");
    }
  } else {
    $(".slideshow_container").css("top", "88px");
    $(".navbar").css("width", "0px");
    $(".homepage").css("margin-left", "0px");
    $(".lab_logo").css("margin-left", "0px");
    $(".navbar").css("padding", "0px");
    $(".logo_placeholder").attr("onclick", "return false")
    $(".overlay").css("visibility", "visible")
    if ($(window).scrollTop() > 80) {
      $(".lab_logo_text").css("visibility", "hidden");
    } else {
      $(".lab_logo_text").css("visibility", "visible");
    }
  }

  // $(".lab_member_grid div img").css("height", $(".lab_member_grid div img").css("width"))
});

function toggleNav() {
  hide_overlay()
  if ($(window).width() <= 720) {
    console.log($(".navbar").css("width"))
    if ($(".navbar").css("width") === "0px") {
      $(".navbar").css("width", "250px");
      $(".homepage").css("margin-left", "250px");
      $(".lab_logo").css("margin-left", "250px")
      $(".lab_logo_text").css("margin-left", "250px")
      $(".navbar a:first-child").css("margin-left", "0")
    } else {
      $(".navbar").css("width", "0px");
      $(".homepage").css("margin-left", "0px");
      $(".lab_logo").css("margin-left", "0px");
      $(".lab_logo_text").css("margin-left", "0px")
    }
  }
}

function hide_overlay() {
  $(".overlay").css("visibility", "hidden")
}
