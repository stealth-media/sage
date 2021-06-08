const google = window.google;

function simplePinsMap() {
    var loc = [];

    var locationsURL = '/wp-json/stealth_endpoint/v1/locations/'; // EDIT THIS | Match with simple_pins_map.php --------------------

    fetch(locationsURL, {mode: 'same-origin', credentials: 'same-origin', cache: 'no-cache'})
    .then((response) => {
        return response.json();
    })
    .then((myJson) => {
        Array.from(myJson).forEach(function (post) {
            loc.push({ // EDIT THIS | Match with simple_pins_map.php --------------------
                title: post.acf_title,
                address: post.acf_address,
                lat: post.acf_map_pin.lat,
                long: post.acf_map_pin.lng,
            });

        });
        initMap(loc);
    });

}

function initMap(loc) {
    var userLat = 52.161828;
    var userLng = -104.654531;

    var map = new google.maps.Map(document.getElementById('js--simple-pins-map'), {
        zoom: 10,
        minZoom: 3,
        maxZoom: 12,
        center: new google.maps.LatLng(userLat, userLng),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true, // a way to quickly hide all controls
        zoomControl: true,
        scrollwheel: false,
        navigationControl: false,
        mapTypeControl: false,
        scaleControl: false,
        draggable: true,
        // EDIT THIS --------------------
        styles: [
            {
                "featureType": "administrative.locality",
                "elementType": "all",
                "stylers": [{"hue": "#2c2e33"}, {"saturation": 7}, {"lightness": 19}, {"visibility": "on"}]
            }, {
                "featureType": "landscape",
                "elementType": "all",
                "stylers": [{"hue": "#ffffff"}, {"saturation": -100}, {"lightness": 100}, {"visibility": "simplified"}]
            }, {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [{"hue": "#ffffff"}, {"saturation": -100}, {"lightness": 100}, {"visibility": "off"}]
            }, {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{"hue": "#bbc0c4"}, {"saturation": -93}, {"lightness": 31}, {"visibility": "simplified"}]
            }, {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [{"hue": "#bbc0c4"}, {"saturation": -93}, {"lightness": 31}, {"visibility": "on"}]
            }, {
                "featureType": "road.arterial",
                "elementType": "labels",
                "stylers": [{"hue": "#bbc0c4"}, {"saturation": -93}, {"lightness": -2}, {"visibility": "simplified"}]
            }, {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [{"hue": "#e9ebed"}, {"saturation": -90}, {"lightness": -8}, {"visibility": "simplified"}]
            }, {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [{"hue": "#e9ebed"}, {"saturation": 10}, {"lightness": 69}, {"visibility": "on"}]
            }, {
                "featureType": "water",
                "elementType": "all",
                "stylers": [{"hue": "#e9ebed"}, {"saturation": -78}, {"lightness": 67}, {"visibility": "simplified"}]
            }],
    });
    var infowindow = new google.maps.InfoWindow({
        pixelOffset: new google.maps.Size(0, 0),
    });
    var i;
    var marker;
    var markers = new Array();

    for (i = 0; i < loc.length; i++) {
        var image = '/app/uploads/my-custom-pin.png'; // EDIT THIS --------------------------------
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(loc[i].lat, loc[i].long),
            map: map,
            icon: image,
        });

        markers.push(marker);

        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                // EDIT THIS --------------------
                var string = '<div class="info--window">';
                string += '<h4 class="text-center"><strong>' + loc[i].title + '</strong></h4>';
                string += '<p class="text-center">' + loc[i].address + '</p>';
                string += '</div>';

                infowindow.setContent(string);
                infowindow.open(map, marker);
            };
        })(marker, i));
    }

    //  Create a new viewpoint bound
    var bounds = new google.maps.LatLngBounds();
    //  Go through each...
    $.each(markers, function (index, marker) {
        bounds.extend(marker.position);
    });
    //  Fit these bounds to the map
    map.fitBounds(bounds);
}
