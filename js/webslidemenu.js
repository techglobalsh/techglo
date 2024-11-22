(function($) {
    "use strict";
		document.addEventListener("touchstart", function() {},false);  
		$(function() {
			$('#wsnavtoggle').on('click', function () {
				$('.wsmenucontainer').toggleClass('wsoffcanvasopener');
			});
			$('.overlapblackbg').on('click', function () {
			  $('.wsmenucontainer').removeClass('wsoffcanvasopener');
			});
			
			$('.wsmenu-list> li').has('.sub-menu').prepend('<span class="wsmenu-click"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');

			$('.wsmenu-click').on('click', function(){
				$(this).toggleClass('ws-activearrow')
				.parent().siblings().children().removeClass('ws-activearrow');
				$(".sub-menu").not($(this).siblings('.sub-menu')).removeClass('active');
				$(this).siblings('.sub-menu').toggleClass('active');
                $(".mega-menu").not($(this).siblings('.mega-menu')).removeClass('active');
				$(this).siblings('.mega-menu').toggleClass('active');
			});
			
			$('.wsmenu-list ul > li').has('.sub-menu').prepend('<span class="wsmenu-click02"><i class="wsmenu-arrow fa fa-angle-down"></i></span>');
			
			$('.wsmenu-click02').on('click', function(){
				$(this).children('.wsmenu-arrow').toggleClass('wsmenu-rotate');
				$(this).siblings('.sub-menu').toggleClass('active');
			
			});

		});
})(window.jQuery);