<!-- Mega menu -->
<header id="header" class="header-primary mega-menu" role="banner" itemscope itemtype="https://schema.org/WPHeader">
    <div class="container-fluid">
        <div id="site-menu" class="text-center desktop" role="navigation" itemscope itemtype="https://schema.org/SiteNavigationElement">
            @if (has_nav_menu('primary_navigation'))
                {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_id' => 'main-menu', 'depth' => 2, 'echo' => false]) !!}
            @endif
        </div>
        <div id="site-branding">
            <a id="header-logo" class="" href="{{ esc_url(home_url('/')) }}" title="{{ esc_attr(get_bloginfo('name', 'display')) }}" rel="home">
                <img class="logo" src="https://stealthmedia.com/wp-content/uploads/assets/STEALTH-logo.svg" alt="Logo">
            </a>
        </div>
        <div class="site-nav-button-container mobile">
            <button id="nav-btn" class="btn btn-nav js-slideout-toggle hamburger hamburger--elastic">
				<span class="hamburger-box">
					<span class="hamburger-inner"></span>
				</span>
            </button>
        </div>
    </div>
</header>
