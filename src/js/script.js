$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg" alt="btn_slide"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg" alt="btn_slide"></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true,
                arrows:  false
              }
            }
          ]
    });
  });
          