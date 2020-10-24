let map;

window.InitMap = () => {
    const route = window.GetRouteData();


    route.then((r) => {
        map = new google.maps.Map(document.getElementById('maps'), {
            center: new google.maps.LatLng(r['0'].Latitude, r['0'].Longitude),
            zoom: 19,
            scaleControl: true,
        });

        let request = {
            origin: new google.maps.LatLng(r['0'].Latitude, r['0'].Longitude),
            destination: new google.maps.LatLng(r[(r.length - 1).toString(10)].Latitude, r[(r.length-1).toString(10)].Longitude),
            travelMode: google.maps.DirectionsTravelMode.DRIVING,
            waypoints: [],
            avoidFerries: false,
            avoidHighways: false,
            avoidTolls: false,
        }

        if (r.length > 10) {
            r = r.slice(1, 8);
        }
        r.slice(1, r.length - 1).forEach(e => {
            request.waypoints.push({location: new google.maps.LatLng(e.Latitude, e.Longitude)})
        })

        const directionsService = new google.maps.DirectionsService();
        const directionsRenderer = new google.maps.DirectionsRenderer({
            map: map,
        });

        directionsService.route(request, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
                directionsRenderer.setDirections(result);
                directionsRenderer.setOptions({
                    markerOptions: {
                        icon: 'point.png'
                    },
                    polylineOptions: {
                        strokeColor: '#ec6a6a'
                    }
                })
            }
        })
    });
}
