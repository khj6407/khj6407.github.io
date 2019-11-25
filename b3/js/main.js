// $(document).ready(function(){
//     $(".menu li").hover(function(){
//         $(".sub_wrap").addClass("on");
//         $(".menu li a").removeClass("on");
//         $(this).find("a").addClass("on");
//     });
//     $(".vs, .logo").mouseover(function(){
//         $(".sub_wrap").removeClass("on");
//         $(".menu li a").removeClass("on");
//     });
//     $(".sub_wrap ul").hover(function(){
//         var idx = $(this).index();
//         $(".menu li a").removeClass("on");
//         $(".menu li").eq(idx).find("a").addClass("on");
//     });
// });

$(document).ready(function () {
    var len = $(".img_slide li").length;

    console.log(len);

    function nextAni() {
        $(".img_slide").not(":animated").animate({
                "margin-right": "-1200px"
            }, 800,
            function () {
                $(".img_slide li").eq(0).appendTo($(".img_slide"));
                $(".img_slide").css("margin-right", "0px");
            });
    }

    function prevAni() {
        $(".img_slide li").eq(len - 1).prependTo($(".img_slide"));
        $(".img_slide").css("margin-right", "-1200px");
        $(".img_slide").not(":animated").animate({
            "margin-right": "0px"
        }, 800);
    }
    var intv = setInterval(function () {
        nextAni();
    }, 2900);
    $(".btn_box .btn2").click(function () {
        clearInterval(intv);
        nextAni();
        intv = setInterval(function () {
            nextAni();
        }, 2900);
    });
    $(".btn_box .btn1").click(function () {
        clearInterval(intv);
        prevAni();
        intv = setInterval(function () {
            nextAni();
        }, 2900);
    });
});