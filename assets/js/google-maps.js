function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -0.468056, lng: 117.185175};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'South Borneo, INA' // Title Location
    });
}