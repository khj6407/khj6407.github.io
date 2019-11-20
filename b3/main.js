$(document).ready(function() {
  var len = $(".img_box li").length;

  function frAni() {
    $(".img_box")
      .not(":animated")
      .animate({ "margin-left": "-1200px" }, 800, function() {
        $(".img_box li")
          .eq(0)
          .appendTo($(".img_box"));

        $(".img_box").css("margin-left", "0px");

        $(".num_box li")
          .eq(0)
          .appendTo($(".num_box"));

        $(".num_box li button").removeClass("on");

        $(".num_box li")
          .eq(0)
          .find("button")
          .addClass("on");
      });
  }

  function bkAni() {
    $(".img_box li")
      .eq(len - 1)
      .prependTo($(".img_box"));

    $(".img_box").css("margin-left", "-1200px");

    $(".img_box")
      .not(":animated")
      .animate({ "margin-left": "0px" }, 800);

    $(".num_box li")
      .eq(len - 1)
      .prependTo($(".num_box"));

    $(".num_box li button").removeClass("on");

    $(".num_box li")
      .eq(0)
      .find("button")
      .addClass("on");
  }

  var intv1 = setInterval(function() {
    frAni();
  }, 2900);

  $(".btn_box .prev_btn").click(function() {
    clearInterval(intv1);

    bkAni();

    intv1 = setInterval(function() {
      frAni();
    }, 2900);
  });

  $(".btn_box .next_btn").click(function() {
    clearInterval(intv1);

    frAni();

    intv1 = setInterval(function() {
      frAni();
    }, 2900);
  });

  $(".num_box li").click(function() {
    clearInterval(intv1);

    var idx = $(this).index();

    var tar =
      parseInt(
        $(".num_box li")
          .eq(0)
          .attr("data-val")
      ) - 1;

    if (idx != tar) {
      for (var a = 0; a < idx - 1; a++) {
        $(".num_box li")
          .eq(0)
          .appendTo($(".num_box"));

        $(".img_box li")
          .eq(0)
          .appendTo($(".img_box"));
      }

      frAni();
    }

    intv1 = setInterval(function() {
      frAni();
    }, 2900);
  });
});
