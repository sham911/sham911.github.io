/* ===================================================================
 * Howdy - Main JS
 *
 * ------------------------------------------------------------------- */

(function($) {

	"use strict";

	var cfg = {
		defAnimation   : "fadeInUp",    // default css animation
		scrollDuration : 800,           // smoothscroll duration
		statsDuration  : 4000           // stats animation duration
	},
	$WIN = $(window);


	/* Preloader
	 * -------------------------------------------------- */
	var ssPreloader = function() {

		$WIN.on('load', function() {

			// force page scroll position to top at page refresh
			$('html, body').animate({ scrollTop: 0 }, 'normal');

	      // will first fade out the loading animation
	    	$("#loader").fadeOut("slow", function(){

	        // will fade out the whole DIV that covers the website.
	        $("#preloader").delay(300).fadeOut("slow");

	      });
	  	});
	};


  	/* Menu on Scrolldown
	 * ------------------------------------------------------ */
	var ssMenuOnScrolldown = function() {

		var menuTrigger = $('#header-menu-trigger');

		$WIN.on('scroll', function() {

			if ($WIN.scrollTop() > 150) {
				menuTrigger.addClass('opaque');
			}
			else {
				menuTrigger.removeClass('opaque');
			}

		});
	};


  	/* OffCanvas Menu
	 * ------------------------------------------------------ */
   var ssOffCanvas = function() {

	       var menuTrigger = $('#header-menu-trigger'),
	       nav             = $('#menu-nav-wrap'),
	       closeButton     = nav.find('.close-button'),
	       siteBody        = $('body'),
	       mainContents    = $('section, footer');

		// open-close menu by clicking on the menu icon
		menuTrigger.on('click', function(e){
			e.preventDefault();
			menuTrigger.toggleClass('is-clicked');
			siteBody.toggleClass('menu-is-open');
		});

		// close menu by clicking the close button
		closeButton.on('click', function(e){
			e.preventDefault();
			menuTrigger.trigger('click');
		});

		// close menu clicking outside the menu itself
		siteBody.on('click', function(e){
			if( !$(e.target).is('#menu-nav-wrap, #header-menu-trigger, #header-menu-trigger span') ) {
				menuTrigger.removeClass('is-clicked');
				siteBody.removeClass('menu-is-open');
			}
		});

   };


  /* Smooth Scrolling
	* ------------------------------------------------------ */
	var ssSmoothScroll = function() {

		$('.smoothscroll').on('click', function (e) {
			var target = this.hash,
			$target    = $(target);

		 	e.preventDefault();
		 	e.stopPropagation();

	    	$('html, body').stop().animate({
	       	'scrollTop': $target.offset().top
	      }, cfg.scrollDuration, 'swing').promise().done(function () {

	      	// check if menu is open
	      	if ($('body').hasClass('menu-is-open')) {
					$('#header-menu-trigger').trigger('click');
				}

	      	window.location.hash = target;
	      });
	  	});

	};



  /* Alert Boxes
  * ------------------------------------------------------- */
  var ssAlertBoxes = function() {

  	$('.alert-box').on('click', '.close', function() {
	  $(this).parent().fadeOut(500);
	});

  };


  /* Intro Animation
	* ------------------------------------------------------- */
	var ssIntroAnimation = function() {

		$WIN.on('load', function() {

	     	if (!$("html").hasClass('no-cssanimations')) {
	     		setTimeout(function(){
	    			$('.animate-intro').each(function(ctr) {
						var el = $(this),
	                   animationEfx = el.data('animate') || null;

	               if (!animationEfx) {
	                 	animationEfx = cfg.defAnimation;
	               }

	              	setTimeout( function () {
							el.addClass(animationEfx + ' animated');
						}, ctr * 300);
					});
				}, 100);
	     	}
		});

	};


  /* Back to Top
	* ------------------------------------------------------ */
	var ssBackToTop = function() {

		var pxShow  = 500,         // height on which the button will show
		fadeInTime  = 400,         // how slow/fast you want the button to show
		fadeOutTime = 400,         // how slow/fast you want the button to hide
		scrollSpeed = 300,         // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'
		goTopButton = $("#go-top")

		// Show or hide the sticky footer button
		$(window).on('scroll', function() {
			if ($(window).scrollTop() >= pxShow) {
				goTopButton.fadeIn(fadeInTime);
			} else {
				goTopButton.fadeOut(fadeOutTime);
			}
		});
	};


	/* codepen style
	* ------------------------------------------------------ */
	$(document).ready(function() {
	  $(".title").lettering();
	  $(".button-R").lettering();
	});


	$(document).ready(function() {
	  animation();

		$('body').on('click','.btn_d, .btn_r',function(){
			var href=$(this).attr('data-href');
			window.open(href);
			// location.href='https://naver.com';
		})
	}, 1000);

	$('.button-R').click(function() {
	  animation();
	});


	function animation() {
	  var title1 = new TimelineMax();
	  title1.to(".button-R", 0, {visibility: 'hidden', opacity: 0})
	  title1.staggerFromTo(".title span", 0.5,
	  {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
	  {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
	  title1.to(".button-R", 0.2, {visibility: 'visible' ,opacity: 1})
	}



  /* Initialize
	* ------------------------------------------------------ */
	(function ssInit() {

		ssPreloader();
		ssMenuOnScrolldown();
		ssOffCanvas();
		ssSmoothScroll();
		ssAlertBoxes();
		ssIntroAnimation();
		ssBackToTop();

	})();


})(jQuery);
