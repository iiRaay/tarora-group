function initMap() {
    var myLatlng = { lat: 51.17063673934746, lng: -114.16822765749377 };

    var mapOptions = {
        zoom: 15,
        center: myLatlng,
        disableDefaultUI: true,
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    var addresses = ['Tarora Rejuvenation, Nolanridge Ct NW, Calgary, AB T3R 1W7'];

    for (var x = 0; x < addresses.length; x++) {
        var geocoder = new google.maps.Geocoder();
        geocodeAddress(geocoder, map, addresses[x]);
    }
}

function geocodeAddress(geocoder, resultsMap, address) {
    geocoder.geocode({ address: address }, function(results, status) {
        if (status === 'OK') {
            resultsMap.setCenter(results[0].geometry.location);
            new google.maps.Marker({
                map: resultsMap,
                position: results[0].geometry.location,
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}