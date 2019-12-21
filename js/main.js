/*global $, alert, console*/


$(function () {
    "use strict";
    // For Header Height 
    if ($(window).height() > 500 && $(window).width() > 439) {
        $("header").height($(window).height());
    } else if ($(window).height() > 500 && $(window).width() < 439) {
        $("header").height(640);
    } else {
        $("header").height(500);
    }
    $(window).resize(function () {
        if ($(window).height() > 500 && $(window).width() > 439) {
            $("header").height($(window).height());
        } else if ($(window).height() > 500 && $(window).width() < 439) {
            $("header").height(640);
        } else {
            $("header").height(500);
        }
    });
   
    // For make navbar Fixed 
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('nav').offset().top && $(window).scrollTop() > $('header').height()) {
            $('nav').addClass('navbar-fixed-top');
        } else {
            $('nav').removeClass('navbar-fixed-top');
        }
    });
    // trigger or turon on shuffle login 
    
    $('#piccc').mixItUp();
        
    // count function 
    
    $('.timer').countTo();
    
    // Start Fit-vedio 
    $(".trt").fitVids();
    
    // Start Fit-text 
    $(".ediv ").fitText(1.2);
    
    // navigate smothly to links 
    
    $('nav ul li a').click(function () {
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('value')).offset().top
        }, 1000);
    });
    
    // add active class for links 
    
    $('nav ul li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });
    
    
});










