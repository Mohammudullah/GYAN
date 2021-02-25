$(function(){
  //preloader function
  window.addEventListener('load',function(){
    $('.preloader').delay(500).fadeOut('fast');
  })
  //Back to top button initialization
  $('.back-to-top').click(function(){
    $('html,body').animate({scrollTop: 0},1000);
  });

  //sticky navbar and back to button animation 
  $(window).scroll(function(){
    var scrollamount = $(this).scrollTop();
    
    if(scrollamount >= 300) {
      $('.navbar').addClass('nav-bar-scroll-effect');
      $('.back-to-top').removeClass('back-to-top-animation');
    }
    else {
      $('.navbar').removeClass('nav-bar-scroll-effect');
      $('.back-to-top').addClass('back-to-top-animation');
    }
  });

  //smooth scroll jquery

  var scrollLink = $('.scroll-link');
  $(scrollLink).on('click',function(event){
    event.preventDefault();
    $('html,body').animate({scrollTop: $(this.hash).offset().top-80});
  });
  $(window).scroll(function(){
    var scrollTop = $(this).scrollTop();
    scrollLink.each(function(){
      var sectionhead = $(this.hash).offset().top-85;
      if(scrollTop >= sectionhead) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    });
  });
  //Navar toggler animation
  $('.navbar-toggler').click(function(){
    $('.navbar-toggler').toggleClass('animation')
  });

  //calnder jquery
    $('body').on('DOMSubtreeModified', '.row',function(){
      $('.green').parents('.col').css({'background': '#3D7E34', 'color': 'white'});
    });
    $('body').on('DOMSubtreeModified', '.row',function(){
      $('.red').parents('.col').css({'background': '#FF3232', 'color': 'white'});
    });
      $(function(){
        $('.red').parents('.col').css({'background': '#FF3232', 'color' : 'white'});
      $('.green').parents('.col').css({'background': '#3D7E34', 'color': 'white'});
      });

    //faq par accordion section 
      $('#faq .accordion-btn').click(function(){
        $('.accordion-btn').parent().css({'background' : '#FBAA33','color': 'white'});
        $('.accordion-btn').css({'color': 'white'});
        $('.accordion-btn').addClass('btn-rotate');
        $('.collapsed').parent().css({'background' : '#FFFFFF', 'color': '#444444'});
        $('.collapsed').css({'color': '#444444'});
        $('.collapsed').removeClass('btn-rotate');
      });
      $(function(){
        $('.accordion-btn').parent().css({'background' : '#FBAA33','color': 'white'});
        $('.accordion-btn').addClass('btn-rotate');
        $('.accordion-btn').css({'color': 'white'});
        $('.collapsed').parent().css({'background' : '#FFFFFF', 'color': '#444444'});
        $('.collapsed').removeClass('btn-rotate');
        $('.collapsed').css({'color': '#444444'});
      });
  //banner part slider initialization
    $('.slider-main').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 1500,
        arrows: true,
        prevArrow: '#banner .left',
        nextArrow: '#banner .right'
      });

  //events part slider initialization
    $('.events-slider-main').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        verticalSwiping: true,
        vertical: true,
        autoplaySpeed: 5000,
        speed: 1500,
        arrows: false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 1,
              vertical: false,
              verticalSwiping: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 1,
              vertical: false,
              verticalSwiping: false,
            }
          }
        ]
      });

  //footer slider initialization
    $('.footer-slider-main').slick({
        slidesToShow: 7,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1500,
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
            }
          }
        ]
      });

  //courses part slider initialization
    $('.courses-slider-main').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 7000,
        speed: 1500,
        arrows: true,
        prevArrow: '#courses .left-arrow',
        nextArrow: '#courses .right-arrow',
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          }
        ]
      });

      //about us part slider initialization
      var rev = $('.about-us-slider');
      rev.on('init', function(event, slick, currentSlide) {
      var
        cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        next2 = cur.next().next(),
        prev = cur.prev(),
        prev2 = cur.prev().prev();
      prev.addClass('slick-sprev');
      next.addClass('slick-snext');  
      prev2.addClass('slick-sprev2');
      next2.addClass('slick-snext2');  
      cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
      slick.$prev = prev;
      slick.$next = next;
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      var
        cur = $(slick.$slides[nextSlide]);
      slick.$prev.removeClass('slick-sprev');
      slick.$next.removeClass('slick-snext');
      slick.$prev.prev().removeClass('slick-sprev2');
      slick.$next.next().removeClass('slick-snext2');
      next = cur.next(),  
      prev = cur.prev();
      //prev2.prev().prev();
      //next2.next().next();
      prev.addClass('slick-sprev');
      next.addClass('slick-snext');
      prev.prev().addClass('slick-sprev2');
      next.next().addClass('slick-snext2');
      slick.$prev = prev;
      slick.$next = next;
      cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
    });

    rev.slick({
      speed: 1500,
      autoplaySpeed: 5000,
      arrows: false,
      dots: true,
      autoplay: true,
      centerMode: true,
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      customPaging: function(slider, i) {
        return '';
      },
    });


      //faq part 3d image slider initialization
      var faq = $('.faq-slider-main');
      faq.on('init', function(event, slick, currentSlide) {
      var
        cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        next2 = cur.next().next(),
        prev = cur.prev(),
        prev2 = cur.prev().prev();
      prev.addClass('slick-sprev');
      next.addClass('slick-snext');  
      prev2.addClass('slick-sprev2');
      next2.addClass('slick-snext2');  
      cur.removeClass('slick-snext').removeClass('slick-sprev').removeClass('slick-snext2').removeClass('slick-sprev2');
      slick.$prev = prev;
      slick.$next = next;
    }).on('beforeChange', function(event, slick, currentSlide, nextSlide) {
      var
        cur = $(slick.$slides[nextSlide]);
      slick.$prev.removeClass('slick-sprev');
      slick.$next.removeClass('slick-snext');
      slick.$prev.prev().removeClass('slick-sprev2');
      slick.$next.next().removeClass('slick-snext2');
      next = cur.next(),  
      prev = cur.prev();
      //prev2.prev().prev();
      //next2.next().next();
      prev.addClass('slick-sprev');
      next.addClass('slick-snext');
      prev.prev().addClass('slick-sprev2');
      next.next().addClass('slick-snext2');
      slick.$prev = prev;
      slick.$next = next;
      cur.removeClass('slick-next').removeClass('slick-sprev').removeClass('slick-next2').removeClass('slick-sprev2');
    });

    faq.slick({
      speed: 1500,
      autoplaySpeed: 5000,
      arrows: true,
      nextArrow: '#faq .right',
      prevArrow: '#faq .left',
      autoplay: true,
      asNavFor: '.faq-sub-slider-main',
      centerMode: true,
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      
      customPaging: function(slider, i) {
        return '';
      },
    });

    $('.faq-sub-slider-main').slick({
      speed: 1500,
      autoplaySpeed: 5000,
      fade: true,
      asNavFor: faq,
      arrows: false,
      autoplay: true,
      centerMode: true,
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    });

    //Counter up initialization
    $('.counter').counterUp({});
      
    //pb calendar initialization
    var current_yyyymm_ = moment().format("YYYYMM");

	$("#pb-calendar").pb_calendar({
		schedule_list : function(callback_, yyyymm_){
			var temp_schedule_list_ = {};

			temp_schedule_list_[current_yyyymm_+"03"] = [
				{'ID' : 1, style : "red"}
			];

			temp_schedule_list_[current_yyyymm_+"06"] = [
				{'ID' : 2, style : "red"},
			];
			temp_schedule_list_[current_yyyymm_+"20"] = [
				{'ID' : 2, style : "green"},
			];
			temp_schedule_list_[current_yyyymm_+"28"] = [
				{'ID' : 2, style : "green"},
			];
			temp_schedule_list_[current_yyyymm_+"24"] = [
				{'ID' : 2, style : "red"},
			];

			temp_schedule_list_[current_yyyymm_+"15"] = [
				{'ID' : 3, style : "green"},
			];
			callback_(temp_schedule_list_);
		},
		schedule_dot_item_render : function(dot_item_el_, schedule_data_){
			dot_item_el_.addClass(schedule_data_['style'], true);
			return dot_item_el_;
		}
	});
});