// document ready
$(function () {
  // $("#intro a").click(function(e) {
  //   // e.preventDefault();
  //   $(".wrap-right").addClass("down").delay(500).fadeOut(500);
  //   $(".wrap-left").addClass("up").delay(500).fadeOut(500);
  // });


  //slide1배경이미지 설정
  var slide1Img=[
    'img/skincare_bannerimg1.png',
    'img/SHU_18_AntiOxiWater_Carousel_Desktop_EN_v2.jpg',
    'img/skincare_bannerimg1.png'
  ];
  $('.slide1 .swiper-slide').each(function(index){
    $(this).css('background-image',slide1Img[index]);
  })


  var swiper1 = new Swiper('.slide1', {
     // slidesPerView: 1,
     // spaceBetween: 30,
     loop: true, //loop 계속돎(끝나면 처음이미지 다시보여주기 계속)
     effect: 'fade',
     pagination: {
       el: '.slide1 .swiper-pagination',
       type: 'progressbar',
       clickable: true,
     },
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
     // autoplay: {
     //    delay: 2500,
     //    // disableOnInteraction: false,
     //  },

   });

   var swiper6 = new Swiper('.slide6', {
      slidesPerView: 4,
      spaceBetween: 30,
      pagination: {
        el: '.slide6 .swiper-pagination',
        clickable: true,
      },
    });


   //정지재생버튼의 위치 잡기(페이지네이션의 갯수자 줄거나 늘어날 경우를 위해)
   var pageLength=$('.swiper-pagination-bullet').length; //페이지네이션 (동그라미) 갯수
   //outerWidth(true) = m+p+w+b (마진+패딩+와이드+바텀)
   var position=$('.swiper-pagination-bullet').outerWidth(true)*pageLength/2+10; //(페이지랭스 나누기 2 + 10만큼 벌림)
   $('.playStop').css('margin-left',position);


   //정지/재생버튼
   $('.playStop').click(function(){
     if($(this).find('i').hasClass('fa-stop')){
       $(this).find('i').removeClass().addClass('fa fa-play');
       swiper.autoplay.stop();
     }else{
       $(this).find('i').removeClass().addClass('fa fa-stop');
       swiper.autoplay.start();
     }
   })

   //이전 다음,페이징 눌렀을 때 정지재생 아이콘 상태 변경
   $('.swiper-button-next, swiper-button-prev, .swiper-pagination-bullet').click(function(){
     $('.playStop').find('i').removeClass().addClass('fa fa-play');
     $('.playStop').find('span').text('재생');
   })



})
