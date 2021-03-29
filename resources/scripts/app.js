/**
 * External Dependencies
 */
import 'jquery';
import 'slideout';

$(document).ready(() => {
    windowLoad();
    mobileMenu();
    scroller();
});

/*
 * Removes loading animation when page load is completed
 */
function windowLoad() {
    // var loader;
    if (document.readyState == 'loading') {
        // loader = requestAnimationFrame(animateLoaderScript);
    }
    $(window).load(function () {
        $(".page-loader").fadeOut("slow");
        $("body").removeClass("preload");
    });
}


/*
 * Adds a button to nav links with sub menus, when clicked shows the sub menu
 */
function mobileMenu() {
    var $menu = $('#mobile-menu'),
        $menuButton = '<button type="button" class="mobile-nav-sub-menu-button"><i class="fas fa-chevron-down"></i></button>';

    $menu.find('.menu-item-has-children').each(function () {
        $(this).append($menuButton);
    });

    var current = $(".current-menu-ancestor");
    current.addClass('visible');
    current.find(".mobile-nav-sub-menu-button").addClass('open');

    $('.mobile-nav-sub-menu-button').click(function () {
        $(this).parent().toggleClass('visible');
        $(this).parent().siblings().removeClass('visible');
        $(this).toggleClass('open');
        $(this).parent().siblings().find('.open').removeClass('open');
    });

    window.addEventListener('DOMContentLoaded', function () {

        var btnSidebar = document.querySelector('.js-slideout-toggle');
        var blockFixed = $('.fixed');
        var blockMain = document.querySelector('#panel');
        var blockSidebar = document.querySelector('#mobile-menu-slide');
        var blockSidebarWidth = 280;

        var slideoutSidebar = new Slideout({
            'panel': blockMain,
            'menu': blockSidebar,
            'padding': blockSidebarWidth,
            'tolerance': 70,
            'side': 'right', // move sidebar to right
            'touch': false,
        });

        btnSidebar.addEventListener('click', function () {
            slideoutSidebar.toggle();
            $('.btn-nav').toggleClass('is-active');
            // $('#mountainsHome').css('position', 'relative');
            window.dispatchEvent(new Event('resize'));
        });

        slideoutSidebar.on('beforeopen', function () {
            blockFixed.addClass('fixed-open');
        });

        slideoutSidebar.on('beforeclose', function () {
            blockFixed.removeClass('fixed-open');
        });

        function checkOpen(eve) {
            if (slideoutSidebar.isOpen()) {
                eve.preventDefault();
                slideoutSidebar.close();
                $('.btn-nav').toggleClass('is-active');
            }
        }

        function addClick() {
            document.querySelector('#panel').addEventListener('click', checkOpen);
        }

        function removeClick() {
            document.querySelector('#panel').removeEventListener('click', checkOpen);
            // $(window).trigger('resize');
        }

        slideoutSidebar.on('open', addClick);
        slideoutSidebar.on('close', removeClick);

    }, false);
}


/*
 * Any on scroll functionality should be placed here so only one window scroll is called
 */
function scroller() {

    // == Change Header on scroll ==
    var header = $(".header-primary");

    // ******* SCROLL ************\\
    $(window).on('scroll', function () {

        // == Change Header on scroll ==
        scroll = $(window).scrollTop();
        // set scroll amount (px)
        if (scroll >= 60) {
            header.addClass("header-secondary");// if scroll is further than #px change class
            // splashBox.css("z-index", -100);
        } else {
            header.removeClass("header-secondary"); // if not (is at top) change class back
        }

    });

    // == Change Header on scroll ==
    var scroll = scroll;
    if (scroll >= 60) {
        header.addClass("header-secondary");// if scroll is further than #px change class
    } else {
        header.removeClass("header-secondary"); // if not (is at top) change class back
    }
}
