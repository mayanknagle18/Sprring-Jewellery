$(document).ready(function () {
    // toggle mobile menu on hamburger button click
    $('.hamberger_btn').on('click', function () {
        $('.sj_navbar_mobile').slideToggle();
        $('.hamberger_icon .bar_icon').toggle();
        $('.hamberger_icon .cross_icon').toggle();
    });

    // hide menu when click
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.hamberger_btn, .sj_navbar_mobile').length) {
            $('.sj_navbar_mobile').slideUp();
            $('.hamberger_icon .bar_icon').show();
            $('.hamberger_icon .cross_icon').hide();
        }
    });

    $('#testimonial_slider').owlCarousel({
        loop:true,
        margin:24,
        nav:false,
        dots:false,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 6000,
        autoplaySpeed: 6000,
        autoplayHoverPause: false,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            630:{
                items:3
            },
            1000:{
                items:4
            },
            1300:{
                items:5
            }
        }
    });
});
