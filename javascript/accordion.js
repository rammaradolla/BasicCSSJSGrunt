'use strict';

var APP = window.APP = window.APP || {};

APP.Accordion = (function(){

    var $element;
    var $window;


    var setAccordion = function(element) {
        $(element).addClass('accordion');
    };

    var onClick = function(element){
        console.log($(element).find('h2:first'));
        $(element).children('h2:first, .accordion-title').on('click',function() {

            var target;
            var desktopFlag;

            target = $(this);
             
            desktopFlag = $(this).closest('.accordion').first().attr('data-accordion-desktop');
            if(APP.isSmall || desktopFlag) {
                
                target.closest('.accordion').find('.accordion-body').slideToggle(function() {
                    target.closest('.accordion').toggleClass('closed');
                });
            }

        });
    };

    

    var initGlobals = function(element) {
        $element = $(element);
        $window = $(window);
    };

    var bindEventsToUI = function(element) {
        setAccordion(element);
        
        onClick(element);
    };

    var init = function(element) {
        console.log('APP.Accordions');
        
        initGlobals(element);
        bindEventsToUI(element);


        
    };

    /**
     * interfaces to public functions
     */

    return {
        init: init
    };

}());
