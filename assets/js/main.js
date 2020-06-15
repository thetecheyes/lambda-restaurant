(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        //Jquery Smooth Scroll

        $('li.smooth-scroll a').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '82';
            $('html,body').stop().animate({
                scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
            },1200, 'easeInQuart');

            event.preventdefault();
            });

        //Jquery Scroll Spy
    
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 95
        });

        // jQuery Parallax

        $('.parallax-bg').scrolly({bgParallax: true});

    });

    

    
    jQuery(window).load(function(){
        
    });
}(jQuery));	