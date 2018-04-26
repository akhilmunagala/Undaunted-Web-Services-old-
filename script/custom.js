$(document).on('ready',function(){
// //for contactus
//
// $("#mybtn").click(function(){
// 	$('#my_form').toggle();
// 	$('#message').toggle();
// });

// for menu

$(".burger").click(function(){
	$(".mobi-nav").toggle("linear");
});

//for slider

var $slickEl = $('.center');

$slickEl.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  var i = (currentSlide ? currentSlide : 0) + 1;

});

$slickEl.slick({
  centerMode: true,
  centerPadding: '100px',
  swipte:true,
  slidesToShow: 3,
  focusOnSelect: true,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2500,
  draggable: true,
  responsive: [

 	 {

	      breakpoint: 1516,
	      settings: {
	        arrows: true,
	        centerMode: true,
	        centerPadding: '350px',
	        slidesToShow: 1
	      }

    },
    	 {

	      breakpoint: 1420,
	      settings: {
	        arrows: true,
	        centerMode: true,
	        centerPadding: '280px',
	        slidesToShow: 1
	      }

    },
     {

	      breakpoint: 1160,
	      settings: {
	        arrows: true,
	        centerMode: true,
	        centerPadding: '250px',
	        slidesToShow: 1
	      }

    },
     {

	      breakpoint: 897,
	      settings: {
	        arrows: true,
	        centerMode: true,
	        centerPadding: '200px',
	        slidesToShow: 1
	      }

    },
    {

	      breakpoint: 820,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '26%',
	        slidesToShow: 1
	      }

    },


    {

	      breakpoint: 800,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '200px',
	        slidesToShow: 1
	      }

    },

   {

	      breakpoint: 760,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '200px',
	        slidesToShow: 1
	      }

    },
    {

	      breakpoint: 735,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '27%',
	        slidesToShow: 1
	      }

    },
    {
	      breakpoint: 667,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '30%',
	        slidesToShow: 1
	      }
    },
    {
	      breakpoint: 652,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '140px',
	        slidesToShow: 1
	      }
    },
    {
	      breakpoint: 600,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '20%',
	        slidesToShow: 1
	      }
    },
    {
	      breakpoint: 526,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '18%',
	        slidesToShow: 1
	      }
    },
    {
	      breakpoint: 470,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '14%',
	        slidesToShow: 1
	      }
    },
    {
	      breakpoint: 430,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '10%',
	        slidesToShow: 1
	      }
    },
    {
	      breakpoint: 400,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '8%',
	        slidesToShow: 1
	      }
    },
    {
	      breakpoint: 380,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '6%',
	        slidesToShow: 1
	      }
    },

    {
	      breakpoint: 350,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '1%',
	        slidesToShow: 1
	      }
    },
    {
	      breakpoint: 330,
	      settings: {
	        arrows: false,
	        centerMode: true,
	        centerPadding: '1%',
	        slidesToShow: 1
	      }
    }
  ]

});

});
