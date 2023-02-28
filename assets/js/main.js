$(function () {
    $(window).scroll(function () {
        var header = $("header"),
            scroll = $(window).scrollTop();

        if (scroll >= 100) header.addClass("add-bg");
        else header.removeClass("add-bg");
    });
    $(".community-slider, .works-carousel").slick({
        slidesToShow: 1,
        adaptiveHeight: true,
        arrows: false,
        dots: true,
        infinite: false,
    });

    $("body").on("click", function (e) {
        if ($(e.target).is(".menu-toggle, .menu-toggle *") && !$(".nav-wrapper").is(":visible"))
            $(".nav-wrapper").slideDown({
                start: function () {
                    $(this).css("display", "flex");
                },
                duration: 300,
            });
        else if (
            $(e.target).is(".menu-toggle, .menu-toggle *") ||
            (!$(e.target).is("header, header *") && $(".nav-wrapper").is(":visible"))
        )
            $(".nav-wrapper").slideUp(300);
    });
});
