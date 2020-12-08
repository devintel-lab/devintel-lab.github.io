$('document').ready(function () {
  // when window scrolled down, adjust the size of the navigation bar
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 80 && $(window).width() > 1200) {
      $(".navbar").css("padding", "10px 10px");
      $(".navbar a").css("font-size", "16px");
      $(".lab_logo_text").css("font-size", "medium");
      $(".lab_logo_text").css("margin-top", "5px");
    } else if ($(window).width() > 1200) {
      $(".navbar").css("padding", "30px 10px");
      $(".navbar a").css("font-size", "18px");
      $(".lab_logo_text").css("font-size", "larger");
      $(".lab_logo_text").css("margin-top", "20px");
    } else {
      $(".navbar").css("padding", "0px");
    }
  });
  $(window).on("resize", function () {
    $(".lab_member_grid div img").css("height", $(".lab_member_grid div img").css("width"))
    if ($(window).width() > 1200) {
      $(".navbar").css("width", "100%");
      $(".navbar").css("margin-left", "0px");
      $(".logo_placeholder").attr("onclick", "return true")
      if ($(window).scrollTop() > 80) {
        $(".navbar").css("padding", "10px 10px");
        $(".navbar a").css("font-size", "16px");
        $(".lab_logo_text").css("font-size", "medium");
        $(".lab_logo_text").css("margin-top", "5px");
      } else {
        $(".navbar").css("padding", "30px 10px");
        $(".navbar a").css("font-size", "18px");
        $(".lab_logo_text").css("font-size", "larger");
        $(".lab_logo_text").css("margin-top", "20px");
      }
    } else {
      $(".navbar").css("width", "0px");
      $(".homepage").css("margin-left", "0px");
      $(".lab_logo").css("margin-left", "0px");
      $(".navbar").css("padding", "0px");
      $(".logo_placeholder").attr("onclick", "return false")
    }
  });

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

  if ($(window).width() > 1200) {
    $(".navbar").css("width", "100%");
    $(".navbar").css("margin-left", "0px");
    $(".logo_placeholder").attr("onclick", "return true")
  } else {
    $(".navbar").css("width", "0px");
    $(".homepage").css("margin-left", "0px");
    $(".lab_logo").css("margin-left", "0px");
    $(".navbar").css("padding", "0px");
    $(".logo_placeholder").attr("onclick", "return false")
  }

  $(".lab_member_grid div img").css("height", $(".lab_member_grid div img").css("width"))
});

function toggleNav() {
  if ($(window).width() < 1200) {
    console.log($(".navbar").css("width"))
    if ($(".navbar").css("width") === "0px") {
      $(".navbar").css("width", "250px");
      $(".homepage").css("margin-left", "250px");
      $(".lab_logo").css("margin-left", "250px")
    } else {
      $(".navbar").css("width", "0px");
      $(".homepage").css("margin-left", "0px");
      $(".lab_logo").css("margin-left", "0px");
    }
  }
}