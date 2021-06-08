<?php
    // Add to function.php


    /*
    * Add API key to ACF Maps
    */
    function my_acf_init() {
        acf_update_setting('google_api_key', 'AIzaSyDTKiffY7E3bkf5b-GS1LyOvnI5NjjZdNo'); // EDIT THIS --------------------
    }

    add_action('acf/init', 'my_acf_init');

    /*
     * add lat lng to meta data of new pins. So we can query this meta data for map.
     */
    function my_acf_save_post($post_id) {
        // Get newly saved values.
        $value = get_field('map_pin', $post_id, false); // EDIT THIS --------------------

        if ( $value ) {
            update_post_meta($post_id, 'lat', $value['lat']);
            update_post_meta($post_id, 'lng', $value['lng']);
        }
    }

    add_action('acf/save_post', 'my_acf_save_post');

    // Review Map
    // register the endpoint
    add_action('rest_api_init', function () {
        register_rest_route('stealth_endpoint/v1', '/locations/', [ // EDIT THIS | Match with simple_pins_map.js --------------------
                'methods'  => 'GET',
                'callback' => function (WP_REST_Request $request) {
                    $args = [
                        'post_type'      => 'post', // EDIT THIS --------------------
                        'posts_per_page' => -1,
                        'post_status'    => 'publish',
                    ];
                    $posts = get_posts($args);
                    foreach ( $posts as $key => $post ) { // EDIT THIS | Match with simple_pins_map.js --------------------
                        $posts[$key]->acf_title = get_the_title($post->ID);
                        $posts[$key]->acf_address = get_field('address', $post->ID);
                        $posts[$key]->acf_map_pin = get_field('map', $post->ID);
                    }

                    return $posts;
                },
            ]
        );
    });
