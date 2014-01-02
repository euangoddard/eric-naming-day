(function ($) {
    'use strict';
    
    var ACTIVE_CLASS = 'active';

    var DESKTOP_BREAKPOINT_WIDTH = 768;
    
    var swap_image = function () {
        var $current_image = $('header img.active');
        var $next_image = $current_image.next('img');
        if (!$next_image.length) {
            $next_image = $('header img:first');
        }
        $current_image.removeClass(ACTIVE_CLASS);
        $next_image.addClass(ACTIVE_CLASS);
    };
    

    var setup_scrolling_parallax = function () {
        var $banner_images = $('header img');
        var $window = $(window);
        $window.on('scroll', function () {
            if (DESKTOP_BREAKPOINT_WIDTH <= $window.width()) {
                $banner_images.css({
                    top: get_image_top_offset()
                });
            } else {
                $banner_images.removeAttr('style');
            }
        });
    };
    
    var get_image_top_offset = function () {
        var scroll = $(document).scrollTop();
        var $header = $('header')
        var $image = $header.children('img:first');
        var max_scroll = $header.height() - $image.height();
        var top = Math.max(max_scroll, parseInt(-0.45 * scroll, 10));
        return top + 'px';
    };
    
    $(function () {
        setup_scrolling_parallax();
        setInterval(swap_image, 5000);
    });
})(window.jQuery);
