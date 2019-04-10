var map; // Initializing map variable as global  

var markers = []; // Initializing markers as global 

// Data array stores the coords and other details of various plots
var data = [
    {
        phase: 1,
        plot: 4,
        lat: 12.843833,
        lng: 80.219185,
        name: ''
    }, {
        phase: 1,
        plot: 5,
        lat: 12.843786,
        lng: 80.219311,
        name: ''
    }, {
        phase: 1,
        plot: 19,
        lat: 12.843115,
        lng: 80.220427,
        name: ''
    }, {
        phase: 1,
        plot: 35,
        lat: 12.843676,
        lng: 80.220188,
        name: ''
    }, {
        phase: 1,
        plot: 101,
        lat: 12.842231,
        lng: 80.219691,
        name: ''
    }, {
        phase: 1,
        plot: 105,
        lat: 12.841785,
        lng: 80.219751,
        name: ''
    }, {
        phase: 1,
        plot: 185,
        lat: 12.843784,
        lng: 80.218734,
        name: ''
    }, {
        phase: 1,
        plot: 187,
        lat: 12.844088,
        lng: 80.218665,
        name: ''
    }, {
        phase: 1,
        plot: 200,
        lat: 12.844348,
        lng: 80.218978,
        name: ''
    }, {
        phase: 1,
        plot: 206,
        lat: 12.845023,
        lng: 80.218601,
        name: ''
    }, {
        phase: 1,
        plot: 209,
        lat: 12.845245,
        lng: 80.218879,
        name: ''
    }, {
        phase: 1,
        plot: 215,
        lat: 12.845419,
        lng: 80.218691,
        name: ''
    }, {
        phase: 1,
        plot: 216,
        lat: 12.845382,
        lng: 80.218952,
        name: ''
    }, {
        phase: 1,
        plot: 217,
        lat: 12.845510,
        lng: 80.218961,
        name: ''
    }, {
        phase: 1,
        plot: 218,
        lat: 12.845600,
        lng: 80.218969,
        name: ''
    }, {
        phase: 2,
        plot: 9,
        lat: 12.841687,
        lng: 80.220118,
        name: ''
    }, {
        phase: 2,
        plot: 23,
        lat: 12.841238,
        lng: 80.219953,
        name: ''
    }, {
        phase: 2,
        plot: 48,
        lat: 12.841058,
        lng: 80.220368,
        name: ''
    }, {
        phase: 2,
        plot: 61,
        lat: 12.839814,
        lng: 80.220335,
        name: ''
    }, {
        phase: 2,
        plot: 90,
        lat: 12.840121,
        lng: 80.221604,
        name: ''
    }, {
        phase: 2,
        plot: 95,
        lat: 12.840266,
        lng: 80.221129,
        name: ''
    }, {
        phase: 2,
        plot: 96,
        lat: 12.840275,
        lng: 80.221069,
        name: ''
    }, {
        phase: 2,
        plot: 97,
        lat: 12.840276,
        lng: 80.220977,
        name: ''
    }, {
        phase: 2,
        plot: 99,
        lat: 12.840287,
        lng: 80.220758,
        name: ''
    }, {
        phase: 2,
        plot: 107,
        lat: 12.840653,
        lng: 80.220735,
        name: ''
    }, {
        phase: 2,
        plot: 111,
        lat: 12.840600,
        lng: 80.220858,
        name: ''
    }, {
        phase: 2,
        plot: 116,
        lat: 12.840658,
        lng: 80.220986,
        name: ''
    }, {
        phase: 2,
        plot: 123,
        lat: 12.840739,
        lng: 80.221245,
        name: ''
    }, {
        phase: 2,
        plot: 125,
        lat: 12.840537,
        lng: 80.221199,
        name: ''
    }, {
        phase: 2,
        plot: 126,
        lat: 12.840516,
        lng: 80.221263,
        name: ''
    }, {
        phase: 2,
        plot: 128,
        lat: 12.840606,
        lng: 80.221287,
        name: ''
    }, {
        phase: 2,
        plot: 129,
        lat: 12.840686,
        lng: 80.221302,
        name: ''
    }, {
        phase: 2,
        plot: 140,
        lat: 12.840393,
        lng: 80.220735,
        name: ''
    }, {
        phase: 2,
        plot: 141,
        lat: 12.840375,
        lng: 80.220787,
        name: ''
    }, {
        phase: 2,
        plot: 142,
        lat: 12.840368,
        lng: 80.220851,
        name: ''
    }, {
        phase: 2,
        plot: 143,
        lat: 12.840373,
        lng: 80.220906,
        name: ''
    }, {
        phase: 2,
        plot: 144,
        lat: 12.840368,
        lng: 80.220961,
        name: ''
    }, {
        phase: 2,
        plot: 145,
        lat: 12.840363,
        lng: 80.221024,
        name: ''
    }, {
        phase: 2,
        plot: 146,
        lat: 12.840365,
        lng: 80.221069,
        name: ''
    }, {
        phase: 2,
        plot: 147,
        lat: 12.840374,
        lng: 80.221128,
        name: ''
    }, {
        phase: 2,
        plot: 148,
        lat: 12.840377,
        lng: 80.221188,
        name: ''
    }, {
        phase: 2,
        plot: 149,
        lat: 12.840373,
        lng: 80.221239,
        name: ''
    }, {
        phase: 2,
        plot: 150,
        lat: 12.840370,
        lng: 80.221301,
        name: ''
    }, {
        phase: 2,
        plot: 151,
        lat: 12.840371,
        lng: 80.221356,
        name: ''
    }, {
        phase: 2,
        plot: 152,
        lat: 12.840388,
        lng: 80.221407,
        name: ''
    }, {
        phase: 2,
        plot: 153,
        lat: 12.840363,
        lng: 80.221441,
        name: ''
    }, {
        phase: 2,
        plot: 154,
        lat: 12.840371,
        lng: 80.221465,
        name: ''
    }, {
        phase: 2,
        plot: 155,
        lat: 12.840373,
        lng: 80.221496,
        name: ''
    }, {
        phase: 2,
        plot: 156,
        lat: 12.840378,
        lng: 80.221548,
        name: ''
    },
];
// initMap() initializes the map based on the given center
function initMap() {
    var chennai = {
        lat: 13.0827,
        lng: 80.2707
    };
    var location = {
        zoom: 8,
        center: chennai,
    };
    map = new google.maps.Map(document.getElementById('map'), location); // Position from which the map opens
    for (var i = 0; i <= data.length; i++) { // loop to call addMarker() for all the values of the data array
        var locationPointer = {
            coords: {
                lat: data[i].lat,
                lng: data[i].lng
            }
        };
        console.log(locationPointer.coords);
        addMarker(locationPointer.coords);
    }
}
//Coords collected from the data is assigned to the marker array
function addMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    markers.push(marker);
}
// Sets Markers to all the positions given by the Data array
function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}
// Clears the all markers set by setMapOnAll when search icon is pressed
function clearMarkers() {
    setMapOnAll(null);
}
function showMarkers() {
    var pointers = []; // Pointer is the array of objects that is going to store the searched plot number's Current object value 
    //update marker based on search value
    // Event  Handling
    var phaseNo = parseInt(document.getElementById('phase_sel').value);
    var plotKey = parseInt(document.getElementById("txt").value);
    // Pushing the value of the searched plot to the pointer
    data.forEach(function (element) {
        if (element.phase == phaseNo && element.plot == plotKey) {
            temp = {
                coords: {
                    lat: element.lat,
                    lng: element.lng
                },
                iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
                content: '<h2>Phase-' + element.phase + ' Plot No.' + element.plot + '</h2>'
            };
            pointers.push(temp);
        }
    });
    for (var i = 0; i < pointers.length; i++) {
        addPointer(pointers[i]);
    }
    // Add Marker Function 
    function addPointer(props) {
        var pointer = new google.maps.Marker({
            position: props.coords,
            map: map,
        });
        // Check for custom icon
        if (props.iconImage) {
            // Set icon image
            pointer.setIcon(props.iconImage);
        }
        // Check content
        if (props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            });
            pointer.addListener('click', function () {
                infoWindow.open(map, pointer);
            });
        }
    }
}
