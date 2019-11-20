$(document).ready(function() {
  var len = $(".img_slide li").length;

  console.log(len);

  function nextAni() {
    $(".img_slide")
      .not(":animated")
      .animate(
        {
          "margin-right": "-1200px",
          opacity: "0.5"
        },
        800,
        function() {
          $(".img_slide li")
            .eq(0)
            .appendTo($(".img_slide"));
          $(".img_slide").css("margin-right", "0px");
          $(".img_slide").css("opacity", "1");
        }
      );
  }

  function prevAni() {
    $(".img_slide li")
      .eq(len - 1)
      .prependTo($(".img_slide"));
    $(".img_slide").css("margin-right", "-1200px");
    $(".img_slide").css("opacity", "0.5");
    $(".img_slide")
      .not(":animated")
      .animate(
        {
          "margin-right": "0px",
          opacity: "1"
        },
        3000
      );
  }
  var intv = setInterval(function() {
    nextAni();
  }, 5000);
});
