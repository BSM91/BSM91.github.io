$(document).ready(function() {

    // SMOOTH SCROLLING
    $('a').on('click', function(event) {  
        if (this.hash !== "") {
          event.preventDefault();
  
          var hash = this.hash;
  
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 500, function(){
            window.location.hash = hash;
          });
        }
    });

    // NAVBAR HEIGHT ON SCROLL
    $(window).scroll(function(){
        var position = $(this).scrollTop();
        if(position >= 100) {
        $('.nav').addClass('nav-scrolled');
        } else {
        $('.nav').removeClass('nav-scrolled');
        }
    });

    /* RESPONSIVE MENU */
    $(document).delegate('.open', 'click', function(event){
      $(this).addClass('oppenned');
      event.stopPropagation();
    })
    $(document).delegate('body', 'click', function(event) {
        $('.open').removeClass('oppenned');
    })
    $(document).delegate('.cls', 'click', function(event){
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });

    //SLICK
    var gadgetCarousel = $(".sl");
  
    gadgetCarousel.each(function() {
      //HEADER SLICK
      if ($(this).is(".header-sl")) {
      $(this).slick({
          arrows: false,
          infinite:true,       
          slidesToShow:1,
          slidesToScroll:1,
          dots: true,
          vertical: true,
          verticalSwiping: true
        });
      } 
      //NEWS SLICK
      else if ($(this).is(".news-sl")){
        $(this).slick({               
          slidesToShow:3,
          slidesToScroll:1,
          dots:true,
          arrows: true,
          centerMode:true,
          centerPadding:"0",
          adaptiveHeight: true,
          autoplay: true,
          nextArrow: '<div class="next-pic"><img src="img/next_pic.png" alt="Next Picture"></div>',
          prevArrow: '<div class="prev-pic"><img src="img/prev_pic.png" alt="Previous Picture"></div>',
          responsive: [
            {
              breakpoint: 869,
              settings: {
                arrows: false,
                slidesToShow: 2,
                slidesToScroll:1,
                centerMode:true,
                centerPadding:"10px",
              }
            },
            {
              breakpoint: 585,
              settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll:1,
                centerMode:true,
                centerPadding:"0",
              }
            }
          ]
        });
      }
      else {
        $(this).slick();
      }
    });
        
})
