<nav class="mobile-menu-panel mobile" id="mobile-menu-slide">
    <div id="site-navigation">
        <div id="site-menu" class="text-center" role="navigation" itemscope itemtype="https://schema.org/SiteNavigationElement">
            @if (has_nav_menu('mobile'))
                {!! wp_nav_menu(['theme_location' => 'mobile', 'menu_id' => 'mobile-menu', 'depth' => 2]) !!}
            @endif
            <ul class="social-list">
                <li class="social-item">
                    <a href="#" target="_blank" class="hvr-bob">
                        <i class="fab fa-facebook-f"></i>
                    </a>
                </li>
                <li class="social-item">
                    <a href="#" target="_blank" class="hvr-bob">
                        <i class="fab fa-linkedin-in"></i>
                    </a>
                </li>
                <li class="social-item">
                    <a href="#" target="_blank" class="hvr-bob">
                        <i class="fab fa-twitter"></i>
                    </a>
                </li>
                <li class="social-item">
                    <a href="#" target="_blank" class="hvr-bob">
                        <i class="fab fa-instagram"></i>
                    </a>
                </li>
                <li class="social-item">
                    <a href="#" target="_blank" class="hvr-bob">
                        <i class="fab fa-youtube"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="menu-cta-button-container">
        <a href="/web-design-contact/" class="btn btn-primary stealth-swipe">Book My Consultation</a>
    </div>
</nav>
