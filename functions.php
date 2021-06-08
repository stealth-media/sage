<?php

    /*
    |--------------------------------------------------------------------------
    | Register The Auto Loader
    |--------------------------------------------------------------------------
    |
    | Composer provides a convenient, automatically generated class loader for
    | our theme. We will simply require it into the script here so that we
    | don't have to worry about manually loading any of our classes later on.
    |
    */

    if ( ! file_exists($composer = __DIR__ . '/vendor/autoload.php') ) {
        wp_die(__('Error locating autoloader. Please run <code>composer install</code>.', 'sage'));
    }

    require $composer;

    /*
    |--------------------------------------------------------------------------
    | Run The Theme
    |--------------------------------------------------------------------------
    |
    | Once we have the theme booted, we can handle the incoming request using
    | the application's HTTP kernel. Then, we will send the response back
    | to this client's browser, allowing them to enjoy our application.
    |
    */

    require_once __DIR__ . '/bootstrap/app.php';


    /**
     *
     * Function to return Image src data-set
     *
     * @param $image Image array
     * @param string $size it can be thumbnail, full etc
     * @param string $alt alt-tag value
     * @param string $class custom class name
     * @param bool $is_echo true/false
     * @return string echo to page if is_echo is true other wise return string
     *
     * USAGE: {!! the_image(get_field('my-image'), 'my-class', 'full') !!}
     */
    function the_image($image, $class = '', $size = 'full') {
        echo wp_get_attachment_image($image['ID'], $size, '', array('alt' => $image['alt'], 'class' => $class));
    }
