$(function () {
    $('.main_slide').slick({
        pauseOnHover: false,
        pauseOnFocus: false,
        nextArrow: false,
        prevArrow: false,
        dots: true,
        autoplay: true,
    })

    $('.list_slide').slick({
        pauseOnHover: false,
        pauseOnFocus: false,
    })

    $("..main_port .inner .intro ul>li").click('on')
})