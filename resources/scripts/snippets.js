// ************************************************************************************************ \\
// Library of handy code snippets. Copy, paste desired code in app.js. Be sure to call function.
// ************************************************************************************************ \\


// == CHECK IF MOBILE DEVICE ===================================================================== \\
var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
    isMobile = true;
}



/*
 * Removes loading animation when page load is completed
 */
function windowLoad() {
    // var loader;
    if(document.readyState == 'loading'){
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

    $menu.find('.menu-item-has-children').each(function(){
        $(this).append($menuButton);
    });

    var current = $(".current-menu-ancestor");
    current.addClass('visible');
    current.find(".mobile-nav-sub-menu-button").addClass('open');

    $('.mobile-nav-sub-menu-button').click(function(){
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
            'touch': false
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
                $('#mountainsHome').css('position', 'relative');
            } else {
                $('#mountainsHome').css('position', 'fixed');
            }
            console.log('here')
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
function scroller(){

    // == Change Header on scroll ==
    var header = $(".header-primary");


    // ******* SCROLL ************\\
    $(window).on('scroll',function () {

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



/*
 * Activates search function
 */
function search() {
    $(".search-btn").click(function (e) { // when nav button is clicked
        $(".search-overlay").fadeIn(300); // toggle the nav
        $(".form-search-input").focus();
        e.stopPropagation();
    });
    $('.search-container').click(function () {
        $('.search-overlay').fadeOut();
    });
}



/*
 * Adds scroll to animation functionality
 * add class="animation-element" to an element you want to be triggered when scrolled to,
 * then your animation found in animation.less
 */
function animateOnScroll() {
    var $animation_elements = $('.animation-element');
    var $tab_animation_elements = $('.tab-animation-element');
    var $force_in_view = $('.force-in-view');
    var $window = $(window);

    function check_if_in_view() {
        var window_height = $window.height() - 200;
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);

        if($animation_elements){
            $.each($animation_elements, function () {
                var $element = $(this);
                var element_height = $element.outerHeight();
                var element_top_position = $element.offset().top;
                var element_bottom_position = (element_top_position + element_height);

                //check to see if this current container is within viewport
                if ((element_bottom_position >= window_top_position) &&
                    (element_top_position <= window_bottom_position)) {
                    $element.addClass('in-view');
                }
            });
        }
        if($force_in_view){
            $.each($force_in_view, function () {
                $(this).addClass('in-view');
            });
        }
    }



    $(window).load(function () {
        setTimeout(function(){
            $window.on('scroll resize', check_if_in_view);
            $window.trigger('scroll');
        }, 600)
    });
}



/*
 * Opens a fancy box window that will play a youtube video when a fancy box video is clicked
 */
function fancyBoxYoututbe(){
    $( 'a.fancy-youtube-video' ).fancybox({
        type: 'iframe'
    });
}



/*
 * Adds file name to file input label
 */
function fileInputLabel(){
    $('.custom-file input').change(function (e) {
        var files = [];
        for (var i = 0; i < $(this)[0].files.length; i++) {
            files.push($(this)[0].files[i].name);
        }
        $(this).next('.custom-file-label').html(files.join(', '));
    });
}
