$(document).ready(function () {
    
    
    $('.slider-init').slick({
        dots: true,
        arrows: true,
        infinite: false,
        slidesToShow: 1,
         infinite: true,
        autoplay: true,
        autoplaySpeed: 2500,
        speed: 700
    });
    
    $('.click-modal-xs').click(function(){
        $('#modal-menu').modal('show');
        
    });
    
    
    
});





