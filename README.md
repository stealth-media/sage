<p align="center">
  <strong>Stealth's WordPress starter theme Built off of Sage 9 by roots</strong>
</p>

<p align="center">
  <a href="https://roots.io">Official Website</a> | <a href="https://roots.io/docs/sage/">Documentation</a> | <a href="CHANGELOG.md">Change Log</a>
</p>

## Stealth Boilerplate Notes
- Choose which css pre-processor you would like to use in `webpack.mix.js`. Both SASS (default) and LESS available.
- If using less, start with editing the `variables.less` file. The bootstrap grid is applied and can be found at `resources/less/common/bootstrap/grid.less`. To enable bootstrap css, uncomment "bootstrap.less" from `app.less`
- This Boilerplate has removed the original Sage code from `index.php` and has placed the `<head>` in `resources/views/layouts/header.blade.php` and closing `</body>` in `resources/views/layouts/footer.blade.php`
- Find JavaScript snippet @ `resources/scripts/snippets.js` (use `app.js` for main js scripts)
- This Boilerplate has been set up with a working mobile nav. Slideout js has been included for use in mobile nav. 
    - Find HTML @ `resources/views/partials/mobile-menu.blade.php` which has been included in `resources/views/layouts/header.blade.php`, 
    - CSS @ `resources/less/layouts/mobile-menu.less`
    - JS to handle slide out and nav buttons @ `resources/scripts/app.js` `mobileMenu()`

## About Sage

Sage is a productivity-driven WordPress starter theme with a modern development workflow.

**The `master` branch currently tracks Sage 10 which is in active development. Looking for Sage 9? [See releases](https://github.com/roots/sage/releases).**

## Features

- Harness the power of [Laravel](https://laravel.com) and its available packages thanks to [Acorn](https://github.com/roots/acorn).
- Clean, efficient theme templating utilizing [Laravel Blade](https://laravel.com/docs/master/blade).
- Easy [Browsersync](http://www.browsersync.io/) support alongside asset compilation, concatenating, and minification powered by [Laravel Mix](https://github.com/JeffreyWay/laravel-mix).
- Out of the box support for [TailwindCSS](https://tailwindcss.com/) and [jQuery](https://jquery.com).
- A clean starting point for theme styles using [Sass](https://sass-lang.com/).

See a working example at [roots-example-project.com](https://roots-example-project.com/).

## Requirements

Make sure all dependencies have been installed before moving on:

- [WordPress](https://wordpress.org/) >= 5.4
- [PHP](https://secure.php.net/manual/en/install.php) >= 7.3.0 (with [`php-mbstring`](https://secure.php.net/manual/en/book.mbstring.php) enabled)
- [Composer](https://getcomposer.org/download/)
- [Node.js](http://nodejs.org/) >= 12.14.0
- [Yarn](https://yarnpkg.com/en/docs/install)

## Theme installation

Install Sage using Composer from your WordPress themes directory (replace `your-theme-name` below with the name of your theme):

```sh
# @ app/themes/ or wp-content/themes/
$ composer create-project roots/sage your-theme-name
```

To install the latest development version of Sage, add `dev-master` to the end of the command:

```sh
$ composer create-project roots/sage your-theme-name dev-master
```

## Theme structure

```sh
themes/your-theme-name/   # → Root of your Sage based theme
├── app/                  # → Theme PHP
│   ├── View/             # → View models
│   ├── Providers/        # → Service providers
│   ├── admin.php         # → Theme customizer setup
│   ├── filters.php       # → Theme filters
│   ├── helpers.php       # → Helper functions
│   └── setup.php         # → Theme setup
├── bootstrap/            # → Acorn bootstrap
│   ├── cache/            # → Acorn cache location (never edit)
│   └── app.php           # → Acorn application bootloader
├── config/               # → Config files
│   ├── app.php           # → Application configuration
│   ├── assets.php        # → Asset configuration
│   ├── filesystems.php   # → Filesystems configuration
│   ├── logging.php       # → Logging configuration
│   └── view.php          # → View configuration
├── composer.json         # → Autoloading for `app/` files
├── composer.lock         # → Composer lock file (never edit)
├── public/               # → Built theme assets (never edit)
├── functions.php         # → Theme bootloader
├── index.php             # → Theme template wrapper
├── node_modules/         # → Node.js packages (never edit)
├── package.json          # → Node.js dependencies and scripts
├── resources/            # → Theme assets and templates
│   ├── fonts/            # → Theme fonts
│   ├── images/           # → Theme images
│   ├── scripts/          # → Theme javascript
│   ├── less/             # → Theme less styles
│   ├── sass/             # → Theme sass styles
│   ├── styles/           # → Theme stylesheets
│   └── views/            # → Theme templates
│       ├── components/   # → Component templates
│       ├── form/         # → Form templates
│       ├── layouts/      # → Base templates
│       └── partials/     # → Partial templates
├── screenshot.png        # → Theme screenshot for WP admin
├── storage/              # → Storage location for cache (never edit)
├── style.css             # → Theme meta information
├── vendor/               # → Composer packages (never edit)
└── webpack.mix.js        # → Laravel Mix configuration
```

## Theme setup

Edit `app/setup.php` to enable or disable theme features, setup navigation menus, post thumbnail sizes, and sidebars.

## Theme development
- Run `npm install --global yarn` to install yarn on your machine. (If you do not have it already)
- Run `yarn` from the theme directory to install dependencies
- Update `webpack.mix.js` with your local dev URL

### Build commands

- `yarn start` — Compile assets when file changes are made, start Browsersync session
- `yarn build` — Compile and optimize the files in your assets directory
- `yarn build:production` — Compile assets for production

## Documentation

- [Sage documentation](https://roots.io/sage/docs/)
