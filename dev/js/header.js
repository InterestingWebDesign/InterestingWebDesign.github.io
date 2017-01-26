$(function () {
    $(window).scroll(function () {
        var offset = $(window).scrollTop();

        (offset > 144) ? $("header, .logo, .logoSmall, h1").addClass("isScrolled") : $("header, .logo, .logoSmall, h1").removeClass("isScrolled");
    });
});
