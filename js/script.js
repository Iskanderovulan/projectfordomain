$(document).ready(function () {
    $('.customer-logos').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1750,
        arrows: false,
        dots: false,
        pauseOnHover: false,
    });
});

$(document).ready(function () {
    $('.single-item').slick({
        autoplay: true,
        arrows: true,
        autoplaySpeed: 2200,
        slidesToScroll: 1

    });
});


$(document).ready(function () {
    $("nav").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});



