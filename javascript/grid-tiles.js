'use strict';

var APP = window.APP = window.APP || {};

APP.GridTiles = (function(){

    var bindEventsToUI = function() {
        // ...
    };

    var init = function() {
        console.log('APP.GridTiles');
        bindEventsToUI();
    };

    /**
     * interfaces to public functions
     */
    return {
        init: init
    };

}());
