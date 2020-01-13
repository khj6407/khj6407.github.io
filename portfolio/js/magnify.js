(function($) {
  $.fn.jMagnify = function(o) {
    o = $.extend(
      {
        centralEffect: { "font-size": "200%" },
        lat1Effect: { "font-size": "180%" },
        lat2Effect: { "font-size": "150%" },
        lat3Effect: { "font-size": "120%" },
        resetEffect: { "font-size": "100%" }
      },
      o
    );

    return this.each(function(i) {
      var el = $(this);
      var uuid =
        (el.attr("id") || el.attr("class") || "internalName") + "_jMagnify";
      var myText = "";
      var aStr = el.text().split("");

      for (var len in aStr)
        myText += "<span class='" + uuid + "'>" + aStr[len] + "</span>";
      el.html(myText);
      $("." + uuid).hover(
        function() {
          $(this)
            .css(o.centralEffect)
            .next()
            .css(o.lat1Effect)
            .next()
            .css(o.lat2Effect)
            .next()
            .css(o.lat3Effect);
          $(this)
            .prev()
            .css(o.lat1Effect)
            .prev()
            .css(o.lat2Effect)
            .prev()
            .css(o.lat3Effect);
        },
        function() {
          $(this)
            .css(o.resetEffect)
            .next()
            .css(o.resetEffect)
            .next()
            .css(o.resetEffect)
            .next()
            .css(o.resetEffect);
          $(this)
            .prev()
            .css(o.resetEffect)
            .prev()
            .css(o.resetEffect)
            .prev()
            .css(o.resetEffect);
        }
      );
    });
  };

  $(".second").jMagnify({
    centralEffect: { color: "#9180d8" },
    lat1Effect: { color: "#ebc44d" },
    lat2Effect: { color: "#70ace8" },
    lat3Effect: { color: "#312d4e" },
    resetEffect: { color: "#fff" }
  });
})(jQuery);
