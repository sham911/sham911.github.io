// document ready
$(function () {

  // wow 효과
  new WOW().init();
  // /wow 효과

  //article 높이 검사해서 뷰포트보다 작으면 뷰포트에 맞추기
  var vh=$(window).outerHeight()-152;
  console.log(vh);
  $('#m1, #m2, #m3, #m5, #m6').height(vh);

  //처음 스크롤바 없애고 스크롤 높이 0
  $('html, body').animate({
    scrollTop:0
  },1000,function(){
    $(this).css({'overflow':'hidden'});
  });

  $("#intro a").click(function(e) {
    e.preventDefault();
    $(".wrap-right").addClass("down").delay(500).fadeOut(500);
    $(".wrap-left").addClass("up").delay(500).fadeOut(500);
    var id=$(this).attr('href');
    setTimeout(function(){
      $('#intro').slideUp(function(){
        $('#footer-nav').show();
        $('html, body').css({'overflow':'auto'});
        //애니메이션처리
        $('html').stop().animate({
          scrollTop:$(id).offset().top-152
        },1000,function(){
          console.log('고정');
          $('header').addClass('fixed');
          $('section').addClass('on');
        });
      });
    },500);
  });

  //마우스 휠을 위아래로 조작시 화면 이동처리
  // $('article').on('mousewheel',function(e, delta){
  //   if(delta>0){
  //     var prev=$(this).prev().offset().top-152;
  //     $('html, body').stop().animate({
  //       scrollTop:prev
  //     },1000,'easeOutBounce')
  //     console.log('마우스휠을 올림');
  //   }else if(delta<0){
  //     var next=$(this).next().offset().top-152;
  //     $('html, body').stop().animate({
  //       scrollTop:next
  //     },1000,'easeOutBounce')
  //     console.log('마우스휠을 내림');
  //   }
  // })

  //네비게이션
  var headerTop=$('header').offset().top-152;
  $(window).scroll(function(){
    var windowTop=$(window).scrollTop();
    // console.log(windowTop, headerTop, m1);

    //네비게이션 고정시키기
    //각영역이 시작되는 지점의 위치값 구하기
    m1=$('#m1').offset().top-152;
    m2=$('#m2').offset().top-152;
    m3=$('#m3').offset().top-152;
    m4=$('#m4').offset().top-152;
    m5=$('#m5').offset().top-152;
    m6=$('#m6').offset().top-100;
    m7=$('#footer').offset().top-152;

    if(windowTop > (m1)){
      $('#footer-nav').addClass('fixed');
      $('#goTop').addClass('on');
    }else{
      $('#footer-nav').removeClass('fixed');
      $('#goTop').removeClass('on');
    }

    //현재보고있는 영역을 네비게이션에 표시해주는 기능
    var index=0;
    //각영역의 범위에 들어왔을 때의 인덱스 구하기
    if(windowTop>=m1 && windowTop<m2){
      index=0;
    }else if(windowTop>=m2 && windowTop<m3){
      index=1;
    }else if(windowTop>=m3 && windowTop<m4){
      index=2;
    }else if(windowTop>=m4 && windowTop<m5){
      index=3;
    }else if(windowTop>=m5 && windowTop<m6){
      index=4;
    }else if(windowTop>=m6 && windowTop<m7){
      index=5;
    }else if(windowTop>=m7){
      index=6;
    }

    //네비게이션의 활성화상태체크
    //1.active클래스값을 초기화
    //2.해당메뉴에 active클래스 적용
    $('#footer-nav li').removeClass();
    $('#footer-nav ul li').eq(index).addClass('active');

    //위치확인
    console.log('m1:'+m1+' m2:'+m2+' m3:'+m3+' m4:'+m4+' scroll:'+windowTop);
  })//scroll event
  $(window).trigger('scroll');

  //네비게이션 메뉴를 클릭했을 때 해당 영역으로 부드럽게 이동하기
  $('#footer-nav a').click(function(e){
    e.preventDefault();
    var id=$(this).attr('href');
    $('html, body').stop().animate({
      scrollTop:$(id).offset().top-152
    },1000);
  })


  //2depth 드롭다운
  $('.m-list .m-list__item').on({
    mouseenter:function(){
      $(this).find('.down-nav').stop().slideDown();
    },
    mouseleave:function(){
      $(this).find('.down-nav').stop().slideUp();
    },
  })

  $('.icon-nav .icon-nav_language').on({
    mouseenter:function(){
      $(this).find('.language-nav').stop().slideDown();
    },
    mouseleave:function(){
      $(this).find('.language-nav').stop().slideUp();
    },
    click:function(e) {
      e.preventDefault();
      $('.language-nav').slideDown();
    }
  })

  $('.language-nav button').click(function() {
    $('.language-nav').slideUp();
  })


  //dropdown 컨텐츠 오른쪽 선 길이
  // var nav_item_wrap=$('.nav-wrap-box').outerHeight();
  // $('.nav-wrap-box').height(nav_item_wrap);


  //m-slide1배경이미지 설정
  var m_slide1Img=[
    'img/SHU_18_YAZ_DesktopCarousel_v44.jpg',
    'img/082536221df896c417c1b4dc98ede0a6297c024f3.jpg',
    'img/mainbn-3dbrow_z.jpg'
  ];
  $('.m_slide1 > .swiper-wrapper > .swiper-slide').each(function(index){
    // console.log(index,$(this));
    $(this).css('backgroundImage','url('+m_slide1Img[index]+')');
  })

  var swiper = new Swiper('.m_slide1', {
     // slidesPerView: 1,
     // spaceBetween: 30,
     loop: true, //loop 계속돎(끝나면 처음이미지 다시보여주기 계속)
     effect: 'fade',
     pagination: {
       el: '.m_slide1 > .swiper-pagination',
       type: 'progressbar',
       clickable: true,
     },
     navigation: {
       nextEl: '.m_slide1 > .swiper-button-next',
       prevEl: '.m_slide1 > .swiper-button-prev',
     },
     autoplay: {
        delay: 3000,
        // disableOnInteraction: false,
      },

   });


    var swiper = new Swiper('.m_slide2', {
      slidesPerView: 2,
      spaceBetween: 30,
      pagination: {
        el: '.m_slide2 .swiper-pagination',
        clickable: true,
      },
      nested: true
    });

    var swiper = new Swiper('.m_slide3', {
       slidesPerView: 2,
       spaceBetween: 30,
       pagination: {
         el: '.m_slide3 .swiper-pagination',
         clickable: true,
       },
       nested: true
     });




  //slide2배경이미지 설정
  var slide2Img=[
    'img/image_20160617162251_KcJ5vxOXbca.jpg',
    'img/SHU_18_AntiOxiWater_Carousel_Desktop_EN_v2z.jpg',
    'img/shu-uemura-cleansing-oil-featuredz.jpg'
  ];
  $('.slide2 .swiper-slide').each(function(index){
    // console.log(index,$(this));
    $(this).css('backgroundImage','url('+slide2Img[index]+')');
  })

  var swiper = new Swiper('.slide2', {
     // slidesPerView: 1,
     // spaceBetween: 30,
     loop: true, //loop 계속돎(끝나면 처음이미지 다시보여주기 계속)
     effect: 'fade',
     pagination: {
       el: '.slide2 .swiper-pagination',
       type: 'progressbar',
       clickable: true,
     },
     navigation: {
       nextEl: '.slide2 .swiper-button-next',
       prevEl: '.slide2 .swiper-button-prev',
     },
     autoplay: {
        delay: 2500,
        // disableOnInteraction: false,
      },

   });

   //정지재생버튼의 위치 잡기(페이지네이션의 갯수자 줄거나 늘어날 경우를 위해)
   // var pageLength=$('.swiper-pagination-bullet').length; //페이지네이션 (동그라미) 갯수
   // //outerWidth(true) = m+p+w+b (마진+패딩+와이드+바텀)
   // var position=$('.swiper-pagination-bullet').outerWidth(true)*pageLength/2+10; //(페이지랭스 나누기 2 + 10만큼 벌림)
   // $('.playStop').css('margin-left',position);

   //정지/재생버튼
   // $('.playStop').click(function(){
   //   if($(this).find('i').hasClass('fa-stop')){
   //     $(this).find('i').removeClass().addClass('fa fa-play');
   //     swiper.autoplay.stop();
   //   }else{
   //     $(this).find('i').removeClass().addClass('fa fa-stop');
   //     swiper.autoplay.start();
   //   }
   // })

   //이전 다음,페이징 눌렀을 때 정지재생 아이콘 상태 변경
   // $('.swiper-button-next, swiper-button-prev, .swiper-pagination-bullet').click(function(){
   //   $('.playStop').find('i').removeClass().addClass('fa fa-play');
   //   $('.playStop').find('span').text('재생');
   // })


  //slide5  ===================================================================
  var slide5Img=[
   'img/slide5_1.jpg',
   'img/slide5_2.jpg',
  ];
  $('.slide5 .swiper-slide').each(function(index){
   // console.log(index,$(this));
   $(this).css('backgroundImage','url('+slide5Img[index]+')');
  })

  var swiper = new Swiper('.slide5', {
    pagination: {
      el: '.slide5 .swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.slide5 .swiper-button-next',
      prevEl: '.slide5 .swiper-button-prev',
    },
  });


  //slide6  ====================================================================
  var in_pos = '';

   function setMain(){
       var li_len = $('.slide6').find('li').length;
       var li_wid = $('.slide6').find('li').innerWidth();
       var total_wid = li_wid * li_len;
       var wrapper_wid = $('.slide6').width();
       $('.slide6').find('ul').css({'width' :  total_wid +'px', 'left': - ((total_wid - wrapper_wid)/2)+'px'});
   }
   setMain();

   $('.slide6').mouseenter(function(e){
       in_pos = e.pageX;
   });

   $('.slide6 ul').mousemove(function(e) {
       var mouse_pos = e.pageX;
       if((in_pos - 150 > mouse_pos || in_pos + 150 < mouse_pos) && in_pos != ''){
           var center_pos = $(window).width() > $('.slide6').width() ? $(window).width() / 2 : $('.slide6').width() / 2;
           var margin_val = ($('.slide6 ul').width() - $('.slide6').width()) / 2;
           var percent = parseInt((center_pos - mouse_pos) * 2 / $('.slide6').width() * 100);
           if(percent > 100) percent = 100;
           else if(percent < -100) percent = -100;
           var offset = parseInt((margin_val * percent)/100);
           $('.slide6 ul').css({'margin-left' : offset + 'px'});
           console.log(center_pos, margin_val, percent, offset);
       }
   });

  // m4 퀵뷰 팝업 ===============================================================
  $('.item_detail button').click(function() {
    $('#m4_popup').show();
    $('.popup_background').show();
    var p1=$(this).parents('.item_wrap').find('.title').text();
    var p2=$(this).parents('.item_wrap').find('.text_desc').text();
    var p3=[
      '에센스 파운데이션 - 밀림 없는 가벼운 신개념 텍스쳐로 강력한 자외선 차단은 물론 촉촉한 광채의 파운데이션',
      '뛰어난 커버력으로 촘촘하게 모공 커버와 끈적임 없는 세미 매트한 마무리감이 높은 밀착력으로 부드럽고 매끈한 피부 연출이 가능합니다.',
      '클렌징 오일의 선구자 슈에무라가 8가지 정제된 식물성 오일을 엄선하여 탁월한 스킨케어 효과를 선사하는 궁극의 클렌징 오일, 얼티메이트 클렌징 오일을 새롭게 선보입니다.',
      '비비드 컬러 립밤에 담다. 틴트 인 밤',
      '자외선 차단력은 기본, 비타민 성분으로 피부 속과 겉을 동시에 케어하는 토탈 브라이트닝 데일리 자외선 차단제',
      '섬세한 눈썹을 위한 펜슬 타입 아이 브로우 제품 - 뭉침이 없고 발색이 은은하여 본연의 견고함 덕분에 샤프하게 깎아 한올 한올 눈썹을 심듯 자연스럽게 그리기에 적합 ',
      '메이크업을 밀착 시키고, 보습은 극대화하여 매끈하고 은은한 글로우 피부를 연출해주는 비밀병기, 아티스트 오일',
      '당신의 시그니처 컬러를 찾아보세요',
    ];

    var p4=$(this).parents('.item_wrap').find('.price').text();
    var index=$(this).parents('.item_box').index();
    //console.log(p1);
    $('#m4_popup .m4_popup_titlebox h3').text(p2);
    $('#m4_popup .m4_popup_titlebox span').text(p1);
    $('#m4_popup .m4_popup_titlebox p').text(p3[index]);
    $('#m4_popup .m4_popup_titlebox strong').text(p4);

    //랭킹 클래스값 구하기
    var ranking=$(this).parents('.item_box').children().attr('class');
    console.log(ranking);
    //이미지 소스 저장해놓기
    var images={
      'ranking_box1':[
        ['img/thelightbulb.jpg', 'thelightbulb'],
        ['img/the_lightbulb_fluid_foundation_764_texture.jpg', '764_texture'],
      ],
      'ranking_box2':[
        ['img/Petal_cushion.png', 'Petal_cushion'],
        ['img/Petal_cushion_colors.jpg', 'Petal_cushion_colors'],
      ],
      'ranking_box3':[
        ['img/sublime_beauty_cleansing_oil.png', 'cleansing_oil'],
      ],
      'ranking_box4':[
        ['img/tint_in_balm.jpg', 'tint_in_balm'],
        ['img/tint_in_balm_colors.jpg', 'tint_in_balm_colors'],
      ],
      'ranking_box5':[
        ['img/blanc_chroma.png', 'blanc_chroma'],
      ],
      'ranking_box6':[
        ['img/SHU_18_HardFormula_SealBrown_Packshot.jpg', 'HardFormula'],
        ['img/hard_formula_color.jpg', 'hard_formula_color'],
      ],
      'ranking_box7':[
        ['img/SHU_18_SkinPerfector_Oil.jpg', 'SkinPerfector_Oil'],
      ],
      'ranking_box8':[
        ['img/LaqueSupreme_RD05.jpg', 'LaqueSupreme_RD05'],
        ['img/SHU_18_LS_RD05_Lips+Applicator.jpg', 'LS_RD05'],
      ],
    };

    $('.m4_popupimg-list ul').empty();
    $('.popup_slide .swiper-wrapper').empty();

    //각 랭킹에 들어가는 이미지 수만큼 리스트 생성하기
    for (var i = 0; i < images[ranking].length; i++) {
      var list='<li><a href="#"><img src="'+images[ranking][i][0]+'" alt="'+images[ranking][i][1]+'"></a></li>';
      $('.m4_popupimg-list ul').append(list);

      var slideList='<div class="swiper-slide" style="background-image:url('+images[ranking][i][0]+')"></div>';
      $('.popup_slide .swiper-wrapper').append(slideList);
    }


    //popup_slide  =============================================================
    var popup_slide = new Swiper('.popup_slide', {
       pagination: {
         el: '.popup_slide .swiper-pagination',
         clickable:true
       },
    });

    //썸네일 클릭했을 때
    $('.m4_popupimg-list a').click(function(e){
      e.preventDefault();
      var index=$('.m4_popupimg-list a').index(this);
      console.log(index);
      popup_slide.slideTo(index,1000,false);
    })


  })//m4 퀵뷰 팝업

  $('#m4_popup .m4_popup_wrap_line > button').click(function() {
    $('#m4_popup').hide();
    $('.popup_background').hide();
  })
  // 퀵뷰 닫기


  //search_popup =============================================================
  $('.icon-nav li:nth-child(3) a').click(function(e) {
    e.preventDefault();
    $('#search_popup').show();
    $('.popup_background').show();
  })

  $('#search_popup .search_wrap_line > button').click(function() {
    $('#search_popup').hide();
    $('.popup_background').hide();
  })


  function move() {
    // 첫번째 리스트가 접혀지고 난뒤
    $('#search_popup ul li').first().slideUp(function() {
      // 접혀진 요소를 리스트의 가장 마지막위치로 이동
      // ul의 가장 마지막 자식위치에 첫번째리스트를 옯긴다.
      // slideUp은 display:none;인 상태이므로
      // slideDown을 호출해서 display:block인 상태로 변경해서 다시 보이게끔 처리한다.
      $(this).appendTo($('#search_popup ul')).slideDown(); //this=.first() / append ->자식중의 마지막요소
    });
  }
  // 1초마다 롤링수행
  play=setInterval(move,1000);

  $('#search_popup ul').on({
    // ul에 마우스를 올렸을 때 자동롤링 멈춤
    mouseenter:function() {
      clearInterval(play);
    },
    // ul의 영역을 벗어났을 때
    mouseleave:function(){
      play=setInterval(move,1000);
    },
  });



  //login_popup ==============================================================
  $('.icon-nav li:nth-child(1) a').click(function(e) {
    e.preventDefault();
    $('#login_popup').show();
    $('.popup_background').show();
  })

  //닫기, 아이디찾기/비밀번호찾기/ 회원이아닌경우
  $('#login_popup .login_wrap_line > button').click(function() {
    $('#login_popup').hide();
    $('.popup_background').hide();
  })
  $('#login_popup a').click(function(e) {
    e.preventDefault();
    $('#login_popup').fadeOut(500);
    $('.popup_background').fadeOut(500);
  })



  // 아이디, 비밀번호 입력창에 포커스가 발생했을 떄
  $('#id, #password').focus(function() {
    // 아이콘의 색상 변경
    $(this).prev().addClass('change');
  })

  // 아이디, 비밀번호 입력창에 포커스가 발생되지 않았을 때
  $('#id, #password').focusout(function() {
    // 아이콘의 색상 복귀
    $(this).prev().removeClass('change');
  })

  //로그인폼의 로그인버튼을 눌렀을때(아이디, 비밀번호값의 여부 체크)
  $('#btn-submit').click(function() {
    //아이디와 패스워드의 값을 변수에 저장
    var id=$('#id').val();
    var password=$('#password').val();
    console.log(id,password);

    $('#login_popup').fadeOut(500);
    $('.popup_background').hide();
  })




})
