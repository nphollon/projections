var CANVAS_ID = "map-canvas";
var DEFAULT_MAP_OPTIONS = {
    center: new google.maps.LatLng(40, -99), // Center of US
    zoom: 4,
    mapTypeId: google.maps.MapTypeId.SATELLITE
};

function renderMap(mapCanvas) {
    return new google.maps.Map(mapCanvas, DEFAULT_MAP_OPTIONS);
}

$(document).ready(function() {
    var canvasElement = $('#'+CANVAS_ID).get(0);
    renderMap(canvasElement);
});