$('.certificate-sidebar-slider').slick({
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon fill-none"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon fill-none"><use xlink:href="img/sprite.svg#next"></use></svg></button>',

});

$('.accordion-sidebar .card .card-body').each(function () {
    if ($(this).find('.list-checkbox li').length > 10) {
        $(this).find('.list-checkbox li').slice(10).hide();
        $(this).append('<a href="#" class="links-toggle color-grey text-decoration">Показать все</a>');
    }
});

$('.links-toggle').on('click', function (e) {
    e.preventDefault();
    $('.accordion-sidebar .list-checkbox li:hidden').slice(0, 10).slideDown();

    var onBlock = $('.accordion-sidebar .list-checkbox li:hidden').length;
    if(onBlock <= 0) {
        $('.links-toggle').hide();
    }
});

$(document).ready(function() {

    $('.slider-range').slider({
        range: true,
        min: 0,
        max: 100000,
        values: [0, 85000],
        classes: {
            "ui-slider-handle": "ui-corner-all"
        },
        slide: function (event, ui) {
            //Поле минимального значения
            $(".dec1").val(ui.values[0]);
            //Поле максимального значения
            $(".dec2").val(ui.values[1]);
        }
    });

    $(".dec1").val($(".slider-range").slider("values", 0));
    $(".dec2").val($(".slider-range").slider("values", 1));

});

// slick active
$(window).on('load resize', function () {
    if ($(window).width() < 768) {
        $('.category-catalog-slider:not(.slick-initialized)').slick({
            slidesToShow: 2,
            prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon fill-none"><use xlink:href="img/sprite.svg#left"></use></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon fill-none"><use xlink:href="img/sprite.svg#right"></use></svg></button>',
            responsive: [

                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });

    } else {
        $(".category-catalog-slider.slick-initialized").slick("unslick");
    }
});
// slick active

$('.btn-filter').on('click', function (e) {
    e.preventDefault();
    $('.filter-mobile').fadeToggle();
});

$('.sidebar-close').on('click', function (e) {
    e.preventDefault();
    $('.filter-mobile').fadeOut();
});