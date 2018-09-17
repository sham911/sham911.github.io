$(function() {
  // 슬라이드 ===================================================================
  var rolling_imglist = new Swiper('.rolling_imglist', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.rolling_imglist .swiper-pagination',
        clickable: true,
      },
      autoplay: {
         delay: 1500,
         // disableOnInteraction: false,
       },
    });

  var rolling_newitem_imglist = new Swiper('.rolling_newitem_imglist', {
      slidesPerView: 2,
      // spaceBetween: 30,
      slidesPerGroup: 2,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.rolling_newitem_imglist .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.rolling_newitem_imglist .swiper-button-next',
        prevEl: '.rolling_newitem_imglist .swiper-button-prev',
      },
      // autoplay: {
      //    delay: 1500,
      //    // disableOnInteraction: false,
      //  },
    });

  var rolling_bestitem_imglist = new Swiper('.rolling_bestitem_imglist', {
      slidesPerView: 2,
      // spaceBetween: 30,
      slidesPerGroup: 2,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: '.rolling_bestitem_imglist .swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.rolling_bestitem_imglist .swiper-button-next',
        prevEl: '.rolling_bestitem_imglist .swiper-button-prev',
      },
      // autoplay: {
      //    delay: 1500,
      //    // disableOnInteraction: false,
      //  },
    });

  var ranking_box_imglist = new Swiper('.ranking_box_imglist', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
      scrollbar: {
        el: '.ranking_box_imglist .swiper-scrollbar',
        hide: true,
      },
    });

    $(window).resize(function(){
      ranking_box_imglist.update();
    })

    $(window).trigger('resize');



  var news_event = new Swiper('.news_event', {
      loop: true,
      pagination: {
        el: '.news_event .swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.news_event .swiper-button-next',
        prevEl: '.news_event .swiper-button-prev',
      },
    });


    var sns_contents = new Swiper('.sns_contents', {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 10,
        pagination: {
          el: '.sns_contents .swiper-pagination',
          clickable: true,
        },
      });


  // 스킨케어 ===================================================================
  $('.tab a').click(function(e){
    e.preventDefault();
    var menu=$(this).attr('href');
    if(menu=='#m1'){
      $('.tab span').animate({left:'0'});
      $('#m1').animate({left:'0'});
      $('#m1_1').animate({left:'100%'});
    }else{
      $('.tab span').animate({left:'50%'});
      $('#m1').animate({left:'-100%'});
      $('#m1_1').animate({left:'0'});
    }
  })

  // 메뉴 ======================================================================
  $('.head .menu').on('click', function(e){
    e.preventDefault();
		$('.gnbWrap').animate({
			left: 0
		});
	});
  //
	$('.gnbWrap > button').on('click', function(){
		$('.gnbWrap').animate({
			left: "-100%"
		});
	});

	//
	$('.navList .depth1').on('click', function(){
    $(this).next().slideToggle();
  });
    // if ($(this).parent('li').click( function () {
    //   $('.navList .depth2').show();
    // })) {
    //
    // }else {
    //   $(this).parent('li').removeClass('on');
    //   $('.dimmed').hide();
    //   $('.gnbWrap').animate({
    //     left: "-100%"
    //   });
    // }
		//   // $(this).parent('li').hasClass('on');
		// 	// $(this).parent('li').removeClass('on');
    //   // $('.dimmed').hide();
    //   // $('.gnbWrap').animate({
    //   //   left: "-100%"
    //   // });

  $('.navList .depth2 a').on('click', function() {
    $(this).next().slideToggle();
  });
  $('.navList .depth2 li').on('click', function() {
    $('.dimmed').hide();
    $('.gnbWrap').animate({
      left: "-100%"
    });
  });
  $('.navList .depth3 a').click(function() {
    $('.dimmed').hide();
    $('.gnbWrap').animate({
      left: "-100%"
    });
  });

  $('.reservMU a').on('click', function(){
    $('.dimmed').hide();
    $('.gnbWrap').animate({
      left: "-100%"
    });
  });



  //login_popup ==============================================================
  $('.gnb .login a').click(function(e) {
    e.preventDefault();
    $('#login_popup').show();
    $('html, body').css('overflow','hidden');
  })

  //닫기, 아이디찾기/비밀번호찾기/ 회원이아닌경우
  $('#login_popup .login_wrap > button').click(function() {
    $('#login_popup').hide();
    $('html, body').removeAttr('style');
  })


  //로그인폼의 로그인버튼을 눌렀을때(아이디, 비밀번호값의 여부 체크)
  $('#btn-login').click(function() {
    //아이디와 패스워드의 값을 변수에 저장
    var id=$('#id').val();
    var password=$('#password').val();
    // console.log(id,password);

    $('.massage').remove();

    // 아이디, 비밀번호값 검사하기
    if(id==''){//아이디의 값이 없을 경우
      $('#id').after('<p class="message">아이디를 입력하세요.</p>').focus();
    }else if(password==''){//비밀번호의 값이 없을 경우
      $('#password').after('<p class="message">비밀번호를 입력하세요.</p>').focus();
    }else {//아이디, 비밀번로값이 있는 경우
      // 로그인버튼을 숨긴다.
      // $('#btn-login').heid();
      // 로그인팝업을 숨긴다.
      $('#login_popup').fadeOut(
        1000,function() {
          // b요소의 값을 내가 저장한 아이디값으로 변경
          $('.gnbWrap').show();
          $('.user-info .b1 b').text(id);
          $('.user-info .b2 b').text(id);
          //로그인 정보를 보여준다.
          $('.user-info').show();
          $('.gnbWrap .login > span').hide();
        }
      );
    }
  })
  // 아이디, 패스워드값을 입력할 때
  $('#id, #password').keyup(function() {
    var length=$(this).val().length; //한글자라도 치면 사라지게 할거라 값을 구함
    console.log(length);
    //입력된 값이 있을 경우 메세지 삭제 (!= => 불(즉 0이 아님))
    if(length!=0){
      // 대상을 직접 선택하지 않으면 다음에 있는 요소가 계속 삭제처리됨.
      $(this).next('.message').remove();
    }
  })

  // 회원가입버튼 누르면 사라짐
  $('#btn-submit').click(function() {
    $('#login_popup').fadeOut(500);
    $('.dimmed').fadeOut(500);
  })


  //search_popup ===============================================================
  $('#wrap .head .icons .search').click(function(e) {
    e.preventDefault();
    $('#search_popup').show();
    $('.dimmed').show();
    $('#search').attr('value','페탈쿠션');
  })

  $('#search_popup .search_wrap > button').click(function() {
    $('#search_popup').hide();
    $('.dimmed').hide();
  })

  //롤링 텍스트 클릭하면 값 입력
  $('#search_popup .rolling li a').on('click',function () {
    var rollingText=$(this).text();
    $('#search').attr('value',rollingText);
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

  //language_popup =============================================================
  $('#wrap .head .icons .language').click(function(e) {
    e.preventDefault();
    $('#language_popup').show();
    $('.dimmed').show();
  })

  $('#language_popup .language_wrap > button').click(function() {
    $('#language_popup').hide();
    $('.dimmed').hide();
  })

  $('#language_popup a').click(function(e) {
    e.preventDefault();
    $('#language_popup').hide();
    $('.dimmed').hide();
  })
  //
  // $('#language_popup li a').hover(function() {
  //   $(this).parents('li').css({'background':'#1a1a1a'});
  // });


  //shop_popup =================================================================
  $('#wrap .head .icons .location_on').click(function(e) {
    e.preventDefault();
    $('#shop_popup').show();
    $('.dimmed').show();
  })

  $('#shop_popup .shop_wrap > button').click(function() {
    $('#shop_popup').hide();
    $('.dimmed').hide();
  })

  // 모바일환경일때 디바스환경에 맞게 변하기
  function checkMobileDevice() {
         var mobileKeyWords = new Array('Android', 'iPhone', 'iPod', 'BlackBerry', 'Windows CE', 'SAMSUNG', 'LG', 'MOT', 'SonyEricsson');
         for (var info in mobileKeyWords) {
             if (navigator.userAgent.match(mobileKeyWords[info]) != null) {
                $(location).attr('href', 'https://sham911.github.io/shuuemura_pc/');
                return true;

             }else {
               $(location).attr('href', 'https://sham911.github.io/shuuemura_m/');
               // return false;

             }
         }
         return false;
     }

    checkMobileDevice();




})
