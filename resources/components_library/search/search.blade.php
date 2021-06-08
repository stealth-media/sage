{{--Add to header.blade.php, right after page-loader--}}
<div class="search-overlay">
    <div class="search-overlay__search-container js__close-search"></div>
    <form method="get" class="search-overlay__search-form" action="<?php echo get_home_url() ?>">
        <button type="submit" class="search-overlay__form-search-btn" id="searchsubmit"><i class="fa fa-search"></i></button>
        <div class="container text-center">
            <input class="search-overlay__form-search-input" type="text" placeholder="Search..." name="s" id="s" />
        </div>
    </form>
    <button type="button" class="search-overlay__close js__close-search"><i class="fas fa-times"></i></button>
</div>

{{--Include this button to your nav or where you want the search button to be--}}
<button class="search-btn">
    <i class="fa fa-search"></i>
</button>
