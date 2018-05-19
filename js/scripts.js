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
    
    $('.close-menu').click(function(){
        $('#modal-menu').modal('hide');
    });
    
    $('.xs-open-close-icon').click(function(){
        
        if(!$(this).parents('.xs-open-close').hasClass('opened')){
            $(this).parents('.xs-open-close').addClass('opened');
            
        }
        else{
            $(this).parents('.xs-open-close').removeClass('opened');
        }
    });
    
});





