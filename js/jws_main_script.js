(function($) {
    "use strict";

    var jws_menu_sticky = function() {
       
        var $nav = $('.enabled-sticky .header-v1 .main-menu, .enabled-sticky .header-v2 .main-menu, .enabled-sticky .header-v3 .inner-header-v3, .enabled-sticky .header-default .main-menu, .enabled-sticky .header-v4 .main-menu, .enabled-sticky .header-v5 .main-menu, .enabled-sticky .header-v7 .main-menu,.enabled-sticky .header-v6 .main-menu');
          $nav.sticky({topSpacing: 0});  
          $(window).on('resize',function(){   
            $nav.sticky({topSpacing: 0});
          });  
           
    }

    function totop() { 
        if ($('#back-to-top, .back-to-top').length) {
            var scrollTrigger = 100, // px
                backToTop = function () {
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > scrollTrigger) {
                        $('#back-to-top, .back-to-top').addClass('show');
                    } else {
                        $('#back-to-top, .back-to-top').removeClass('show');
                    }
                };
            backToTop();
            $(window).on('scroll', function () {
                backToTop();
            });
            $('#back-to-top, .back-to-top').on('click', function (e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }
    }

    

    var jws_coures_matchHeight = function() {
        if( $().matchHeight ) {
            var options = {
                byRow: true,
                property: 'height',
                target: null,
                remove: false
            }
            $('.jws-coures > div').matchHeight(options);
        }
    }

    var jws_post_matchHeight = function() {
        if( $().matchHeight ) {
            var options = {
                byRow: true,
                property: 'height',
                target: null,
                remove: false
            }
            $('.blog-archive .row > article').matchHeight(options);
        }
    }

    var jws_events_matchHeight = function() {
        if( $().matchHeight ) {
            var options = {
                byRow: true,
                property: 'height',
                target: null,
                remove: false
            }
            $('.tribe-events-list .tribe-events-loop .row > div > div').matchHeight(options);
        }
    }

    var related_carousel = function() {

        if( $().slick ) {

            $('.jws-related-post.jws-carousel > .row, .course-carousel .jws-carousel-wrapper > .row, .event-carousel .jws-carousel-wrapper > .row, .wrap-instructors.jws-carousel ul').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,

                arrows: true,
                infinite: true,
                useTransform: true,
                cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
                prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            centerPadding: '40px',
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            centerPadding: '40px',
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }


    }
   var  wp_gallery_popup = function () {
            if( $().magnificPopup ) {
                $(".jws-portfolio-holder  > div > a").magnificPopup({
                    type: "image",
                    image: {

                        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
                    },
                    removalDelay: 500, //delay removal by X to allow out-animation
                    key: "image-key",
                    verticalFit: true,
                    mainClass: "image-popup-style", // This same class is used for video popup
                    tError: '<a href="%url%">The image</a> could not be loaded.',
                    gallery: {
                        enabled: true,
                        tCounter: ''
                    },

                    callbacks: {
                         beforeOpen: function () {
                            this.st.mainClass = 'mfp-zoom-in';
                        },    
                    }
                });
            }
            }
    var list_icon_shortcode = function() {
        if( $().slick ) {

            $('.list_icons-wrapper .list_icons-slider > div').slick({
                infinite: true,
                slidesToShow: 6,
                slidesToScroll: 1,
                arrows: true,
                infinite: true,
                useTransform: true,
                cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
                prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
                responsive: [
                    {
                        breakpoint: 1366,
                        settings: {
                            centerPadding: '40px',
                            slidesToShow: 4
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            centerPadding: '40px',
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            centerPadding: '40px',
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            centerPadding: '40px',
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }
    }

    var event_shortcode = function() {
        if( $().slick ) {
            $('.wrap-event_shortcode.list-slide').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: true,
                infinite: true,
                useTransform: true,
                cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
                prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            centerPadding: '40px',
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            centerPadding: '40px',
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }
    }

    var testimonial_carousel = function() {

        if( $().slick ) {
            var $container = $('.testimonials-wrapper'),
            cols = $container.data('cols'),
            dots = ($container.data('dots') == 'yes') ? false : true,
            arrows = ($container.data('nav') == 'yes') ? false : true;

            $('.testimonials-wrapper .testimonials').slick({
                infinite: true,
                slidesToShow: cols,
                arrows: arrows,
                dots: dots,
                infinite: true,
                useTransform: true,
                cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
                prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            centerPadding: '40px',
                            slidesToShow: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            centerPadding: '40px',
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }
    }


    var slide_images = function() {
        if( $().slick ) {

            $('.jws-slider-images ul').slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: false,
                infinite: true,
                useTransform: true,
                cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            centerPadding: '40px',
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            centerPadding: '40px',
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }
    }

    var element_masonry = function() {
        if( $().imagesLoaded && $().isotope) {
            var element = $(".main-content .jws-coures");
            element.each(function(element, i) {
                var e = $(this).data("masonry");
                if(void 0 !== e) {
                    $(this).imagesLoaded(function() {
                        $(i).isotope();
                    });
                }
            });
        }
    };

    var loadMore = function() {
        if( $().imagesLoaded && $().isotope) {
            jws_post_matchHeight();
            $(".blog-loadmore").on("click", function(e) {
                e.preventDefault();
                
                var self = $(this),
                    object = self.parent('.navigation').siblings(".row"),
                    atts = self.closest('#primary').data("atts"),
                    paged = self.data("paged"),
                    posts_loaded = $(".posts-loaded");
                self.addClass("loading");
                $.ajax({
                    url: MS_Ajax.ajaxurl,
                    data: {
                        atts: atts,
                        paged: paged,
                        action: "jws_get_post_shortcode"
                    },
                    dataType: "json",
                    method: "POST",
                    success: function(e) {
                        if (e.items) {
                            var atts = $(e.items);

                            object.isotope(),
                            object.append(atts).isotope("appended", atts),
                            object.imagesLoaded().progress(function() {
                                object.isotope("layout");
                            }), self.data("paged", paged + 1)
                        }

                        "no-more-posts" == e.status && (self.hide(), posts_loaded.addClass("active"));
                    },
                    error: function() {
                        console.log("ajax error")
                    },
                    complete: function() {
                        self.removeClass("loading")
                    }
                })
            });

            $(".course-loadmore").on("click", function(e) {
                e.preventDefault();
                
                var self = $(this),
                    object = self.parent('.navigation').siblings("ul.learn-press-courses"),
                    atts = self.data("atts"),
                    paged = self.data("paged"),
                    posts_loaded = $(".posts-loaded");
                self.addClass("loading");
                $.ajax({
                    url: MS_Ajax.ajaxurl,
                    data: {
                        atts: atts,
                        paged: paged,
                        action: "jws_get_course_shortcode"
                    },
                    dataType: "json",
                    method: "POST",
                    success: function(e) {
                        

                        if (e.items) {
                            console.log(e.items);
                            var parsed = $.parseHTML(e.items);
                            var atts = $(parsed).find(".learn-press-courses > li");
                            object.isotope(),
                            object.append(atts).isotope("appended", atts),
                            object.imagesLoaded().progress(function() {
                                object.isotope("layout");
                            }), self.data("paged", paged + 1)
                        }

                        "no-more-posts" == e.status && (self.hide(), posts_loaded.addClass("active"));
                    },
                    error: function() {
                        console.log("ajax error")
                    },
                    complete: function() {
                        self.removeClass("loading")
                    }
                })
            });



            $(".portfolio-loadmore").on("click", function(e) {
                e.preventDefault();
                
                var self = $(this),
                    object = self.parent('.portfolio-footer').siblings(".wrap-portfolio-content").find('.jws-portfolio-holder'),
                    atts = self.data("atts"),
                    paged = self.data("paged"),
                    posts_loaded = $(".posts-loaded");
                self.addClass("loading");


                $.ajax({
                    url: MS_Ajax.ajaxurl,
                    data: {
                        atts: atts,
                        paged: paged,
                        action: "jws_get_portfolio_shortcode"
                    },
                    dataType: "json",
                    method: "POST",
                    success: function(e) {
                        console.log(e);
                        if (e.items) {
                            var atts = $(e.items);
                            object.isotope(),
                            object.append(atts).isotope("appended", atts),
                            object.imagesLoaded().progress(function() {
                                object.isotope("layout");
                            }), self.data("paged", paged + 1)
                        }

                        "no-more-posts" == e.status && (self.hide(), posts_loaded.addClass("active"));
                    },
                    error: function() {
                        console.log("ajax error")
                    },
                    complete: function() {
                        self.removeClass("loading");
                        wp_gallery_popup();
                    }
                })
            });
        }
    }

    var quantityInputsBindButtons = function($container) {
        // Plus Qty /
        $(document).on('click', '.jws-qty-plus', function() {
            var parent = $(this).parent();
            $('input.qty', parent).val( parseInt($('input.qty', parent).val()) + 1);
            $('button[type="submit"]').removeAttr("disabled");
        });
        // Minus Qty /
        $(document).on('click', '.jws-qty-minus', function() {
            var parent = $(this).parent();
            if( parseInt($('input.qty', parent).val()) > 1) {
                $('input.qty', parent).val( parseInt($('input.qty', parent).val()) - 1);
            }
            $('button[type="submit"]').removeAttr("disabled");
        });
    }

    var searchFormOverlay = function(){
        var search_btn = $('.search-btn'),
            search_overlay = $('.search-overlay'),
            search_close = $('.search-overlay .btn-close');

        search_btn.on('click', function(e) {
            e.preventDefault();
            if( search_overlay.hasClass( 'jws-animate' ) ) {
                search_overlay.removeClass( 'jws-animate' );
            } else {
                search_overlay.fadeIn(0, function(){
                    $(this).addClass('jws-animate'); 
                });
            }
        
        });



        search_close.on('click', function(e) {
            e.preventDefault();
            search_overlay.fadeOut(0, function(){
                $(this).removeClass('jws-animate'); 
            });
        });
    }



    var slide_coure = function(slider_for = '', slider_nav = ''){

        if( $().slick ) {
            $(slider_for).slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                fade: true,
                infinite: true,
                useTransform: true,
                cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
                prevArrow: '<i class="fa fa-angle-left" aria-hidden="true"></i>',
                nextArrow: '<i class="fa fa-angle-right" aria-hidden="true"></i>',
                asNavFor: slider_nav
            });

            $(slider_nav).slick({
                slidesToShow: 4,
                infinite: true,
                arrows: false,
                asNavFor: slider_for,
                focusOnSelect: true,
                centerPadding: '0px',
                responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        arrows: false,
                        slidesToShow: 2
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        arrows: false,
                        slidesToShow: 2
                      }
                    }
                ]
            });
        }

    }



    var widget_collapse = function(){
        $('.widget.widget_categories ul li').has( 'ul.children' ).addClass('has-child');
        $('.widget.widget_categories ul li.has-child').append( '<i class="fa fa-angle-down" aria-hidden="true"></i>' );
        $('.widget.widget_categories ul li i.fa').on("click", function() {
            $(this).closest('li').toggleClass('opened');
        });
    }

    var lp_section_header_active = function(){
        $('.course-curriculum ul.curriculum-sections .section-header').on("click", function() {
            $(this).toggleClass('active');
        });
    }

    var lp_share_btn = function(){
        $('.list-action .lp-btn .share-btn').on("click", function() {
            $(this).toggleClass('active');
        });
    }

    var video_thumbnail = function () {
        if( $().magnificPopup ) {
            $(".video-thumbnail").magnificPopup({
                type: 'iframe',
            });
        }
    }

    var jws_masonry = function () {
        if( $().imagesLoaded && $().isotope) {
            var element = $("ul.learn-press-courses");
                $(element).imagesLoaded(function() {
                    $(element).isotope();
                });
        }
    }

    var jws_buy_ticket_action = function () {

        $(document).ready(function() {
            $('#btn-buy-ticket').on("click", function() {
                $('a[data-tab="#tab-ticket"]').click();

                $('html, body').animate({
                    scrollTop: $("#tab-ticket").offset().top-100
                }, 1000);
            });
        });
    }

    var jws_review_event_rating = function () {
        
        var element = $("#tab-reviews .comments-rating .rating-container > label");
        $(element).on("click", function() {
            var id = $(this).attr('for'),
                val = $('input[id="'+id+'"]').val();
            $('input[name="ic_review_rating"]').val(val);
        });
    }

    var jws_countdown = function(){
        if( $().countdown) {
            var j = $(".jws-countdown-js");
            j.length > 0 && j.each(function() {
                var b = $(this),
                $countdown_time = b.data("countdown");
                b.countdown($countdown_time, function(event) {
                    $(this).html(event.strftime('<div class="items"><span class="jws-box-countdown"><span>%D</span> <p>Days</p></span></div><div class="items"><span class="jws-box-countdown"><span>%H</span> <p>Hours</p></span></div><div class="items"><span class="jws-box-countdown"><span>%M</span> <p>Mins</p></span></div><div class="items"><span class="jws-box-countdown"><span>%S</span> <p>Secs</p></span></div>'))
                })
            });
        }
    }

    var jws_isotope_elements = function(){
        if( $().imagesLoaded && $().isotope) {
            var element = $(".jws-images-gallery .gallery-images, .masonry-container.jws-portfolio-holder");
            element.each(function(element, i) {
                $(element).imagesLoaded(function() {
                    $(i).isotope();
                });
            });
        }
    }

    var jws_isotope_portfolio = function(){

        if( $().imagesLoaded && $().isotope) {

            var $container = $('.masonry-container.jws-portfolio-holder');

            var el = $('.jws-masonry');
            el.each(function(i, val) {
                var _option = $(this).data('masonry');
                if (_option !== undefined) {
                    var _selector = _option.selector,
                        _width = _option.columnWidth,
                        _layout = _option.layoutMode;
                        console.log(_layout);
                    $(this).imagesLoaded(function() {
                        $(val).isotope({
                            itemSelector: _selector,
                            percentPosition: true,
                            masonry: {
                                columnWidth: _width
                            }
                        });
                    });
                }
            });

            $('.portfolio-filter .masonry-filter').on('click', 'a', function(e) {
               
                e.preventDefault();
                $('.portfolio-filter .masonry-filter').find('.filter-active').removeClass('filter-active');
                $(this).addClass('filter-active');
                var filterValue = $(this).attr('data-filter');
                $container.isotope({
                    filter: filterValue
                });
            });
        }
    }

    var jws_isotope_courses = function(){


        if( $().imagesLoaded && $().isotope) {

            var $container = $('.learn-press-courses');

            var el = $('.jws-masonry');
            el.each(function(i, val) {
                var _option = $(this).data('masonry');
                if (_option !== undefined) {
                    var _selector = _option.selector,
                        _width = _option.columnWidth,
                        _layout = _option.layoutMode;
                        console.log(_layout);
                    $(this).imagesLoaded(function() {
                        $(val).isotope({
                            itemSelector: _selector,
                            percentPosition: true,
                            masonry: {
                                columnWidth: _width
                            }
                        });
                    });
                }
            });

            $('.courses-filter .masonry-filter').on('click', 'a', function(e) {
               
                e.preventDefault();
                $('.courses-filter .masonry-filter').find('.filter-active').removeClass('filter-active');
                $(this).addClass('filter-active');
                var filterValue = $(this).attr('data-filter');
                $container.isotope({
                    filter: filterValue
                });

            });
        }
    }

    var about_video_popup = function() {
        if( $().magnificPopup ) {
            $('.jws-about-video a').magnificPopup({
                disableOn: 700,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 320,
                preloader: false
            });
        }
    }

    var removePreloader = function() {        
        $(window).on("load", function () {
            $(".loader").fadeOut();
            $("#loading-overlay").delay(500).fadeOut('slow',function(){
                $(this).remove();
            }); 
        });
    };

    function jwsScrollTo() {

        $('.scroll1').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({scrollTop: $("#scroll1").offset().top}, 'slow');
        });
        $('.scroll2').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({scrollTop: $("#scroll2").offset().top}, 'slow');
        });
        $('.scroll3').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({scrollTop: $("#scroll3").offset().top}, 'slow');
        });
        $('.scroll4').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({scrollTop: $("#scroll4").offset().top}, 'slow');
        });
    }

    function register_ajax() {
            $('#jws-popup-login form[name=registerformpopup]').on('submit', function(e) {
                e.preventDefault();
                
             var valid = true,
             email_valid = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;

            $(this).find('input.required').each(function() {
                // Check empty value
                if (!$(this).val()) {
                    $(this).addClass('invalid');
                    valid = false;
                }

                // Uncheck
                if ($(this).is(':checkbox') && !$(this).is(':checked')) {
                    $(this).addClass('invalid');
                    valid = false;
                }

                // Check email format
                if ('email' === $(this).attr('type')) {
                    if (!email_valid.test($(this).val())) {
                        $(this).addClass('invalid');
                        valid = false;
                    }
                }

            
            });


            $(this).find('input.required').on('focus', function() {
                $(this).removeClass('invalid');
            });
            if(!valid) {
               return valid; 
            }
            
              
                var $form = $(this),
                    data = {
                        action           : 'jws_register_ajax',
                        data             : $form.serialize() + '&wp-submit=' +
                            $form.find('input[type=submit]').val(),
                        register_security: $form.find('#register_security').
                            val(),
                    },
                    redirect_url = $form.find('input[name=redirect_to]').val(),
                    $elem = $('#jws-popup-login .jws-login-container');

                $elem.addClass('loading');
                $elem.find('.message').slideDown().remove();

                $.ajax({
                    type   : 'POST',
                    url: wc_add_to_cart_params.ajax_url,
                    data   : data,
                    success: function(response) {
                        $elem.removeClass('loading');
                        $elem.find('.popup-message').html(response.data.message);
                        if (response.success === true) {
                                window.location.href = redirect_url;
                        } else {
                            var $captchaIframe = $('#jws-popup-login .gglcptch iframe');
                            if ($captchaIframe.length > 0) {
                                $captchaIframe.attr('src', $captchaIframe.attr('src')); // reload iframe
                            }
                        }
                    },
                });
            });
        }
        function login_ajax() {
            $('#jws-popup-login form[name=loginpopopform]').on('submit', function(event) {
              event.preventDefault();

             var valid = true,
             email_valid = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;

            $(this).find('input.required').each(function() {
                // Check empty value
                if (!$(this).val()) {
                    $(this).addClass('invalid');
                    valid = false;
                }

                // Uncheck
                if ($(this).is(':checkbox') && !$(this).is(':checked')) {
                    $(this).addClass('invalid');
                    valid = false;
                }

                // Check email format
                if ('email' === $(this).attr('type')) {
                    if (!email_valid.test($(this).val())) {
                        $(this).addClass('invalid');
                        valid = false;
                    }
                }

            
            });


            $(this).find('input.required').on('focus', function() {
                $(this).removeClass('invalid');
            });
            if(!valid) {
               return valid; 
            }

                var form = $(this),
                    $elem = $('#jws-popup-login .jws-login-container'),
                    wp_submit = $elem.find('input[type=submit]').val();

                $elem.addClass('loading');
                $elem.find('.message').slideDown().remove();

                var data = {
                    action: 'jws_login_ajax',
                    data  : form.serialize() + '&wp-submit=' + wp_submit,
                };

                $.post(wc_add_to_cart_params.ajax_url , data, function(response) {
                    try {
                        response = JSON.parse(response);
                        $elem.find('.jws-login').append(response.message);
                        if (response.code == '1') {
                            if (response.redirect) {
                                if (window.location.href == response.redirect) {
                                    location.reload();
                                } else {
                                    window.location.href = response.redirect;
                                }
                            } else {
                                location.reload();
                            }
                        } else {
                            var $captchaIframe = $('#jws-popup-login .gglcptch iframe');
                            if ($captchaIframe.length > 0) {
                                $captchaIframe.attr('src', $captchaIframe.attr('src')); // reload iframe
                            }
                        }
                    } catch (e) {
                        return false;
                    }
                    $elem.removeClass('loading');
                });

                return false;
            });
        }
        function login_form_popup() {
                $(document).on('click', '#jws-popup-login .close-popup', function(event) {
                event.preventDefault();
                $('body').removeClass('jws-popup-active');
                $('#jws-popup-login').removeClass();
                });
    
                $('body:not(".logged-in") .wrap-account-btn a , body:not(".logged-in") .button-enroll-course , .protected_login').on('click', function(event) {
                    event.preventDefault();
    
                    let $popup = $('#jws-popup-login');
                    $('body').addClass('jws-popup-active');
                    $popup.addClass('active sign-in');

                }); 

            $('#jws-popup-login .link-bottom a.login').on('click', function(e) {
                    e.preventDefault();
                    $('.jws-login').addClass('active');
                    $('.jws-register').removeClass('active');
                
            });
            $('#jws-popup-login .link-bottom a.register').on('click', function(e) {
                    e.preventDefault();
                    $('.jws-register').addClass('active');
                    $('.jws-login').removeClass('active');
                
            });
          }  
          
          function stick_sidebar() { 

            $(".sticky_sidebar").theiaStickySidebar({
                "containerSelector": "",
                "additionalMarginTop": 120,
                "additionalMarginBottom": "0",
                "updateSidebarHeight": false,
                "minWidth": "768",
                "sidebarBehavior": "modern"
            });
            
          }
          function cart_mini() { 
              $('body').on('added_to_cart', function () {
                        $('body').addClass('widget-panel-open');
                        $('#jws-widget-panel-overlay').addClass('show');
              });
          }
             /**
             *-------------------------------------------------------------------------------------------------------------------------------------------
             * Ajax Search for course
             *-------------------------------------------------------------------------------------------------------------------------------------------
             */
            function ajaxSearch() {
                if ( typeof( $.fn.devbridgeAutocomplete ) == 'undefined' ) return;
                
                var escapeRegExChars = function (value) {
                    return value.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                };

                $('form.jws-ajax-search').each(function() {
                    var $this = $(this),
                        number = parseInt( $this.data('count') ),
                        thumbnail = parseInt( $this.data('thumbnail') ),
                        coureCat = $this.find('[name="course_category"]'),
                        $results = $this.parent().find('.jws-search-results'),
                        postType = $this.data('post_type'),
                        url = MS_Ajax.ajaxurl + '?action=jws_ajax_search',
                        price = parseInt( $this.data('price') );

                    if( number > 0 ) url += '&number=' + number;
                    url += '&post_type=' + postType;

                    $results.on('click', '.view-all-results', function() {
                        $this.submit();
                    });

                    if( coureCat.length && coureCat.val() !== '' ) {
                        url += '&course_category=' + coureCat.val();
                    }

                    $this.find('[type="text"]').devbridgeAutocomplete({
                        serviceUrl: url,
                        appendTo: $results,

                        onSelect: function (suggestion) {
                            if( suggestion.permalink.length > 0)
                                window.location.href = suggestion.permalink;
                        },
                        onSearchStart: function (query) {
                            $this.addClass('search-loading');
                        },
                        beforeRender: function (container) {

                            if( container[0].childElementCount > 2 )
                                $(container).append('<div class="view-all-results"><span>View All Course</span></div>');

                        },
                        onSearchComplete: function(query, suggestions) {
							$this.removeClass('search-loading');

               
                        },
                        formatResult: function( suggestion, currentValue ) {
                            if( currentValue == '&' ) currentValue = "&#038;";
                            var pattern = '(' + escapeRegExChars(currentValue) + ')',
                                returnValue = '';

                            if( thumbnail && suggestion.thumbnail ) {
                                returnValue += ' <div class="suggestion-thumb">' + suggestion.thumbnail + '</div>';
                            }
                            
                            returnValue += '<h4 class="suggestion-title result-title">' + suggestion.value
                                .replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>')
                                // .replace(/&/g, '&amp;')
                                .replace(/</g, '&lt;')
                                .replace(/>/g, '&gt;')
                                .replace(/"/g, '&quot;')
                                .replace(/&lt;(\/?strong)&gt;/g, '<$1>') + '</h4>';

                            if ( suggestion.no_found ) returnValue = '<div class="suggestion-title no-found-msg">' + suggestion.value + '</div>';

                            if( price && suggestion.price ) {
                                returnValue += ' <div class="suggestion-price price">' + suggestion.price + '</div>';
                            }
                     

                            return returnValue;
                        }
                    });
                  
                    if( coureCat.length ){

                        var searchForm = $this.find( '[type="text"]' ).devbridgeAutocomplete(),
                            serviceUrl = MS_Ajax.ajaxurl + '?action=jws_ajax_search';
                            
                        if( number > 0 ) serviceUrl += '&number=' + number;
                        serviceUrl += '&post_type=' + postType;
        
                        coureCat.on( 'cat_selected', function() {
                            
                            if( coureCat.val() != '' ) {
                                searchForm.setOptions({
                                    serviceUrl: serviceUrl + '&course_category=' + coureCat.val()
                                });
                        
                            }else{
                                searchForm.setOptions({
                                    serviceUrl: serviceUrl
                                });
                            }

                            searchForm.hide();
                            searchForm.onValueChange();
                        });
                    }

                    $( 'body' ).click( function() { 
                        $this.find( '[type="text"]' ).devbridgeAutocomplete( 'hide' );
                    } );

                    $( '.jws-search-results' ).click( function( e ) { 
                        e.stopPropagation(); 
                    } );

                });
                
                
                
                
                $('.input-dropdown-inner').each(function() {
                    var dd = $(this);
                    var btn = dd.find('> a');
                    var input = dd.find('> input');
                    var list = dd.find('> .list-wrapper');
                    
                    inputPadding();
                    
                    $(document).click(function(e) {
                        var target = e.target;
                        if (dd.hasClass('dd-shown') && !$(target).is('.input-dropdown-inner') && !$(target).parents().is('.input-dropdown-inner')) {
                            hideList();
                            return false;
                        }
                    });

                    btn.on('click', function(e) {
                        e.preventDefault();

                        if (dd.hasClass('dd-shown')) {
                            hideList();
                        } else {
                            showList();
                        }
                        return false;
                    });

                    list.on('click', 'a', function(e) {
                        e.preventDefault();
                        var value = $(this).data('val');
                        var label = $(this).text();
                        list.find('.current-item').removeClass('current-item');
                        $(this).parent().addClass('current-item');
                        if (value != 0) {
                            list.find('ul:not(.children) > li:first-child').show();
                        } else if (value == 0) {
                            list.find('ul:not(.children) > li:first-child').hide();
                        }
                        btn.text(label);
                        input.val(value).trigger('cat_selected');
                        hideList();
                        inputPadding();
                    });


                    function showList() {
                        dd.addClass('dd-shown');
                        list.slideDown(100);
                        if (typeof ($.fn.devbridgeAutocomplete) != 'undefined') {
                            dd.parent().siblings('[type="text"]').devbridgeAutocomplete('hide');
                        }
                        setTimeout(function() {
                            //woodmartThemeModule.nanoScroller();
                        }, 300);
                    }

                    function hideList() {
                        dd.removeClass('dd-shown');
                        list.slideUp(100);
                    }
                    
                    function inputPadding() {
                        if ($(window).width() <= 768) return;
                        var paddingValue = dd.innerWidth() + dd.parent().siblings( '.searchsubmit' ).innerWidth() + 17,
                            padding = 'padding-right';
                        if( $( 'body' ).hasClass( 'rtl' ) ) padding = 'padding-left';
                        
                        dd.parent().parent().find( '.s' ).css( padding, paddingValue );
                    }
                });
            }
            
                    /**
         *-------------------------------------------------------------------------------------------------------------------------------------------
         * coures tabs element AJAX loading
         *-------------------------------------------------------------------------------------------------------------------------------------------
         */
        function couresTabs() {
            
            var process = false;

            $('.thebrilliance-coures-tabs').each(function() {
                var $this = $(this),
                    $inner = $this.find('.thebrilliance-tab-content'),
                    cache = [];

                $this.find('.coures-tabs-title li').on('click', function(e) {
                    e.preventDefault();

                    var $this = $(this),
                        atts = $this.data('atts'),
                        index = $this.index();

                    if (process || $this.hasClass('active')) return;
                    process = true;

                    loadTab(atts, index, $inner, $this, cache, function(data) {
                        if (data.html) {
                            $inner.html(data.html);
                        }
                    });

                });

                var $nav = $this.find('.tabs-navigation-wrapper'),
                    $subList = $nav.find('ul'),
                    time = 300;

                $nav.on('click', '.open-title-menu', function() {
                        var $btn = $(this);

                        if ($subList.hasClass('list-shown')) {
                            $btn.removeClass('toggle-active');
                            $subList.removeClass('list-shown');
                        } else {
                            $btn.addClass('toggle-active');
                            $subList.addClass('list-shown');
                            setTimeout(function() {
                                $('body').one('click', function(e) {
                                    var target = e.target;
                                    if (!$(target).is('.tabs-navigation-wrapper') && !$(target).parents().is('.tabs-navigation-wrapper')) {
                                        $btn.removeClass('toggle-active');
                                        $subList.removeClass('list-shown');
                                        return false;
                                    }
                                });
                            }, 10);
                        }

                    })
                    .on('click', 'li', function() {
                        var $btn = $nav.find('.open-title-menu'),
                            text = $(this).text();
                        if ($subList.hasClass('list-shown')) {
                            $btn.removeClass('toggle-active').text(text);
                            $subList.removeClass('list-shown');
                        }
                    });

            });

            var loadTab = function(atts, index, holder, btn, cache, callback) {
                holder.addClass('thebrilliance-animated-coures');
                btn.parent().find('.active').removeClass('active');
                btn.addClass('active')
                if (cache[index]) {
                    holder.addClass('loading');
                    setTimeout(function() {
                        callback(cache[index]);
                        holder.removeClass('loading');
                        process = false;
                    }, 300);
                    return;
                }

                holder.addClass('loading').parent().addClass('element-loading');


                $.ajax({
                    url: MS_Ajax.ajaxurl,
                    data: {
                        atts: atts,
                        action: 'thebrilliance_get_coures_tab_shortcode'
                    },
                    dataType: 'json',
                    method: 'POST',
                    success: function(data) {
                        callback(data);
                        cache[index] = data;
                    },
                    error: function(data) {
                        console.log('ajax error');
                    },
                    complete: function() {
                        holder.removeClass('loading').parent().removeClass('element-loading');
                        process = false;
                        video_thumbnail();
                    },
                });
            };
        }
                /**
         *-------------------------------------------------------------------------------------------------------------------------------------------
         * Instagram Shortcode
         *-------------------------------------------------------------------------------------------------------------------------------------------
         */  
     
     function instagram_widget() {

        $('.instagram-pics').each(function() {
              var userid = $(this).data('name'),
                number = $(this).data('number'),
                token = $(this).data('token'),
                target = $(this).data('target'),
                i = 1,
                edges = '',
                taget = $(this).attr('id');
                var userFeed = new Instafeed({
                target: taget,
                get: 'user',
                userId: userid,
                accessToken:token,
                limit:number,
                template: '<li><div class="wrapp-pics">' + '<a target="'+ target +'"  href="{{link}}"><div class="wrapp-pics"><img src="{{image}}" alt=""><div class="hover-mask"></div></div></a></div></li>',
                resolution: 'low_resolution', // This can be any name you like, you just need to re-use it in the success callback.

            });
            userFeed.run();
        });
    }

    $(function() {
        instagram_widget();
        cart_mini();
        login_ajax();
        couresTabs();    
        ajaxSearch();
        wp_gallery_popup();
        login_form_popup();
        stick_sidebar();
        jwsScrollTo();
        list_icon_shortcode();
        register_ajax();
        event_shortcode();
        slide_images();
        testimonial_carousel();
        about_video_popup();
        jws_isotope_portfolio();
        jws_isotope_elements();
        jws_countdown();
        jws_review_event_rating();
        jws_buy_ticket_action();
        jws_masonry();
        widget_collapse();
        related_carousel();
        lp_section_header_active();
        lp_share_btn();
        video_thumbnail();
        jws_isotope_courses();
        jws_events_matchHeight();
        jws_post_matchHeight();
        jws_coures_matchHeight();
        searchFormOverlay();
        element_masonry();
        quantityInputsBindButtons();
        loadMore();
        jws_menu_sticky();
        totop();
        slide_coure('.woocommerce-coure-gallery .slider-for','.woocommerce-coure-gallery .slider-nav');
        removePreloader();
    });

})(window.jQuery);