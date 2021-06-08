/*
 * Activates search function
 */
function search() {
    $(".search-btn").click(function (e) { // when nav button is clicked
        $(".search-overlay").fadeIn(300); // toggle the nav
        $(".search-overlay__form-search-input").focus();
        e.stopPropagation();
    });
    $('.js__close-search').click(function () {
        $('.search-overlay').fadeOut();
    });
    $(document).on('keydown', function (e) {
        if (e.keyCode === 27) { // ESC
            $('.search-overlay').fadeOut();
        }
    });
}
