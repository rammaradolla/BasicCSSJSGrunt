"use strict";

var APP = window.APP = window.APP || {};

APP.Accordion = function() {
    var $element;
    var $window;
    var setAccordion = function(element) {
        $(element).addClass("accordion");
    };
    var onClick = function(element) {
        console.log($(element).find("h2:first"));
        $(element).children("h2:first, .accordion-title").on("click", function() {
            var target;
            var desktopFlag;
            target = $(this);
            desktopFlag = $(this).closest(".accordion").first().attr("data-accordion-desktop");
            if (APP.isSmall || desktopFlag) {
                target.closest(".accordion").find(".accordion-body").slideToggle(function() {
                    target.closest(".accordion").toggleClass("closed");
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
        console.log("APP.Accordions");
        initGlobals(element);
        bindEventsToUI(element);
    };
    return {
        init: init
    };
}();

"use strict";

var APP = window.APP = window.APP || {};

APP.core = {};

APP.core.controller = function() {
    var _route = "";
    var setRoute = function(strVal) {
        _route = strVal;
    };
    var getRoute = function() {
        return _route;
    };
    var locateRoutableElementsInDOM = function(attribute) {
        var matchingElements = [];
        var allElements = document.getElementsByTagName("*");
        for (var i = 0, n = allElements.length; i < n; i++) {
            if (allElements[i].getAttribute(attribute) !== null) {
                matchingElements.push(allElements[i]);
            }
        }
        return matchingElements;
    };
    var executeRouteForElement = function(element) {
        var namespace = APP;
        var route = getRoute();
        var action = "init";
        if (route !== "" && namespace[route] && typeof namespace[route][action] === "function") {
            namespace[route][action](element);
        }
    };
    var init = function(filterArray) {
        var routes = locateRoutableElementsInDOM("data-action");
        for (var i = 0; i < routes.length; i++) {
            var element = routes[i];
            var routeName = element.getAttribute("data-action");
            if (filterArray !== undefined) {
                for (var j = 0; j < filterArray.length; j++) {
                    if (filterArray[j] === routeName) {
                        console.log("APP.controller.init | APP." + routeName + ".init() invoked");
                        setRoute(routeName);
                        executeRouteForElement(element);
                    }
                }
            } else {
                console.log("APP.controller.init | APP." + routeName + ".init() invoked");
                setRoute(routeName);
                executeRouteForElement(element);
            }
        }
    };
    return {
        init: init
    };
}();

"use strict";

var APP = window.APP = window.APP || {};

APP.GridTiles = function() {
    var bindEventsToUI = function() {};
    var init = function() {
        console.log("APP.GridTiles");
        bindEventsToUI();
    };
    return {
        init: init
    };
}();