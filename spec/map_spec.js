describe("Map", function() {
    it("renders with the default properties", function() {
        var map = renderMap(document.createElement('div'));
        expect(map.getZoom()).toEqual(DEFAULT_MAP_OPTIONS['zoom']);
        expect(map.getCenter()).toEqual(DEFAULT_MAP_OPTIONS['center']);
        expect(map.getMapTypeId()).toEqual(DEFAULT_MAP_OPTIONS['mapTypeId']);
    });
});
