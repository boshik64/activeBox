$(function() {

    /*Fixed Header*/

    let header = $("#header");
    let intro = $("#intro");
    let introH;    
    let scrollPos = $(window).scrollTop();

    let header_height = 57.2;


    $(window).on("scroll load resize", function(){
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        if (Math.round(scrollPos + header_height) >= introH){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

        console.log(Math.round(scrollPos));
    });
    
    /*Smooth scroll*/
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset =$(elementId).offset().top - header_height;

        nav.removeClass("show");


        $("html, body").animate({
            scrollTop: elementOffset
        },700)
    })


    /*Nav Toggle*/
    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click", function(event) {
        event.preventDefault();

        nav.toggleClass("show");
    });
    

    /*Reviews:https://kenwheeler.github.io/slick/*/
    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false
      });

    
});
