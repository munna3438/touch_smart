$(document).ready(function () {
  const btn = $("#scrl_top");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("active");
    } else {
      btn.removeClass("active");
    }
  });

  btn.on("click", function (e) {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
  $(window).loaded(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });
});
