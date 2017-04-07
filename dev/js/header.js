$(function () {
    $(window).scroll(function () {
        var offset = $(window).scrollTop();

        (offset > 144) ? $("header, .logo, .logoSmall, h1").addClass("isScrolled") : $("header, .logo, .logoSmall, h1").removeClass("isScrolled");
    });
});

window.onload = buildPage;

function buildPage() {
  $("header").html( "<a href='index.html' class='link logo'><img src='images/logo.png' class='logo' draggable='false' alt='IWD Logo'></a><a href='index.html' class='link'><img src='images/logo.png' class='logoSmall' draggable='false' alt='IWD Logo'></a><a href='index.html' class='link heading'><h1>Interesting Web Design</h1></a><ul class='nav'><li class='nav'><a href='index.html' class='link selected'>Home</a></li><li class='nav'><a href='index.html' class='link'>About Us</a></li><li class='nav'><a href='index.html' class='link'>Browse</a></li><li class='nav final'><a href='index.html' class='link'>Contact</a></li>" );
  $(".socialPanel").html( '<div class="socialIcon"><a href="https://twitter.com/InterestingWD" target="_blank"><img class="socialLogo" src="images/twitter.png" alt="Twitter Logo"></a></div><br><div class="socialIcon"><a href="mailto:interestingwebdesign@gmail.com?subject=Inquiry&20from%20IWD%20site&cc=calebs2500@gmail.com&cc=benjaminandyy@gmail.com"><img class="socialLogo" src="images/mail.png" alt="Mail Icon"></a></div> ');
}
