//плавный скролл
$(document).ready(function () {
    $('.go_to').click(function (e) {
        e.preventDefault();
        var scroll_el = $(this).attr('href');
        if ($(scroll_el).length !== 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 500);
        }
        return false;
    });
});
//плавный скролл end

$('.btn-add-reviews').on('click', function (e) {
    e.preventDefault();
    $('.leave-feedback').slideDown();
    $('.btn-group-wrap').fadeOut();
});

$('.btn-hidden-reviews').on('click', function (e) {
    e.preventDefault();
    $('.leave-feedback').slideUp();
    $('.btn-group-wrap').fadeIn();
});

// slick
$('.certificates-slider').slick({
    slidesToShow: 6,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon fill-none"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon fill-none"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.btn-tooltip').hover(function (e) {
    e.preventDefault();
    $(this).find('.tooltip-box').fadeToggle();
});

$('.btn-burger').on('click', function () {
   $('.fixed-block').fadeToggle();
});

$('.btn-close').on('click', function () {
    $('.fixed-block').fadeOut();
});