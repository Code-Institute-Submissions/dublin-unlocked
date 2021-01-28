//-------------- Google Maps API ------------------ \\

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 53.350140, lng: -6.25972 },
    zoom: 11,
  });

// Map Markers for Restaurants
var restaurantMarkers = [
    {
        location: {lat:53.35441990342235,lng:-6.263952129450252},
        content: "<h4>Chapter One</h4>"
    },
    {
        location: {lat:53.34712459638529,lng:-6.268370298694105},
        content: "<h4>Brother Hubbard</h4>"
    },
    {
        location: {lat:53.33699287623336,lng:-6.273068559230834},
        content: "<h4>The Fumbally</h4>"
    },
    {
        location: {lat:53.3298763791307,lng:-6.271765476429289},
        content: "<h4>Locks Windsor Terrace</h4>"
    },
    {
        location: {lat:53.346911147985274,lng:-6.2556921832498436},
        content: "<h4>The Vintage Kitchen</h4>"
    },
    {
        location: {lat:53.358844802313236,lng:-6.2545826068658945},
        content: "<h4>Wallace's Asti </h4>"
    },
        {
        location: {lat:53.34685523143547,lng:-6.279105135490152},
        content: "<h4>Urbanity</h4>"
    },
        {
        location: {lat:53.33156818578229,lng:-6.25158695818032},
        content: "<h4>The Sussex Restaurant</h4>"
    }
];

var parksMarkers = [
    {   
        location: {lat:53.3557716471892,lng:-6.3298363476550925},
        content: "<h4>Phoenix Park</h4>"

    },
    {   
        location: {lat:53.33812000626964,lng:6.3298363476550925},
        content: "<h4>St Stephen's Green</h4>"

    },
    {   
        location: {lat:53.339684791859355,lng:-6.249239751638084},
        content: "<h4>Merrion Square</h4>"

    },
    {   
        location: {lat:53.33525993152436,lng:-6.260959053351073},
        content: "<h4>Iveagh Gardens</h4>"

    },
    {   
        location: {lat:53.327345238744854,lng:6.236112437057162},
        content: "<h4>Herbert Park</h4>"

    },
    {   
        location: {lat:53.34150946419814,lng:6.2224194400413815},
        content: "<h4>Ringsend Park</h4>"

    },
    {   
        location: {lat:53.371744418201125,lng:-6.178802520201377},
        content: "<h4>Saint Anne's Park</h4>"

    },
    {   
        location: {lat:53.372578108130725,lng:-6.2720217432234255},
        content: "<h4>National Botanic Gardens</h4>"

    },
    {   
        location: {lat:53.37730978686308,lng:-6.303144764855486},
        content: "<h4>Tolka Valley Park</h4>"

    },
    {   
        location: {lat:53.34447165075605,lng:-6.318114004602383},
        content: "<h4>Irish National War Memorial Park</h4>"

    }
]

var placeMarkers = [
       {   
        location: {lat:53.34289926451081,lng:-6.267380102660142},
        content: "<h4>Dublin Castle</h4>"

    },
       {   
        location: {lat:53.34353777163255,lng:-6.270908759708779},
        content: "<h4>Christ Church Cathedral</h4>"

    },
       {   
        location: {lat:53.346307709130365,lng:-6.263086562536631},
        content: "<h4>Ha'penny Bridge</h4>"

    },
       {   
        location: {lat:53.34989123569018,lng:-6.260232552835892},
        content: "<h4>The Spire</h4>"

    },
       {   
        location: {lat:53.340245896543756,lng:-6.254576110145122},
        content: "<h4>National Museum of Ireland- Archaeology</h4>"

    },
       {   
        location: {lat:53.34213087932087,lng:-6.286829126034628},
        content: "<h4>Guinness Storehouse</h4>"

    },
       {   
        location: {lat:53.34394471053305,lng:-6.3097819251488545},
        content: "<h4>The Book of Kells</h4>"

    },
       {   
        location: {lat:53.34188411861057,lng:-6.3097819251488545},
        content: "<h4>Kilmainham Gaol</h4>"

    }
]

var theatreMarkers = [
       {   
        location: {lat:53.35127963967363,lng:-6.260471051472172},
        content: "<h4>Savoy Cinema</h4>"

    },
       {   
        location: {lat:53.35024903442389,lng:-6.267647705179361},
        content: "<h4>Cineworld Cinema </h4>"

    },
       {   
        location: {lat:53.348529201046574,lng:-6.227538926019539},
        content: "<h4>ODEON</h4>"

    },
       {   
        location: {lat:53.34881080245434,lng:-6.279028308549553},
        content: "<h4>Light House Cinema </h4>"

    },
       {   
        location: {lat:53.348416179396395,lng:-6.257121610527241},
        content: "<h4>Abbey Theatre</h4>"

    },
       {   
        location: {lat:53.34835401965633,lng:-6.255652622986885},
        content: "<h4>Liberty Hall Theatre</h4>"

    },
       {   
        location: {lat:53.34419831758027,lng:-6.23998835680323},
        content: "<h4>Bord Gais Energy Theatre</h4>"

    },
       {   
        location: {lat:53.340473821630326,lng:-6.261553815441377},
        content: "<h4>The Gaiety Theatre</h4>"

    }
]

// Add marker function

    function addMarker(property){
        var marker = new google.maps.Marker({
            position: property.location,
            map:map,
        })
            // Add Info window

        var infoWindow = new google.maps.InfoWindow({
            content: property.content
        });

        marker.addListener("click",function(){
            infoWindow.open(map,marker);
        });
}

// Loop for adding markers of restaurants
    for(var i = 0; i < restaurantMarkers.length; i++) {
         addMarker(restaurantMarkers[i]);
    }
}