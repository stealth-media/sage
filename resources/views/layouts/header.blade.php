<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="utf-8">

    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <meta name="theme-color" content="#141414"/>

    @yield('styles')

    @stack('header.scripts')

    @php(wp_head())

</head>

<body @php(body_class()) >

@php(wp_body_open())

@php(do_action('get_header'))

<div id="app">
    <!-- PAGE LOADER -->
@include('partials.page-loader')

<!-- MOBILE NAV -->
    @include('partials.mobile-menu')

    @include('partials.nav')
    {{--        @include('partials.mega-nav')--}}
    <main id="panel"><!-- Needed for mobile menu. This is what slides when you click mobile menu button -->
